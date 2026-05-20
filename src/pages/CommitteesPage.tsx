import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Shield, Heart, Users, Briefcase, Star, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";

// Committees data
const committees = [
  {
    id: "anti-ragging",
    title: "Anti Ragging Committee",
    icon: Shield,
    color: "red",
    description: "In pursuance of the UGC Regulations on curbing the menace of ragging in higher educational institutions, the College has constituted an Anti-Ragging Committee.",
    coordinator: "Manu Joseph",
    members: ["Jismy John", "Panchayath President", "Panchayath Member of the ward", "SI of Police", "College Union Chairman", "College Union Vice Chairman"]
  },
  {
    id: "special-protection",
    title: "Special Protection Group (SPG)",
    icon: Shield,
    color: "indigo",
    description: "The Special Protection Group (SPG), constituted as per the guidelines of the University and Government of Kerala, ensures the safety, dignity, and well-being of students on campus.",
    coordinator: "Dr. M. J. Mathew (Principal – Chairman)",
    members: ["Twinkle Sasi (SHO, Payyavoor Police Station - Convenor)", "Rijesh SCPO 6311 (Jt.Convener)", "Thomas Ayyankanayil (Local Media Representative)", "Anees Nettananickal (Ward Member)", "Tomichen E. M. (Vice Principal)", "Shaijo P. S. (HOD, Commerce & BBA)", "Jismy John", "Saiju P. J. (PTA Secretary)", "Pius Paredom (PTA Chairman)", "Pravisha N. (NSS Programme Officer)", "Sebastian C. M. (Office Superintendent)", "Jins Cheriyan (Accountant)"]
  },
  {
    id: "women-anti-harassment",
    title: "Women's Anti-Harassment Cell",
    icon: Heart,
    color: "pink",
    description: "The College Women's Cell endeavours to empower women and promote gender sensitivity, thereby fostering a safe and congenial environment on the campus.",
    coordinator: "Jismy John",
    members: ["Monisha Mohandas", "Sarisa David", "Amitha Benny"]
  },
  {
    id: "students-grievance",
    title: "Students' Grievance Redressal Cell",
    icon: Users,
    color: "accent",
    description: "The Student Grievance Redressal (SGR) Cell addresses the grievances of students and provides appropriate solutions to ensure the smooth functioning of the College.",
    coordinator: "Shaijo P.S (Convener)",
    members: ["Manu Joseph"]
  },
  {
    id: "internship-monitoring",
    title: "Internship Monitoring Committee",
    icon: Briefcase,
    color: "teal",
    description: "The Internship Monitoring Committee is a formal body constituted within the institution to supervise, coordinate, and evaluate student internship programmes.",
    coordinator: "Manu Joseph",
    members: ["Tomichan E M", "Shaijo P S", "Remya M P", "Jismy John"]
  },
  {
    id: "career-guidance",
    title: "Career Guidance and Placement Cell",
    icon: Briefcase,
    color: "blue",
    description: "The Career Guidance and Placement Cell functions as a vital link between students and the professional world, enhancing students' overall employability.",
    coordinator: "Manu Joseph",
    members: ["Pravisha N", "Swathi V.S"]
  },
  {
    id: "students-welfare",
    title: "Students' Welfare Cell",
    icon: Star,
    color: "yellow",
    description: "The Student Welfare Cell is committed to promoting the overall well-being of students by ensuring the effective implementation of various welfare schemes and programmes.",
    coordinator: "Remya M.P",
    members: ["Manu Joseph", "Sibichan Thomas", "Ramzeena", "Jain Antony"]
  }
];

const CommitteesPage = () => {
  const navigate = useNavigate();
  const [selectedCommittee, setSelectedCommittee] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      red: {
        bg: "bg-red-50 dark:bg-red-950/20",
        text: "text-red-600",
        border: "border-red-200 dark:border-red-800",
        hover: "hover:bg-red-100 dark:hover:bg-red-950/30"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-950/20",
        text: "text-indigo-600",
        border: "border-indigo-200 dark:border-indigo-800",
        hover: "hover:bg-indigo-100 dark:hover:bg-indigo-950/30"
      },
      pink: {
        bg: "bg-pink-50 dark:bg-pink-950/20",
        text: "text-pink-600",
        border: "border-pink-200 dark:border-pink-800",
        hover: "hover:bg-pink-100 dark:hover:bg-pink-950/30"
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/30",
        hover: "hover:bg-accent/20"
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-950/20",
        text: "text-teal-600",
        border: "border-teal-200 dark:border-teal-800",
        hover: "hover:bg-teal-100 dark:hover:bg-teal-950/30"
      },
      blue: {
        bg: "bg-blue-50 dark:bg-blue-950/20",
        text: "text-blue-600",
        border: "border-blue-200 dark:border-blue-800",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-950/30"
      },
      yellow: {
        bg: "bg-yellow-50 dark:bg-yellow-950/20",
        text: "text-yellow-600",
        border: "border-yellow-200 dark:border-yellow-800",
        hover: "hover:bg-yellow-100 dark:hover:bg-yellow-950/30"
      }
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <>
      <Helmet>
        <title>Committees | Devamatha College</title>
        <meta
          name="description"
          content="Committee and cell details for Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button
              variant="ghost"
              className="mb-6 text-white hover:bg-white/20"
              onClick={() => navigate("/students-corner")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Students Corner
            </Button>
          </motion.div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl font-bold mb-3"
            >
              Committees
            </motion.h1>
                      </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120,768,120,672,120,576,120,480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const colors = getColorClasses(committee.color);
              const Icon = committee.icon;
              
              return (
                <motion.div
                  key={committee.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-card rounded-2xl p-6 border border-border shadow-lg cursor-pointer transition-all duration-300 ${colors.hover}`}
                  onClick={() => navigate(`/committee/${committee.id}`)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground line-clamp-2">
                      {committee.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {committee.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold">Coordinator:</span> {committee.coordinator}
                    </div>
                    <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80 p-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default CommitteesPage;
