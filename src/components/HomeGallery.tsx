import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { ArrowRight, Camera } from "lucide-react";

import { client, urlFor } from "@/sanity";

type GalleryItem = {
  _id: string;

  title: string;

  image: any;

  category?: string;

  date?: string;

  likes?: number;
};

const HomeGallery = () => {
  const [galleryImages, setGalleryImages] = useState<any[]>([]);

  // FETCH GALLERY
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "gallery"] | order(_createdAt desc)[0...15]{
            _id,
            title,
            image,
            category,
            date,
            likes
          }
        `);

        const formatted = data.map((item: GalleryItem) => ({
          ...item,

          thumbnail: item.image ? urlFor(item.image).url() : "",
        }));

        setGalleryImages(formatted);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, []);

  // DUPLICATE FOR INFINITE LOOP
  const duplicatedImages = [...galleryImages, ...galleryImages];

  // EMPTY STATE
  if (galleryImages.length === 0) {
    return (
      <section className="w-full bg-background py-8">
        <div className="container px-4 text-center text-muted-foreground text-sm">
          <p className="font-medium text-foreground mb-1">No Gallery Images</p>

          <p>Add images in Sanity CMS</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-background relative -mt-4">
      {/* Heading */}
      <div className="container px-4 py-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            College Snapshots
          </span>
        </h2>

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 80,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="h-1 bg-accent rounded-full mx-auto mb-6"
        />
      </div>

      {/* Auto Scrolling Strip */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <div
          className="flex gap-0"
          style={{
            animation: `scroll ${galleryImages.length * 4}s linear infinite`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image._id}-${index}`}
              className="flex-shrink-0 w-80 h-48 md:h-56 relative overflow-hidden group cursor-pointer"
              onClick={() => (window.location.href = "/gallery")}
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold line-clamp-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="absolute right-0 top-28 h-[calc(100%-7rem)] w-48 md:w-56 bg-gradient-to-l from-black/70 via-black/50 to-transparent flex items-center justify-center z-10">
        <a
          href="/gallery"
          className="bg-white text-black hover:bg-gray-100 font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base border-2 border-white/30 whitespace-nowrap"
          style={{
            marginRight: "60px",
          }}
        >
          <Camera className="w-4 h-4 md:w-5 md:h-5" />
          View all
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </a>
      </div>

      {/* Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-${galleryImages.length * 320}px);
              }
            }
          `,
        }}
      />
    </section>
  );
};

export default HomeGallery;
