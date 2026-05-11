import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

// Hero slider images from public/Home slider directory
const heroImages = [
  "/Home slider/1.jpg",
  "/Home slider/2.jpg",
  "/Home slider/3.jpg",
  "/Home slider/4.jpg",
  "/Home slider/5.jpg",
  "/Home slider/6.jpg"
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
  }),
};

// Module-level variable to track first load in current session
let hasAnimatedInSession = false;

const TypeWriter = ({ words }: { words: string[] }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
        return;
      }
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className="text-accent">
      {words[wordIdx].slice(0, charIdx)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-2xl md:text-3xl font-bold text-accent"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-xs text-primary-foreground/60 mt-1">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [isFirstLoad, setIsFirstLoad] = useState(!hasAnimatedInSession);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [showText, setShowText] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Hide text after first slide
  useEffect(() => {
    if (currentSlide > 0) {
      setShowText(false);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    if (!hasAnimatedInSession) {
      hasAnimatedInSession = true;
    }
  }, []);

  const title = "DEVAMATHA".split("");

  return (
    <section id="home" ref={sectionRef} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-college-navy selection:bg-accent/40">
      {/* Background with Parallax and Slider */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {showText && (
          <div className="absolute inset-0 bg-gradient-to-b from-college-navy/30 via-college-navy/50 to-college-navy/80 z-10" />
        )}
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            custom={slideDirection}
            src={heroImages[currentSlide]}
            alt={`Deva Matha College Campus ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Animated Aurora Orbs */}
      {showText && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/40 rounded-full blur-[120px] mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-college-sky/40 rounded-full blur-[150px] mix-blend-screen"
          />
        </div>
      )}

      <motion.div style={{ opacity: heroOpacity }} className="container relative z-20 flex flex-col items-center text-center mt-12 md:mt-20">

        {showText && (
          <>
            {/* Main Title with Letter Reveal */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 flex overflow-hidden drop-shadow-2xl">
              {title.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0, rotate: 10 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: isFirstLoad ? 2.9 + i * 0.05 : 0, duration: 0.8, type: "spring", damping: 15 }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isFirstLoad ? 3.5 : 0, duration: 0.8, ease: "easeOut" }}
              className="font-display text-[27.5px] text-accent font-bold tracking-wide drop-shadow-lg"
            >
              ARTS AND SCIENCE COLLEGE, PAISAKARY
            </motion.p>

            {/* Subtle pill for the tagline */}
            <motion.div
               initial={{ opacity: 0, y: -20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: isFirstLoad ? 3 : 0 }}
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mt-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
            >
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm md:text-base text-white/90 font-medium tracking-wide overflow-hidden">
                {"A college that trailblazes with next-gen courses".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: isFirstLoad ? 3.1 + i * 0.03 : 0, duration: 0.3 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.div>

            {/* Glassmorphic Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isFirstLoad ? 4 : 0, duration: 0.8, ease: "easeOut" }}
              className="mt-12 md:mt-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-college-sky to-accent rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500" />
                <Button
                  size="lg"
                  className="relative h-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold text-base px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Slider Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

    </section>
  );
};

export default HeroSection;
