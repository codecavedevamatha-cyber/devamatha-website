import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight, ImageIcon, Maximize2, X } from "lucide-react";

import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { client, urlFor } from "@/sanity";

type GalleryImageItem = {
  _id: string;
  title: string;
  image: any;
};

type CategoryDetails = {
  _id: string;
  name: string;
  yearGallery?: {
    _id: string;
    year: number;
  };
};

const GalleryImagesPage = () => {
  const { categoryId } = useParams();

  const [category, setCategory] = useState<CategoryDetails | null>(null);
  const [images, setImages] = useState<GalleryImageItem[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImageItem | null>(
    null,
  );
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!categoryId) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await client.fetch(
          `{
            "category": *[_type == "galleryCategory" && _id == $categoryId][0]{
              _id,
              name,
              yearGallery->{
                _id,
                year
              }
            },
            "images": *[
              _type == "galleryImage" &&
              category._ref == $categoryId
            ] | order(_createdAt desc){
              _id,
              title,
              image
            }
          }`,
          { categoryId },
        );

        setCategory(data.category || null);
        setImages(data.images || []);
      } catch (fetchError) {
        console.error("Error fetching gallery images:", fetchError);

        setError("Unable to load gallery images right now.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [categoryId]);

  const handleImageLoad = useCallback((id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  }, []);

  const openLightbox = (photo: GalleryImageItem) => {
    setSelectedPhoto(photo);

    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);

    document.body.style.overflow = "unset";
  };

  const navigatePhoto = useCallback(
    (direction: "next" | "prev") => {
      if (!selectedPhoto || images.length === 0) return;

      const currentIndex = images.findIndex(
        (item) => item._id === selectedPhoto._id,
      );

      let newIndex;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % images.length;
      } else {
        newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      }

      setSelectedPhoto(images[newIndex]);
    },
    [images, selectedPhoto],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === "Escape") closeLightbox();

      if (e.key === "ArrowLeft") navigatePhoto("prev");

      if (e.key === "ArrowRight") navigatePhoto("next");
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigatePhoto, selectedPhoto]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {category?.name ? `${category.name} Gallery` : "Gallery Images"} |
          Devamatha College
        </title>
        <meta
          name="description"
          content="Browse photos from Devamatha Arts & Science College Paisakary."
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
            {category?.name || "Gallery"}
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
            {category?.yearGallery ? (
              <Link
                to={`/gallery/year/${category.yearGallery._id}`}
                className="hover:text-primary transition-colors"
              >
                {category.yearGallery.year}
              </Link>
            ) : (
              <span>Year</span>
            )}
            <span className="mx-2">&gt;</span>
            <span className="text-foreground">
              {category?.name || "Category"}
            </span>
          </motion.nav>

          {isLoading && (
            <p className="text-center text-muted-foreground">
              Loading photos...
            </p>
          )}

          {error && <p className="text-center text-destructive">{error}</p>}

          {!isLoading && !error && images.length === 0 && (
            <p className="text-center text-muted-foreground">
              No photos found in this album.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {images.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: !item.image || loadedImages.has(item._id) ? 1 : 0,
                  y: !item.image || loadedImages.has(item._id) ? 0 : 30,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-md cursor-pointer"
                onClick={() => {
                  if (item.image) openLightbox(item);
                }}
              >
                <div className="aspect-video relative overflow-hidden">
                  {item.image ? (
                    <img
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      loading="lazy"
                      onLoad={() => handleImageLoad(item._id)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                      <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-white mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-[90vh] mx-4">
              <img
                src={urlFor(selectedPhoto.image).url()}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* PREV */}
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  navigatePhoto("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* NEXT */}
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  navigatePhoto("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* CLOSE */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* TITLE */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {selectedPhoto.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CollegeFooter />
    </>
  );
};

export default GalleryImagesPage;
