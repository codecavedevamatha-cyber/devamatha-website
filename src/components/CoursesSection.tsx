import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Award, Code, HeartPulse, Truck, Briefcase, Globe, Landmark, ChevronRight, Brain, Cpu, Dna, GraduationCap } from "lucide-react";
import { courses } from "@/data/courseData";

// Assign icons and eligibility information to courses
const newGenCourses = [
  {
    name: "BBA<br/>Hospital Administration",
    id: "bba-hospital-administration",
    icon: HeartPulse,
    eligibility: courses.find(c => c.id === "bba-hospital-administration")?.description || ""
  },
  {
    name: "B.Com Logistics & Supply Chain Management",
    id: "bcom-logistics",
    icon: Truck,
    eligibility: courses.find(c => c.id === "bcom-logistics")?.description || ""
  },
  {
    name: "B.Sc AI<br/>and Data Science",
    id: "bsc-ai-data-science",
    icon: Brain,
    eligibility: courses.find(c => c.id === "bsc-ai-data-science")?.description || ""
  },
  {
    name: "B.Com<br/>Business Analytics",
    id: "bcom-business-analytics",
    icon: Cpu,
    eligibility: courses.find(c => c.id === "bcom-business-analytics")?.description || ""
  }
];

const ugCourses = [
  {
    name: "Bachelor of Computer Applications (BCA)",
    id: "bca",
    icon: Code,
    eligibility: courses.find(c => c.id === "bca")?.description || ""
  },
  {
    name: "Bachelor of Business Administration (BBA)",
    id: "bba",
    icon: Briefcase,
    eligibility: courses.find(c => c.id === "bba")?.description || ""
  },
  {
    name: "B.Com Finance",
    id: "bcom-finance",
    icon: Landmark,
    eligibility: courses.find(c => c.id === "bcom-finance")?.description || ""
  },
  {
    name: "B.Com Co-Operation",
    id: "bcom-cooperation",
    icon: Landmark,
    eligibility: courses.find(c => c.id === "bcom-cooperation")?.description || ""
  },
  {
    name: "BA English",
    id: "ba-english",
    icon: BookOpen,
    eligibility: courses.find(c => c.id === "ba-english")?.description || ""
  }
];

const pgCourses = [
  {
    name: "MA English",
    id: "ma-english",
    icon: Globe,
    eligibility: courses.find(c => c.id === "ma-english")?.description || ""
  },
  {
    name: "M.Com Finance",
    id: "mcom-finance",
    icon: Landmark,
    eligibility: courses.find(c => c.id === "mcom-finance")?.description || ""
  }
];

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<"newgen" | "UG" | "PG">("newgen");
  const navigate = useNavigate();

  const truncateDescription = (text: string, maxLength: number = 180) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const currentCourses = activeTab === "newgen" ? newGenCourses : activeTab === "UG" ? ugCourses : pgCourses;

  return (
    <section id="courses" className="pt-16 pb-2 bg-background relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Programmes Offered</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Custom Segmented Control (Tabs) */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex bg-secondary/80 p-1 sm:p-1.5 rounded-2xl backdrop-blur-md border border-border/50 shadow-sm">
            <button
              onClick={() => setActiveTab("newgen")}
              className={`relative px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "newgen" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "newgen" && (
                <motion.div
                  layoutId="activeTabBox"
                  className="absolute inset-0 bg-background rounded-xl shadow-md border border-border/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> New Gen Programmes
              </span>
            </button>
            <button
              onClick={() => setActiveTab("UG")}
              className={`relative px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "UG" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "UG" && (
                <motion.div
                  layoutId="activeTabBox"
                  className="absolute inset-0 bg-background rounded-xl shadow-md border border-border/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> UG Programmes
              </span>
            </button>
            <button
              onClick={() => setActiveTab("PG")}
              className={`relative px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "PG" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "PG" && (
                <motion.div
                  layoutId="activeTabBox"
                  className="absolute inset-0 bg-background rounded-xl shadow-md border border-border/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> PG Programmes
              </span>
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="min-h-[300px]">
          <div
            className={`${activeTab === "UG" || activeTab === "PG" ? "flex flex-wrap justify-center gap-4 sm:gap-6" : "grid gap-4 sm:gap-6"} ${activeTab === "UG" || activeTab === "PG" ? "" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}
          >
            {currentCourses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.name}
                  className={`flex flex-col h-full bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-primary/5 backdrop-blur-sm border border-gray-200 hover:border-accent/60 rounded-3xl p-4 sm:p-6 lg:p-7 transition-all duration-300 overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1 ${activeTab === "UG" || activeTab === "PG" ? "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-12px)]" : ""}`}
                >
                  {/* Hover internal gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="absolute top-0 right-0 p-3 sm:p-5 opacity-0 hover:opacity-100 transition-all translate-x-4 hover:translate-x-0 duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center mb-3 sm:mb-4 hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-sm flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-2 sm:mb-3 hover:text-accent transition-colors duration-300 min-h-[40px] sm:min-h-[56px] line-clamp-2" dangerouslySetInnerHTML={{ __html: course.name }}>
                  </h3>

                  <div className="flex-grow flex flex-col">
                    <div className="bg-accent/5 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px] flex-grow">
                      <p className="text-[10px] sm:text-xs text-foreground mb-1 font-semibold">Eligibility</p>
                      <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed line-clamp-4">
                        {truncateDescription(course.eligibility)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex-shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/course/${course.id}`);
                      }}
                      className="w-full bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-md hover:scale-105 min-h-[40px] sm:min-h-[44px]"
                    >
                      Know More
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
