import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { client, urlFor } from "@/sanity";

type PosterType = {
  _id: string;

  image: any;
};

const PosterSlider = () => {
  const [currentRotation, setCurrentRotation] = useState(0);

  const [posterUrls, setPosterUrls] = useState<string[]>([]);

  const [hasEnteredView, setHasEnteredView] = useState(false);

  // FETCH POSTERS FROM SANITY
  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "poster"] | order(_createdAt desc){
            _id,
            image
          }
        `);

        const urls = data.map((item: PosterType) => urlFor(item.image).url());
        setPosterUrls(urls);
      } catch (error) {
        console.error("Error fetching posters:", error);
      }
    };

    fetchPosters();
  }, []);

  // AUTO ROTATION
  useEffect(() => {
    if (posterUrls.length === 0 || !hasEnteredView) return;

    const interval = setInterval(() => {
      setCurrentRotation((prev) => (prev + 1) % posterUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasEnteredView, posterUrls]);

  // EMPTY STATE
  if (posterUrls.length === 0) {
    return (
      <section className="w-full bg-background py-8">
        <div className="container px-4 text-center text-muted-foreground text-sm">
          <p className="font-medium text-foreground mb-1">No Posters Found</p>

          <p>Add posters in Sanity CMS</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="w-full bg-background py-8"
      onViewportEnter={() => setHasEnteredView(true)}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((boxIndex) => (
            <motion.div
              key={boxIndex}
              initial={{
                opacity: 1,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: boxIndex * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <motion.img
                key={`${boxIndex}-${(currentRotation + boxIndex) % posterUrls.length}`}
                src={
                  posterUrls[(currentRotation + boxIndex) % posterUrls.length]
                }
                alt={`Poster ${boxIndex + 1}`}
                initial={{
                  opacity: 0.85,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="w-full h-64 md:h-80 object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PosterSlider;
