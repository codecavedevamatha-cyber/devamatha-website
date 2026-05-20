import { motion } from "framer-motion";
import { ArrowLeft, Building, Target, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const CommerceClubPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Commerce Club | Devamatha College</title>
        <meta
          name="description"
          content="Commerce Club details at Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
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
              onClick={() => navigate("/students-corner")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Students Corner
            </Button>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                Commerce Club
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
              Commerce Club
            </h2>
            
            {/* Objective */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                Objective
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The Commerce Club aims to enhance the academic and professional skills of students by providing practical exposure to commerce, business, finance, and management-related activities. The Club seeks to bridge the gap between classroom learning and the business world.
              </p>
            </div>

            {/* Functions */}
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                Functions
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Impart skill development and contribute to personality enhancement of students.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Improve communication skills and decision-making abilities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Enhance awareness regarding the business and corporate world.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Spread knowledge about financial markets, banking, taxation, and entrepreneurship.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Organize seminars, workshops, competitions, and commerce-related activities.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default CommerceClubPage;
