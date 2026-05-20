import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Building, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { courses } from "@/data/courseData";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  // Scroll to top when page loads or course changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  // ID mapping to handle different ID formats
  const idMapping: Record<string, string> = {
    "bba-ha": "bba-hospital-administration",
    "bcom-logistics": "bcom-logistics",
    "bsc-ai": "bsc-ai-data-science",
    "bcom-ba": "bcom-business-analytics",
    "bca": "bca",
    "bba": "bba",
    "bcom-finance": "bcom-finance",
    "bcom-cooperation": "bcom-cooperation",
    "ba-english": "ba-english",
    "ma-english": "ma-english",
    "mcom-finance": "mcom-finance"
  };

  const mappedId = idMapping[courseId] || courseId;
  const course = courses.find((c) => c.id === mappedId);

  if (!course) {
    return (
      <>
        <Helmet>
          <title>Course Not Found | Devamatha College</title>
          <meta
            name="description"
            content="The requested course could not be found at Devamatha Arts & Science College Paisakary."
          />
        </Helmet>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Course not found</h1>
        </div>
        <CollegeFooter />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${course.name.replace(/<br\s*\/?>/gi, " ")} | Devamatha College`}</title>
        <meta name="description" content={course.description} />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/courses')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </motion.button>

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl font-bold mb-24"
              dangerouslySetInnerHTML={{ __html: course.name }}
            >
            </motion.h1>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">About the Programme</h2>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </motion.div>

              {/* Internship */}
              {course.internship && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">Internship</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{course.internship}</p>
                </motion.div>
              )}

              {/* Career Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">Career Opportunities</h2>
                </div>
                <ul className="space-y-2">
                  {course.careerOpportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Opportunities In */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Building className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">Opportunities In</h2>
                </div>
                <ul className="space-y-2">
                  {course.opportunitiesIn.map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Higher Study Options */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">Higher Study Options</h2>
                </div>
                <ul className="space-y-2">
                  {course.higherStudyOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">Highlights</h2>
                </div>
                <ul className="space-y-2">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Additional Apply Now Button at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              navigate('/admission');
              setTimeout(() => {
                const element = document.getElementById("management-quota-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            Apply Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default CourseDetailPage;
