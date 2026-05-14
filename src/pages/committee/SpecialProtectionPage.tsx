import { motion } from "framer-motion";
import { ArrowLeft, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const SpecialProtectionPage = () => {
  const navigate = useNavigate();

  const members = [
    { name: "Dr. M. J. Mathew", role: "Principal – Chairman" },
    { name: "Twinkle Sasi", role: "SHO, Payyavoor Police Station - Convenor" },
    { name: "Rijesh SCPO 6311", role: "Jt.Convener" },
    { name: "Thomas Ayyankanayil", role: "Local Media Representative" },
    { name: "Anees Nettananickal", role: "Ward Member" },
    { name: "Tomichen E. M.", role: "Vice Principal" },
    { name: "Shaijo P. S.", role: "HOD, Commerce & BBA" },
    { name: "Jismy John", role: "Member" },
    { name: "Saiju P. J.", role: "PTA Secretary" },
    { name: "Pius Paredom", role: "PTA Chairman" },
    { name: "Pravisha N.", role: "NSS Programme Officer" },
    { name: "Sebastian C. M.", role: "Office Superintendent" },
    { name: "Jins Cheriyan", role: "Accountant" }
  ];

  return (
    <>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-indigo-600 to-blue-800 text-white overflow-hidden">
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                Special Protection Group (SPG)
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
              Special Protection Group (SPG)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Special Protection Group (SPG), constituted as per the guidelines of the University and Government of Kerala, is a college-level committee constituted to ensure the safety, dignity, and well-being of students on campus. It primarily focuses on preventing harassment, ragging, and any form of abuse, while promoting a secure and inclusive educational environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The SPG is established to create a protective framework within the institution where students can study without fear. It works proactively to identify risks, respond to grievances, and uphold discipline and ethical conduct.
            </p>
          </motion.div>

          {/* Committee Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-indigo-600" />
              Committee Members
            </h2>
            
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Dr. M. J. Mathew (Principal – Chairman)",
                  "Twinkle Sasi (SHO, Payyavoor Police Station - Convenor)",
                  "Rijesh SCPO 6311 (Jt.Convener)",
                  "Thomas Ayyankanayil (Local Media Representative)",
                  "Anees Nettananickal (Ward Member)",
                  "Tomichen E. M. (Vice Principal)",
                  "Shaijo P. S. (HOD, Commerce & BBA)",
                  "Jismy John (Member)",
                  "Saiju P. J. (PTA Secretary)",
                  "Pius Paredom (PTA Chairman)",
                  "Pravisha N. (NSS Programme Officer)",
                  "Sebastian C. M. (Office Superintendent)",
                  "Jins Cheriyan (Accountant)"
                ].map((member, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-950/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-indigo-700" />
                    </div>
                    <span className="text-sm text-foreground font-medium leading-tight">{member}</span>
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

export default SpecialProtectionPage;
