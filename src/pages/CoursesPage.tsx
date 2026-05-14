import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Clock, CheckCircle, Star, TrendingUp, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { courses } from "@/data/courseData";

// Programme data
const programmes = [
  {
    id: "bba-ha",
    title: "BBA<br/>Hospital Administration",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Users,
    color: "accent",
    overview: courses.find(c => c.id === "bba-hospital-administration")?.description || "",
    scope: courses.find(c => c.id === "bba-hospital-administration")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with minimum 50% marks in any stream",
    highlights: courses.find(c => c.id === "bba-hospital-administration")?.highlights || []
  },
  {
    id: "bcom-logistics",
    title: "B.Com Logistics and Supply Chain Management",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Briefcase,
    color: "secondary",
    overview: courses.find(c => c.id === "bcom-logistics")?.description || "",
    scope: courses.find(c => c.id === "bcom-logistics")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: courses.find(c => c.id === "bcom-logistics")?.highlights || []
  },
  {
    id: "bsc-ai",
    title: "B.Sc AI<br/>and Data Science",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Target,
    color: "primary",
    overview: courses.find(c => c.id === "bsc-ai-data-science")?.description || "",
    scope: courses.find(c => c.id === "bsc-ai-data-science")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with Mathematics and Computer Science, minimum 60% marks",
    highlights: courses.find(c => c.id === "bsc-ai-data-science")?.highlights || []
  },
  {
    id: "bcom-ba",
    title: "B.Com<br/>Business Analytics",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Target,
    color: "primary",
    overview: courses.find(c => c.id === "bcom-business-analytics")?.description || "",
    scope: courses.find(c => c.id === "bcom-business-analytics")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: courses.find(c => c.id === "bcom-business-analytics")?.highlights || []
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Target,
    color: "secondary",
    overview: courses.find(c => c.id === "bca")?.description || "",
    scope: courses.find(c => c.id === "bca")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with Mathematics and minimum 50% marks",
    highlights: courses.find(c => c.id === "bca")?.highlights || []
  },
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA)",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Briefcase,
    color: "accent",
    overview: courses.find(c => c.id === "bba")?.description || "",
    scope: courses.find(c => c.id === "bba")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with minimum 50% marks in any stream",
    highlights: courses.find(c => c.id === "bba")?.highlights || []
  },
  {
    id: "bcom-finance",
    title: "B.Com Finance",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: TrendingUp,
    color: "secondary",
    overview: courses.find(c => c.id === "bcom-finance")?.description || "",
    scope: courses.find(c => c.id === "bcom-finance")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: courses.find(c => c.id === "bcom-finance")?.highlights || []
  },
  {
    id: "bcom-cooperation",
    title: "B.Com Co-Operation",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: Users,
    color: "primary",
    overview: courses.find(c => c.id === "bcom-cooperation")?.description || "",
    scope: courses.find(c => c.id === "bcom-cooperation")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: courses.find(c => c.id === "bcom-cooperation")?.highlights || []
  },
  {
    id: "ba-english",
    title: "BA English",
    category: "Undergraduate",
    duration: "FYUG Programme",
    icon: BookOpen,
    color: "primary",
    overview: courses.find(c => c.id === "ba-english")?.description || "",
    scope: courses.find(c => c.id === "ba-english")?.careerOpportunities?.join(", ") || "",
    eligibility: "10+2 with minimum 50% marks in English and overall aggregate",
    highlights: courses.find(c => c.id === "ba-english")?.highlights || []
  },
  {
    id: "ma-english",
    title: "MA English",
    category: "Postgraduate",
    duration: "2 Years",
    icon: BookOpen,
    color: "accent",
    overview: courses.find(c => c.id === "ma-english")?.description || "",
    scope: courses.find(c => c.id === "ma-english")?.careerOpportunities?.join(", ") || "",
    eligibility: "BA English with minimum 55% marks",
    highlights: courses.find(c => c.id === "ma-english")?.highlights || []
  },
  {
    id: "mcom-finance",
    title: "M.Com Finance",
    category: "Postgraduate",
    duration: "2 Years",
    icon: TrendingUp,
    color: "secondary",
    overview: courses.find(c => c.id === "mcom-finance")?.description || "",
    scope: courses.find(c => c.id === "mcom-finance")?.careerOpportunities?.join(", ") || "",
    eligibility: "B.Com with minimum 55% marks",
    highlights: courses.find(c => c.id === "mcom-finance")?.highlights || []
  }
];

const ProgrammeCard = ({ programme, index, navigate }: { programme: typeof programmes[0]; index: number; navigate: any }) => {
  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.15)" }}
      className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden group"
    >
      {/* Header */}
      <div className={`p-4 sm:p-6 bg-gradient-to-r from-${programme.color}/10 to-${programme.color}/5 border-b border-border`}>
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-${programme.color}/20 rounded-xl flex items-center justify-center">
            <programme.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${programme.color}`} />
          </div>
          <div className="text-right">
            <span className="text-[10px] sm:text-xs font-semibold text-${programme.color} uppercase tracking-wide">
              {programme.category}
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground">{programme.duration}</p>
          </div>
        </div>
        
        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-${programme.color} transition-colors" dangerouslySetInnerHTML={{ __html: programme.title }}>
        </h3>
        
        <p className="text-gray-700 text-xs sm:text-sm line-clamp-3">
          {truncateDescription(programme.overview)}
        </p>
      </div>

      {/* Footer */}
      <div className="p-3 sm:p-4 bg-background border-t border-border">
        <div className="flex items-center justify-start">
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course/${programme.id}`);
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const filteredProgrammes = programmes.filter(programme => {
    if (activeTab === "all") return true;
    if (activeTab === "ug") return programme.category === "Undergraduate";
    if (activeTab === "pg") return programme.category === "Postgraduate";
    return true;
  });

  return (
    <>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[35vh] sm:min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-2 sm:px-3 md:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Academic Programmes</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4"
          >
            Programmes
          </motion.h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Programmes Overview */}
      <section className="py-6 sm:py-8 bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Choose Your Programme
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="inline-flex p-1 bg-card rounded-xl border border-border shadow-lg">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "all"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Programmes
              </button>
              <button
                onClick={() => setActiveTab("ug")}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "ug"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Undergraduate
              </button>
              <button
                onClick={() => setActiveTab("pg")}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeTab === "pg"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Postgraduate
              </button>
            </div>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base"
              onClick={() => {
                navigate("/admission");
                setTimeout(() => {
                  const element = document.getElementById("management-quota-form");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Apply
            </Button>
          </div>

          {/* Programme Cards */}
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 align-start justify-items-center max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
                  {filteredProgrammes.map((programme, index) => (
                    <ProgrammeCard key={programme.id} programme={programme} index={index} navigate={navigate} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default CoursesPage;
