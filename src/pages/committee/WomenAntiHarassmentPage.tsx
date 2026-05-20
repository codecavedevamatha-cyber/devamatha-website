import { motion } from "framer-motion";
import { ArrowLeft, Heart, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const WomenAntiHarassmentPage = () => {
  const navigate = useNavigate();

  const members = [
    { name: "Jismy John", role: "Coordinator" },
    { name: "Monisha Mohandas", role: "Member" },
    { name: "Sarisa David", role: "Member" },
    { name: "Amitha Benny", role: "Member" }
  ];

  return (
    <>
      <Helmet>
        <title>Women's Anti-Harassment Cell | Devamatha College</title>
        <meta
          name="description"
          content="Women's Anti-Harassment Cell details at Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-pink-600 to-rose-800 text-white overflow-hidden">
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                Women's Anti-Harassment Cell
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
              Women's Anti-Harassment Cell
            </h2>
            <p className="text-muted-foreground leading-relaxed italic mb-4">
              "Educate a man, you educate an individual; educate a woman, you educate a family."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The College Women's Cell endeavours to empower women and promote gender sensitivity, thereby fostering a safe and congenial environment on the campus. The Cell also functions as a Women's Grievance Redressal Committee, addressing issues and concerns related to women students and staff.
            </p>
          </motion.div>

          {/* Committee Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-2xl p-8 border border-pink-200 dark:border-pink-800"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-600" />
              Committee Members
            </h2>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Jismy John (Coordinator)",
                  "Monisha Mohandas (Member)",
                  "Sarisa David (Member)",
                  "Amitha Benny (Member)"
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-pink-700" />
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

export default WomenAntiHarassmentPage;
