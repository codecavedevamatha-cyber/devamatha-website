import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, BookOpen, Calendar, MapPin, Phone, Mail, GraduationCap, Heart, Target, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { getPersonImageSrc } from "@/data/personImages";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("managers");

  const formerManagers = [
    "Rev. Fr. John Mullakkara",
    "Rev. Fr. Antony Purayidam",
    "Rev. Fr. Mani Attel",
    "Rev. Dr. Thomas Melvettath",
    "Rev. Dr. Jose Vettickal",
    "Rev. Fr. Sebastian Palakuzhy",
  ];

  const formerPrincipals = [
    "Prof. Rajan",
    "Dr. Kurian",
    "Dr. Jayaprakash", 
    "Prof. Jose J. Edavoor"
  ];

  const milestones = [
    { year: "2003", event: "College founded by Rev. Fr. John Mullakkara" },
    { year: "2004", event: "Started in St. Thomas Block with UG programmes" },
    { year: "2008", event: "St. Alphonsa Block constructed" },
    { year: "2010", event: "Administrative block developed" },
    { year: "2012", event: "Modern basketball court established" },
    { year: "2015", event: "ISO 9001:2015 certification achieved" },
    { year: "2018", event: "PG programmes in English and Commerce introduced" },
    { year: "2024", event: "2800+ alumni serving globally" }
  ];

  return (
    <>
      <Helmet>
        <title>About | Devamatha College</title>
        <meta
          name="description"
          content="About Devamatha Arts & Science College Paisakary, its history, vision, mission, and leadership."
        />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-3xl md:text-5xl font-bold mb-12"
            dangerouslySetInnerHTML={{ __html: "Devamatha Arts and Science<br/>College" }}
          >
          </motion.h1>
          
                  </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Management Section */}
      <section className="pt-16 pb-8 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <div className="w-full">
            <div className="mb-6 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Management
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The management of Devamatha Arts & Science College, Paisakary, is vested in the Devamatha Educational Trust, Paisakary, an organization belonging to the Christian minority community.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Trust is committed to providing quality education to students across all categories and levels. It seeks to ensure the holistic development of learners by offering integral formation and effective academic guidance, thereby promoting advancement in arts, science, literature, humanities, and other relevant fields of knowledge. The Trust upholds an inclusive approach, extending educational opportunities irrespective of caste, creed, or gender, while placing special emphasis on nurturing spiritual values and preserving cultural heritage.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Furthermore, the Trust aims to impart value-based education, either independently or in collaboration with similar organizations. It establishes and administers institutions that prepare young individuals for competitive examinations, professional courses, interviews, and various aptitude assessments. In addition, it actively supports the placement and career advancement of educated unemployed youth.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-accent-foreground" />
                      </div>
                      <p className="font-heading text-xl font-semibold text-foreground">Devamatha Educational Trust</p>
                      <p className="text-muted-foreground">Paisakary</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* College Profile Section */}
      <section className="pt-8 pb-12 bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <div className="mb-6 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  College Profile
                </h2>
                <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Catholic Christian community at Deva Matha Forane Church, Paisakary, under the Syro-Malabar Metropolitan Archdioceses of Thalassery, wanted an institution of higher learning for a long time for the higher education of its youth, and thus to bring about the all-round development of the region. Their long-cherished dream saw fruition under the able leadership of the then Vicar of Deva Matha Forane Church, Rev. Fr. John Mullakkara (2003-2005).
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Deva Matha Arts & Science College, a self-financing venture and affiliated to the University of Kannur, started functioning from the Academic Year 2003–'04 in the ground floor of the now St. Thomas Block, under the visionary leadership of the Rev. Fr. John Mullakkara, the Founder-Manager. The College is situated on a hillock with a panoramic view as the site is encircled by the majestic mountain range which is part of the Western Ghats in the Payyavoor Panchayath, Kannur.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The College opened her portals to the rural youth, especially from the middle and lower strata of society with two Undergraduate Degree Programmes, one in Physics and another one in Chemistry. Prof. M. Rajan was appointed the first Principal. Thereafter, two more Bachelors Programmes (B. Com. in Computer Applications (2004) and B.A. in English Literature with Journalism (2005)) were added to the existing Courses of Study.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 2005, Rev. Fr. Anthony Purayidam assumed the office of the Manger. It was due to his untiring efforts, the upper floors of the St. Thomas Block with the Auditorium was completed. Dr. P.V. Jayaprakash became the Principal in 2009. Under his watch B. Com with Co-operation (2009) and the Bachelors in Business Administration (2010) were made available.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rev. Dr. Mani Attel became the Manger in 2010. His vast experience as the HoD of Malayalam and later as the Principal of the Nirmalagiri College, Koothuparamba, Kannur, run by the Archdiocese of Thalassery, enabled him to take the College to newer heights. Under his supervision, the construction of a new block, St. Alphonsa, began. During this period a modern out-door Basketball Court came up in the Campus with grants from the Sports Council of the Government of India.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 2012, Rev. Dr. Thomas Melvettam was posted to Paisakary as the Vicar cum Manager. It was during his tenure, the Alphonsa Block was completed. Thereafter, the construction of a new administrative block, the Deva Matha Block, began. During this period, the College began to offer, for the first time, a Bachelors in Computer Applications, and two Post Graduate Programmes in Business Finance (M.Com) and English Literature (M.A.).
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 2016, Rev. Dr. Jose Vettickal moved in as the Manager. During his watch, two more Courses, namely, B.Com. in Finance and B.Sc. in Mathematics (2017) were added to the already existing Courses of Study. Dr. P.V. Jayaprakash retired in 2017 after 8 long years of distinguished service to the Institution, and Prof. Jose J. Edavoor, an electronics expert, was appointed the Principal.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rev. Fr. Sebastian Palakuzhy assumed the mantle of the Manager at Deva Matha Arts & Science College in May, 2018. Due to his singular initiatives, the College received the ISO Certification (ISO 9001-2015 Certified Institution of Higher Learning) in March, 2019. He also began a campus beautification programme. Dr. M J Mathew, a renowned educationalist and administrator, took charge of the College as the Principal in 2019, July.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The institution's administrative history was marked by the appointment of Rev. Fr. Noble Onamkulam as Manager on 15 May 2022. In alignment with emerging global trends and industry requirements, the institution introduced new-generation programmes such as BBA in Hospital Administration and B.Com in Logistics in 2023. Further advancing its academic portfolio, the college is set to launch B.Sc. in Artificial Intelligence and Data Science and B.Com in Business Analytics in 2026. These programmes are designed to equip students with advanced technical competencies, analytical skills, and enhanced employability in a rapidly evolving, technology-driven world.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In collaboration with the Deva Matha Sports Academy, located in the Campus, the College co-sponsors district and state level Basketball and Volleyball tournaments. Besides, she had been the venue for the Varsity Sports in the past.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Since her inception, more than 2800 students have passed through her portals, and her alumni has been able to leave their mark on the state, national, and world stage. The College is a Catholic Christian Minority Institution managed by the Deva Matha Education Trust presided over by the Manager for the Deva Matha Forane Church, Paisakary. Currently, the College offers 4 New-Gen Programmes, 5 Undergraduate Programmes and 2 Post Graduate Programmes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Vision & Mission Section */}
      <section className="pt-8 pb-12 bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl border border-accent/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Vision</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Be a beacon of light guiding students towards knowledge, responsibility, and meaningful contribution to society, enabling them to face life's opportunities and challenges with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Mission</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide inclusive, gender-sensitive, environmentally conscious, and intellectually enriching academic and non-academic experiences, supporting students in their intellectual, emotional, and spiritual growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pt-4 pb-8 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10">
          {/* Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 pt-4">
            {[
              {
                id: 1,
                name: "His Grace Mar Joseph Pamplany",
                title: "Patron",
                role: "Bishop of Kannur",
                image: "/img/patron.jpg",
                icon: "User"
              },
              {
                id: 2,
                name: "Rev. Fr. Noble Onamkulam",
                title: "Manager",
                role: "Manager, Deva Matha College",
                image: "/img/father.jpg",
                icon: "Award"
              },
              {
                id: 3,
                name: "Dr. M. J. Mathew",
                title: "Principal",
                role: "Principal, Deva Matha College",
                image: "/img/principal.jpg",
                icon: "BookOpen"
              }
            ].map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                className="group relative w-full max-w-[420px] mx-auto lg:max-w-none"
              >
                {/* Title at top center */}
                <div className="text-center mb-4">
                  <div className="text-4xl md:text-5xl font-display font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">{member.title}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-1 bg-accent rounded-full mx-auto mt-2"
                  />
                </div>

                {/* The Image container */}
                <div className="relative h-[24rem] lg:h-[28rem] w-full rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] bg-card border border-border/60 group-hover:border-accent/50 transition-all duration-700 group-hover:-translate-y-2">

                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration: 700" />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.9] group-hover:brightness-105 transition-transform duration-[1.5s] group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Smooth Gradient for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration:700 z-10" />

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col items-center text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration:700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">{member.name}</h3>
                    {/* <p className="text-sm md:text-base text-white/80 font-medium">{member.role}</p> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Former Leadership Section */}
      <section className="pt-8 pb-12 bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Former Leadership
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-card rounded-xl border border-border shadow-lg">
              <button
                onClick={() => setActiveTab("managers")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "managers"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Former Managers
              </button>
              <button
                onClick={() => setActiveTab("principals")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "principals"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Former Principals
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeTab === "managers" ? formerManagers : formerPrincipals).map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.25)" }}
                  className="bg-card p-6 rounded-xl border border-border shadow-lg text-center cursor-pointer"
                >
                  {(() => {
                    const src = getPersonImageSrc(leader);
                    if (src) {
                      return (
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 shadow-sm ring-2 ring-border">
                          <img
                            src={src}
                            alt={leader}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      );
                    }
                    return (
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-accent" />
                      </div>
                    );
                  })()}
                  <p className="font-heading font-semibold text-foreground">{leader}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default AboutPage;
