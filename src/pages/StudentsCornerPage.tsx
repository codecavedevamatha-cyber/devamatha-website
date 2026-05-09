import { motion } from "framer-motion";
import { MapPin, ExternalLink, GraduationCap, Users, Briefcase, Heart, Shield, Phone, Download, Target, Award, CheckCircle, Star, FileText, User, Building, Activity, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { useNavigate } from "react-router-dom";

const StudentsCornerPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-3"
          >
            Student's Corner
          </motion.h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120,768,120,672,120,576,120,480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-background">
        <div className="container max-w-7xl mx-auto px-4 space-y-12">

          {/* K-Reap Portal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-primary/5"></div>
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">K-Reap Portal</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="https://kannuradm.kreap.co.in/applicant/?#/login?client=KANNUR" target="_blank" rel="noopener noreferrer" className="group bg-card p-6 rounded-xl border border-accent/30 hover:border-accent transition-all hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <GraduationCap className="w-5 h-5" />
                    <span className="font-semibold">Course Selection</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Select your courses</p>
                </a>
                <a href="https://kannurops.kreap.co.in/studentLogin/?#/kannur/studentLogin" target="_blank" rel="noopener noreferrer" className="group bg-card p-6 rounded-xl border border-accent/30 hover:border-accent transition-all hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <User className="w-5 h-5" />
                    <span className="font-semibold">Student Login</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Access student portal</p>
                </a>
                <a href="https://kannurops.kreap.co.in/?#/kannur" target="_blank" rel="noopener noreferrer" className="group bg-card p-6 rounded-xl border border-accent/30 hover:border-accent transition-all hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Building className="w-5 h-5" />
                    <span className="font-semibold">College Login</span>
                  </div>
                  <p className="text-sm text-muted-foreground">College administration</p>
                </a>
                <div className="bg-card p-6 rounded-xl border border-accent/30 shadow-md">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">K-reap Contact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">+91-497-271-5185</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Syllabus Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">Syllabus</h2>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.kannuruniversity.ac.in/en/academics/syllabus/?" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-accent to-primary text-white p-6 rounded-xl hover:opacity-90 transition-all flex items-center justify-between group">
                <div>
                  <h3 className="font-semibold text-lg mb-1">FYUG Syllabus</h3>
                  <p className="text-sm opacity-90">Undergraduate programmes</p>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://www.kannuruniversity.ac.in/en/academics/syllabus/pg/pg-affiliated/?" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-primary to-accent text-white p-6 rounded-xl hover:opacity-90 transition-all flex items-center justify-between group">
                <div>
                  <h3 className="font-semibold text-lg mb-1">PG Syllabus</h3>
                  <p className="text-sm opacity-90">Postgraduate programmes</p>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Committees Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-primary/5"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">Committees</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Anti Ragging Committee */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/anti-ragging')}
                  className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl p-6 border border-red-200 dark:border-red-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Anti Ragging Committee</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    UGC Regulations on curbing ragging, comprising faculty members, police personnel, and legal experts...
                  </p>
                  <div className="flex items-center text-red-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Special Protection Group */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/special-protection')}
                  className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Special Protection Group (SPG)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    University and Government guidelines to ensure safety, dignity, and well-being of students on campus...
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Women's Anti-Harassment Cell */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/women-anti-harassment')}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-2xl p-6 border border-pink-200 dark:border-pink-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Women's Anti-Harassment Cell</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "Educate a man, you educate an individual; educate a woman, you educate a family." Empowering women and promoting gender sensitivity...
                  </p>
                  <div className="flex items-center text-pink-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Students' Grievance Redressal Cell */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/students-grievance')}
                  className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/30 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Students' Grievance Redressal Cell</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Addresses student grievances and provides solutions to ensure smooth functioning of the College...
                  </p>
                  <div className="flex items-center text-accent font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Internship Monitoring Committee */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/internship-monitoring')}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Internship Monitoring Committee</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supervises, coordinates, and evaluates student internship programmes to ensure meaningful, well-structured experiences...
                  </p>
                  <div className="flex items-center text-teal-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Career Guidance and Placement Cell */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/career-guidance')}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Career Guidance and Placement Cell</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Vital link between students and professional world, equipping them with skills for career development...
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Students' Welfare Cell */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/students-welfare')}
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Students' Welfare Cell</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Promotes overall well-being through welfare schemes, scholarships, and healthcare services...
                  </p>
                  <div className="flex items-center text-yellow-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Academic Committee */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/committee/academic')}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Academic Committee</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Oversees academic affairs, maintains quality, makes recommendations, and formulates strategic priorities...
                  </p>
                  <div className="flex items-center text-purple-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Clubs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-8 border border-green-200 dark:border-green-800 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-green-5 to-emerald-5"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground">Clubs</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Arts Forum */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/arts-forum')}
                  className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Arts Forum</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Coordinates and promotes artistic, cultural, and creative activities, showcasing student talents...
                  </p>
                  <div className="flex items-center text-orange-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Nature Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/nature')}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 border border-green-200 dark:border-green-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Nature Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Promotes environmental awareness and eco-friendly practices, organizing environmental protection activities...
                  </p>
                  <div className="flex items-center text-green-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Film, Theatre and Radio Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/film-theatre-radio')}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Film, Theatre & Radio Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Introduces students to creative broadcasting and media platforms, showcasing talents and communication skills...
                  </p>
                  <div className="flex items-center text-purple-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Literary Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/literary')}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Literary Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Platform for literature, quizzing, debating, and creative writing, improving fluency and confidence...
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Commerce Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/commerce')}
                  className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Building className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Commerce Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enhances academic and professional skills through practical exposure to commerce, business, and finance...
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Management Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/management')}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <Target className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Management Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develops leadership qualities, managerial skills, and entrepreneurial abilities through practical management concepts...
                  </p>
                  <div className="flex items-center text-teal-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* IT Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/it')}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-cyan-200 dark:border-cyan-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">IT Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Creates atmosphere for students to share IT knowledge and skills, promoting innovation and technical competence...
                  </p>
                  <div className="flex items-center text-cyan-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>

                {/* Skill & Entrepreneurial Club */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/club/skill-entrepreneurial')}
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Skill & Entrepreneurial Club</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Initiates career-oriented skill enhancement activities to improve employability and entrepreneurial culture...
                  </p>
                  <div className="flex items-center text-yellow-600 font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Download Forms Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">Download Forms</h2>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-secondary/50 p-6 rounded-xl border border-border hover:border-accent transition-all flex items-center justify-center gap-3 group cursor-pointer max-w-md w-full">
                <FileText className="w-8 h-8 text-accent" />
                <span className="font-semibold text-foreground">Condonation Form</span>
                <Download className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Alumni Association Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800"
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">Alumni Association</h2>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Alumni Association of Devamatha Arts & Science College serves as a vibrant platform that connects former students with their alma mater. It plays a significant role in strengthening the bond between past and present members of the college community while contributing to its continuous growth and development.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Objectives
                </h3>
                <p className="text-sm text-muted-foreground mb-3">The Association aims to:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To provide a forum for alumni to exchange ideas on academic, cultural, and social issues by organizing and coordinating reunion activities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To promote a sustained sense of belonging to the alma mater among alumni by maintaining regular contact with them.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To maintain an updated database of all alumni.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>To enable alumni to express and acknowledge their attachment and commitment to their alma mater.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  Membership
                </h3>
                <p className="text-sm text-muted-foreground">
                  All former students of Devamatha College are eligible to become members. Alumni are encouraged to register and actively participate in the association's programmes and initiatives.
                </p>
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Coordination Committee</h4>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">Coordinator</span> – Sibichan Thomas</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">Members</span> – Shaijo P S, Manu Joseph, Saly Joseph</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Alumni Online Registration
              </h3>
              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Personal Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input type="text" required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Mobile Number *</label>
                      <input type="tel" required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter your mobile number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter your email address" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current Address *</label>
                      <textarea required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" rows={3} placeholder="Enter your current address"></textarea>
                    </div>
                  </div>
                </div>

                {/* Academic Details */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Academic Details (at Devamatha Arts & Science College)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Course / Programme *</label>
                      <select required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600">
                        <option value="">Select Course</option>
                        <option value="bba">BBA</option>
                        <option value="bca">BCA</option>
                        <option value="bcom">B.Com</option>
                        <option value="ba">BA English</option>
                        <option value="bsc">B.Sc</option>
                        <option value="ma">MA English</option>
                        <option value="mcom">M.Com</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Department *</label>
                      <input type="text" required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter department" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Year of Admission *</label>
                      <input type="number" required min="2000" max="2030" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter year of admission" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Year of Passing *</label>
                      <input type="number" required min="2000" max="2030" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter year of passing" />
                    </div>
                  </div>
                </div>

                {/* Employment Details */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Employment / Work Place Details</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current Employment Status *</label>
                      <select required className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600">
                        <option value="">Select Status</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self-employed</option>
                        <option value="higher-studies">Higher Studies</option>
                        <option value="unemployed">Unemployed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Organization / Company Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter organization name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Job Title / Designation</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter job title" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Work Location</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="City, State, Country" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button type="submit" size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-semibold">
                    Submit Registration
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* NSS Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-8 border border-green-200 dark:border-green-800"
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground">National Service Scheme (NSS)</h2>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The National Service Scheme (NSS) unit of Devamatha Arts & Science College is a vibrant platform that nurtures social responsibility, leadership, and community engagement among students. Functioning under the guidelines of the National Service Scheme, the unit encourages students to actively participate in nation-building activities through voluntary service.
            </p>
            
            <div className="bg-white dark:bg-card p-4 rounded-xl shadow-md mb-6">
              <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                Motto
              </h3>
              <p className="text-muted-foreground italic">"Not Me, But You" – reflecting the spirit of selfless service and concern for others.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Objectives
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Develop social awareness and civic responsibility among students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Encourage active participation in community service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Promote leadership, teamwork, and discipline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Foster a sense of national integration and social harmony</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  Major Activities
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Community Service:</strong> Cleanliness drives, village adoption, and social awareness campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Health & Welfare:</strong> Blood donation camps, medical camps, and health awareness programmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Environmental Initiatives:</strong> Tree plantation drives, plastic-free campaigns, and conservation activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Special Camps:</strong> Seven-day rural camps focusing on community development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Disaster Relief:</strong> Participation in relief and rehabilitation activities during natural calamities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  Benefits for Students
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Personality development and leadership skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exposure to real-life social issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Opportunity to serve society meaningfully</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Additional weightage in higher education and employment opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-xl">
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Unit No.</span> : 45</p>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Programme Officer</span> : Pravisha N</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default StudentsCornerPage;
