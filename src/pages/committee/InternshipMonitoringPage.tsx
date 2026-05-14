import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const InternshipMonitoringPage = () => {
  const navigate = useNavigate();

  const members = [
    { name: "Manu Joseph", role: "Coordinator" },
    { name: "Tomichan E M", role: "Member" },
    { name: "Shaijo P S", role: "Member" },
    { name: "Remya M P", role: "Member" },
    { name: "Jismy John", role: "Member" }
  ];

  return (
    <>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-teal-600 to-cyan-800 text-white overflow-hidden">
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
                Internship Monitoring Committee
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
              Internship Monitoring Committee
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Internship Monitoring Committee is a formal body constituted within the institution to supervise, coordinate, and evaluate student internship programmes. Its primary objective is to ensure that internships are meaningful, well-structured, and aligned with academic as well as professional standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The committee identifies and approves suitable organizations for student internships. It provides clear guidelines and orientation to students before the commencement of their internships. The committee monitors student attendance, performance, and conduct throughout the internship period. It also collects feedback from both students and employers to assess the effectiveness of the internship experience. Furthermore, the committee evaluates internship reports, presentations, and viva voce examinations. In addition, it maintains proper records of all internship activities and outcomes for future reference and assessment.
            </p>
          </motion.div>

          {/* Committee Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-teal-600" />
              Committee Members
            </h2>
            
            {/* Coordinator */}
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Coordinator</h3>
                  <p className="text-muted-foreground">Manu Joseph</p>
                </div>
              </div>
            </div>

            {/* Members */}
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg text-foreground mb-4">Members</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {["Tomichan E M", "Shaijo P S", "Remya M P", "Jismy John"].map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-teal-700" />
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

export default InternshipMonitoringPage;
