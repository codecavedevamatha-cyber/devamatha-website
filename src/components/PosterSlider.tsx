import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PosterSlider = () => {
  // All poster images from poster-slider folder
  const allPosters = [
    "/poster-slider/WhatsApp Image 2026-05-08 at 5.24.15 PM.jpeg",
    "/poster-slider/WhatsApp Image 2026-05-08 at 5.24.15 PM (1).jpeg",
    "/poster-slider/WhatsApp Image 2026-05-08 at 5.24.15 PM (2).jpeg",
    "/poster-slider/WhatsApp Image 2026-05-08 at 5.24.16 PM.jpeg",
    "/poster-slider/WhatsApp Image 2026-05-08 at 5.24.16 PM (1).jpeg",
    "/poster-slider/WhatsApp Image 2026-05-08 at 5.24.17 PM.jpeg"
  ];

  const [posterIndices, setPosterIndices] = useState([0, 1, 2]);
  const [currentRotation, setCurrentRotation] = useState(0);

  // Rotate posters every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation((prev) => {
        const newRotation = (prev + 1) % allPosters.length;
        // Update all 3 poster boxes to show next set of posters
        setPosterIndices([
          (newRotation) % allPosters.length,
          (newRotation + 1) % allPosters.length,
          (newRotation + 2) % allPosters.length
        ]);
        return newRotation;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [allPosters.length]);

  return (
    <section className="w-full bg-background py-8">
      <div className="container px-4">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Latest Posters</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto mb-6"
          />
        </div>

        {/* Poster Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((boxIndex) => (
            <motion.div
              key={boxIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: boxIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <motion.img
                key={posterIndices[boxIndex]}
                src={allPosters[posterIndices[boxIndex]]}
                alt={`Poster ${boxIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-64 md:h-80 object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosterSlider;
