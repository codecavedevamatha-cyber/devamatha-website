import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const CareerGuidancePage = () => {
  const navigate = useNavigate();

  const members = [
    { name: "Manu Joseph", role: "Coordinator" },
    { name: "Pravisha N", role: "Member" },
    { name: "Swathi V.S", role: "Member" }
  ];

  return (
    <>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-blue-600 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
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
              onClick={() => navigate("/committees")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Committees
            </Button>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                Career Guidance and Placement Cell
              </h1>
            </div>
                      </motion.div>
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
        <div className="container max-w-4xl mx-auto px-4 space-y-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Career Guidance and Placement Cell
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Career Guidance and Placement Cell of Devamatha Arts & Science College functions as a vital link between students and the professional world. It is committed to equipping students with the skills, knowledge, and opportunities necessary for successful career development. Through structured training programmes, industry interaction, and placement support, the Cell works to enhance students' overall employability.
            </p>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Objectives
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Placement Cell facilitates campus recruitment drives and creates job placement opportunities for students across various disciplines. It enhances students' employability by organizing skill development programmes and training sessions that focus on communication, aptitude, and professional readiness. The Cell also establishes and strengthens collaborations between the institution and industry, ensuring that students are exposed to current market trends and expectations.
            </p>
            
            {/* Committee Members */}
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-600" />
                Committee Members
              </h3>
              
              {/* Coordinator */}
              <div className="flex items-center gap-4 mb-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Coordinator</h4>
                  <p className="text-sm text-muted-foreground">Manu Joseph</p>
                </div>
              </div>

              {/* Members */}
              <div className="grid md:grid-cols-2 gap-3">
                {["Pravisha N", "Swathi V.S"].map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-blue-700" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default CareerGuidancePage;
