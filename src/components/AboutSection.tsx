import { motion } from "framer-motion";
import { Target, Eye, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import aboutImg from "/img/about.jpg";
import { Link } from "react-router-dom";

const TypewriterText = ({
  texts,
  onTitleChange,
}: {
  texts: string[];
  onTitleChange: (title: string) => void;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = 30;
    const deletingSpeed = 20;
    const pauseDuration = 2000;

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayedText((prev) => prev + currentText[charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (charIndex > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  useEffect(() => {
    onTitleChange(currentTextIndex === 0 ? "Our Mission" : "Our Vision");
  }, [currentTextIndex, onTitleChange]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const [currentTitle, setCurrentTitle] = useState("Our Mission");

  return (
    <section id="about" className="py-12 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              College Profile
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto mt-4"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-full">
              <img
                src={aboutImg}
                alt="College Library"
                className="rounded-2xl shadow-xl w-full object-cover h-full opacity-60"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl" />

              {/* Mission and Vision Cards Centered in Image */}
              <motion.div
                variants={container}
                className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8"
              >
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl max-w-md"
                >
                  <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h4 className="font-display text-lg font-bold text-white mb-2">
                    {currentTitle}
                  </h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    <TypewriterText
                      texts={[
                        "Provide an all-inclusive, gender sensitive, environmentally conscious, and intellectually stimulating experiences, both scholastic and non-scholastic, to students so that they may excel in whatever they set their sights on by accompanying them in their intellectual,emotional and spiritual formation.",
                        "Be a beacon of 'light shining on the path' of the students. Being enlightened, they may respond adequately to the opportunities and challenges thrown up by life and become, in the process, socially conscious, conscientious and productive individuals.",
                      ]}
                      onTitleChange={setCurrentTitle}
                    />
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground pt-2 pb-1 px-4 rounded-2xl shadow-xl z-20">
              <GraduationCap className="w-7 h-7 mb-1" />
              <p className="font-display font-bold text-sm leading-tight -mb-1">
                Since
              </p>
              <p className="font-display font-bold text-xl text-accent leading-tight">
                2003
              </p>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-3 border-2 border-accent/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.h3
              variants={item}
              className="text-2xl font-bold text-foreground mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Management
              </span>
            </motion.h3>
            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              The management of Devamatha Arts & Science College, Paisakary, is
              vested in the Devamatha Educational Trust, Paisakary, an
              organization belonging to the Christian minority community.
            </motion.p>
            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              The Trust is committed to providing quality education to students
              across all categories and levels. It seeks to ensure the holistic
              development of learners by offering integral formation and
              effective academic guidance, thereby promoting advancement in
              arts, science, literature, humanities, and other relevant fields
              of knowledge. The Trust upholds an inclusive approach, extending
              educational opportunities irrespective of caste, creed, or gender,
              while placing special emphasis on nurturing spiritual values and
              preserving cultural heritage.
            </motion.p>
            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Furthermore, the Trust aims to impart value-based education,
              either independently or in collaboration with similar
              organizations. It establishes and administers institutions that
              prepare young individuals for competitive examinations,
              professional courses, interviews, and various aptitude
              assessments. In addition, it actively supports the placement and
              career advancement of educated unemployed youth.
            </motion.p>

            <motion.div variants={item} className="mt-auto">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground font-semibold transition-colors duration-300 group"
              >
                Read More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
