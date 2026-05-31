import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FolderOpen } from "lucide-react";

import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { client, urlFor } from "@/sanity";

type YearGalleryItem = {
  _id: string;
  year: number;
};

type GalleryCategoryItem = {
  _id: string;
  name: string;
  thumbnail: any;
};

const GalleryCategoriesPage = () => {
  const { yearId } = useParams();

  const [year, setYear] = useState<YearGalleryItem | null>(null);
  const [categories, setCategories] = useState<GalleryCategoryItem[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!yearId) return;

    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await client.fetch(
          `{
            "year": *[_type == "yearGallery" && _id == $yearId][0]{
              _id,
              year
            },
            "categories": *[
              _type == "galleryCategory" &&
              yearGallery._ref == $yearId
            ] | order(name asc){
              _id,
              name,
              thumbnail
            }
          }`,
          { yearId },
        );

        setYear(data.year || null);
        setCategories(data.categories || []);
      } catch (fetchError) {
        console.error("Error fetching gallery categories:", fetchError);

        setError("Unable to load gallery categories right now.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [yearId]);

  const handleImageLoad = useCallback((id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {year?.year ? `${year.year} Gallery` : "Gallery Categories"} |
          Devamatha College
        </title>
        <meta
          name="description"
          content="Browse photo albums from Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />

      {/* HERO */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
          >
            {year?.year || "Gallery"}
          </motion.h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              fill="hsl(var(--background))"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <motion.nav
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-8 text-sm text-muted-foreground"
          >
            <Link to="/gallery" className="hover:text-primary transition-colors">
              Gallery
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">{year?.year || "Year"}</span>
          </motion.nav>

          {isLoading && (
            <p className="text-center text-muted-foreground">
              Loading albums...
            </p>
          )}

          {error && <p className="text-center text-destructive">{error}</p>}

          {!isLoading && !error && categories.length === 0 && (
            <p className="text-center text-muted-foreground">
              No albums found for this year.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity:
                    !item.thumbnail || loadedImages.has(item._id) ? 1 : 0,
                  y: !item.thumbnail || loadedImages.has(item._id) ? 0 : 30,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
              >
                <Link
                  to={`/gallery/category/${item._id}`}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-md cursor-pointer block"
                >
                  <div className="aspect-video relative overflow-hidden">
                    {item.thumbnail ? (
                      <img
                        src={urlFor(item.thumbnail).url()}
                        alt={item.name}
                        loading="lazy"
                        onLoad={() => handleImageLoad(item._id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <FolderOpen className="w-12 h-12 text-muted-foreground" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                        <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-white mb-1 line-clamp-1">
                          {item.name}
                        </h3>

                        <p className="text-white/80 text-xs sm:text-sm">
                          View photos
                        </p>
                      </div>
                    </div>

                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default GalleryCategoriesPage;
