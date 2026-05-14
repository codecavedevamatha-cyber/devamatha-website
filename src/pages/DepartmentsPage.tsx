import { motion } from "framer-motion";
import { useEffect } from "react";
import { BookOpen, Languages, Briefcase, Monitor, TrendingUp, Trophy, Users, User, GraduationCap, Award, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const DepartmentsPage = () => {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const departments = [
    {
      id: "english",
      name: "ENGLISH",
      icon: BookOpen,
      color: "purple",
      description: "The Department of English, established in 2005, has consistently contributed to academic excellence and intellectual growth. It initially introduced the Bachelor of Arts Degree in English Literature with Journalism, a programme designed to equip students with strong analytical, communicative, and critical thinking skills.",
      fullDescription: [
        "The Department of English, established in 2005, has consistently contributed to academic excellence and intellectual growth. It initially introduced the Bachelor of Arts Degree in English Literature with Journalism, a programme designed to equip students with strong analytical, communicative, and critical thinking skills.",
        "In 2013, the Department expanded its academic offerings by introducing a Postgraduate Degree Programme in English Language and Literature, further strengthening its commitment to advanced scholarship and research-oriented learning.",
        "Over the years, the Department has built and sustained an impressive academic record, reflecting its dedication to holistic student development. It regularly organizes Association Day celebrations, seminars, and workshops that foster intellectual engagement and practical exposure. The faculty members, known for their experience and commitment, play a vital role in ensuring the smooth functioning of the Department and in mentoring students effectively.",
        "Students are actively encouraged to participate in various literary competitions conducted within the college, which helps nurture their creative and critical abilities. Additionally, the Literary Club serves as a vibrant platform that promotes serious reading habits, encouraging students to broaden their intellectual perspectives and deepen their appreciation of literature."
      ],
      programmes: [
        "English Literature with Journalism.",
        "M.A. in English Language and Literature."
      ],
      faculty: [
        { name: "Tomichan E M", role: "HoD" },
        { name: "Saiju P J", role: "" }
      ]
    },
    {
      id: "malayalam",
      name: "MALAYALAM",
      icon: Languages,
      color: "accent",
      description: "The Department of Malayalam has been an integral part of the institution since its inception, playing a significant role in promoting language, literature, and cultural studies. From its early years, the Department has been committed to fostering a deep appreciation for Malayalam language and its rich literary heritage.",
      fullDescription: [
        "The Department of Malayalam has been an integral part of the institution since its inception, playing a significant role in promoting language, literature, and cultural studies. From its early years, the Department has been committed to fostering a deep appreciation for Malayalam language and its rich literary heritage."
      ],
      programmes: [],
      faculty: [
        { name: "Sali Joseph", role: "" }
      ]
    },
    {
      id: "hindi",
      name: "HINDI",
      icon: Languages,
      color: "orange",
      description: "The Department of Hindi plays a significant role in promoting the study of Hindi language and literature, contributing to the linguistic and cultural diversity of the institution. The Department is committed to developing students' proficiency in Hindi while fostering an appreciation for its rich literary traditions.",
      fullDescription: [
        "The Department of Hindi plays a significant role in promoting the study of Hindi language and literature, contributing to the linguistic and cultural diversity of the institution. The Department is committed to developing students' proficiency in Hindi while fostering an appreciation for its rich literary traditions."
      ],
      programmes: [],
      faculty: [
        { name: "Jain V Antony", role: "" }
      ]
    },
    {
      id: "management",
      name: "MANAGEMENT STUDIES",
      icon: Briefcase,
      color: "blue",
      description: "The Department of Management Studies was established in 2010 with the objective of providing quality education in the field of management and business studies. It offers a full-time Bachelor of Business Administration (BBA) programme structured across six semesters.",
      fullDescription: [
        "The Department of Management Studies was established in 2010 with the objective of providing quality education in the field of management and business studies. It offers a full-time Bachelor of Business Administration (BBA) programme structured across six semesters.",
        "In 2023, the Department further expanded its academic portfolio by introducing the BBA in Hospital Administration, catering to the growing demand for skilled professionals in the healthcare management sector. The syllabus for the BBA Hospital Administration programme has been meticulously designed and developed by the faculty of the Department, ensuring academic relevance and industry alignment.",
        "The programmes are designed to provide students with a strong foundation in core areas such as Management, Entrepreneurship, Accounting, and Taxation. Emphasis is placed on bridging theoretical knowledge with practical application, enabling students to understand real-world business scenarios effectively.",
        "The Department is committed to nurturing competent and industry-ready graduates by fostering a pragmatic approach to learning. Students are trained to interpret business environments, derive accurate inferences, and develop innovative strategies suited to dynamic market conditions.",
        "With a focus on academic excellence and holistic development, the Department continues to create a dynamic learning environment that equips students with the knowledge, skills, and confidence required to succeed in the competitive world of business and management."
      ],
      programmes: [
        "Bachelors in Business Administration",
        "BBA in Hospital Administration"
      ],
      faculty: [
        { name: "Jismy John", role: "HOD" },
        { name: "Swathi V S", role: "" },
        { name: "Ramzeena", role: "" },
        { name: "Sarisa David", role: "" }
      ]
    },
    {
      id: "computer",
      name: "COMPUTER APPLICATIONS",
      icon: Monitor,
      color: "green",
      description: "The Department of Computer Applications was established in 2012 with a vision to impart quality education in the field of computing and information technology. It offers a Bachelor of Computer Applications (BCA) programme.",
      fullDescription: [
        "The Department of Computer Applications was established in 2012 with a vision to impart quality education in the field of computing and information technology. It offers a Bachelor of Computer Applications (BCA) programme.",
        "Expanding its academic scope, the Department has also introduced a new programme—B.Sc. in Artificial Intelligence and Data Science. This programme is aimed at preparing students for emerging careers in cutting-edge fields such as machine learning, data analytics, and intelligent systems, aligning education with current technological advancements. The syllabus for the B.Sc. Artificial Intelligence and Data Science programme has been carefully designed and developed by the faculty of the Department, ensuring it meets contemporary academic standards and industry requirements.",
        "The Department provides a well-equipped computer laboratory featuring modern systems and high-speed internet connectivity, ensuring that students gain hands-on experience in programming, software development, and data-driven applications. This practical exposure enhances their technical proficiency and readiness for industry challenges.",
        "Recognizing that students come from diverse academic and cultural backgrounds, the Department conducts orientation programmes to help them adapt to the curriculum and learning environment. These sessions foster confidence, ease the transition into higher education, and encourage meaningful interaction among peers.",
        "The multicultural environment of the Department promotes collaboration, strengthens interpersonal relationships, and enhances communication skills—qualities essential for success in professional settings. Through a balanced blend of theoretical knowledge, practical training, and skill development, the Department of Computer Applications strives to prepare competent, innovative, and industry-ready graduates."
      ],
      programmes: [
        "Bachelors in Computer Applications",
        "B.Sc AI & Data Science"
      ],
      faculty: [
        { name: "Ramya M P", role: "HOD" },
        { name: "Jithya V Augustian", role: "" },
        { name: "Pravisha N", role: "" },
        { name: "Amitha Benny", role: "" }
      ]
    },
    {
      id: "commerce",
      name: "COMMERCE",
      icon: TrendingUp,
      color: "indigo",
      description: "The Department of Commerce commenced its academic journey in 2004 with the introduction of the B.Com. programme in Computer Applications. In 2009, the Department expanded its undergraduate offerings by introducing B.Com. Co-operation. Demonstrating its commitment to advanced studies, the Department launched the M.Com. Finance in 2012, thereby strengthening its academic profile in the field of commerce and finance.",
      fullDescription: [
        "The Department of Commerce commenced its academic journey in 2004 with the introduction of the B.Com. programme in Computer Applications. In 2009, the Department expanded its undergraduate offerings by introducing B.Com. Co-operation. Demonstrating its commitment to advanced studies, the Department launched the M.Com. Finance in 2012, thereby strengthening its academic profile in the field of commerce and finance.",
        "Further enriching its portfolio, the Department introduced B.Com. in Logistics and Supply Chain Management in 2023, addressing the growing demand for professionals in global trade, logistics, and operations management. In 2026, another forward-looking programme—B.Com. in Business Analytics—was initiated to equip students with analytical, data-driven decision-making skills relevant to modern business environments. The syllabi for both B.Com. Logistics and Supply Chain Management and B.Com. Business Analytics have been carefully designed and developed by the faculty of the Department, ensuring alignment with current academic standards and industry expectations.",
        "The Department provides an intellectually stimulating academic environment that supports both academic and personal growth. In addition to the formal curriculum, students are encouraged to enhance their professional competencies, ethical values, and leadership qualities through various co-curricular and enrichment activities.",
        "With its focus on academic excellence, innovation, and holistic development, the Department of Commerce continues to prepare students to meet the evolving challenges of the business world with confidence and competence."
      ],
      programmes: [
        "B. Com. Co-Operation",
        "B. Com Finance",
        "B. Com Logistics and Supply Chain Management",
        "B. Com. in Business Analytics",
        "M.Com. Finance"
      ],
      faculty: [
        { name: "Shaijo P.S", role: "HOD" },
        { name: "Sibichan Thomas", role: "" },
        { name: "Manu Joseph", role: "" },
        { name: "Soumya Manuel", role: "" },
        { name: "Monisha Mohandas", role: "" }
      ]
    },
    {
      id: "physical",
      name: "PHYSICAL EDUCATION",
      icon: Trophy,
      color: "primary",
      description: "The Department of Physical Education has been an integral part of the institution, committed to promoting physical fitness, sportsmanship, and overall well-being among students. It plays a vital role in fostering a healthy and active lifestyle, which is essential for holistic development.",
      fullDescription: [
        "The Department of Physical Education has been an integral part of the institution, committed to promoting physical fitness, sportsmanship, and overall well-being among students. It plays a vital role in fostering a healthy and active lifestyle, which is essential for holistic development.",
        "The Department is equipped with excellent sports infrastructure, including a well-maintained basketball court, volleyball court, and a spacious playground that supports a variety of outdoor games and athletic activities. In addition, the presence of a sports academy provides students with professional training and guidance, enabling them to develop their skills and excel in competitive sports."
      ],
      programmes: [],
      faculty: [
        { name: "Sunny James", role: "" }
      ]
    },
    {
      id: "non-teaching",
      name: "Non-Teaching Staff",
      icon: Users,
      color: "gray",
      description: "The Non-Teaching Staff of the institution play a vital role in ensuring the smooth and efficient functioning of administrative and support services. They provide essential assistance in areas such as office administration, accounts, library services, laboratory maintenance, technical support, and campus management.",
      fullDescription: [
        "The Non-Teaching Staff of the institution play a vital role in ensuring the smooth and efficient functioning of administrative and support services. They provide essential assistance in areas such as office administration, accounts, library services, laboratory maintenance, technical support, and campus management.",
        "Committed to professionalism and efficiency, the non-teaching staff work diligently to facilitate academic activities and maintain an organized institutional environment. Their responsibilities include maintaining records, supporting admissions and examinations, managing student services, and ensuring the proper upkeep of infrastructure and facilities."
      ],
      programmes: [],
      faculty: [
        { name: "Sebastian C M", role: "Superindentent" },
        { name: "Sreekala K K", role: "Librarian" },
        { name: "Jins Cheriyan", role: "Accountant" },
        { name: "Marykutty V C", role: "Clerk" },
        { name: "Sinoj George", role: "Peon" },
        { name: "Valsa Devasia", role: "Cleaning Staff" },
        { name: "Suja Sibi", role: "Cleaning Staff" }
      ]
    }
  ];

  const colorClasses = {
    purple: { bg: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20", border: "border-purple-200 dark:border-purple-800", icon: "bg-purple-600", text: "text-purple-600" },
    accent: { bg: "bg-card", border: "border-border", icon: "bg-accent", text: "text-accent" },
    orange: { bg: "from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20", border: "border-orange-200 dark:border-orange-800", icon: "bg-orange-600", text: "text-orange-600" },
    blue: { bg: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20", border: "border-blue-200 dark:border-blue-800", icon: "bg-blue-600", text: "text-blue-600" },
    green: { bg: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20", border: "border-green-200 dark:border-green-800", icon: "bg-green-600", text: "text-green-600" },
    indigo: { bg: "from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20", border: "border-indigo-200 dark:border-indigo-800", icon: "bg-indigo-600", text: "text-indigo-600" },
    primary: { bg: "bg-card", border: "border-border", icon: "bg-primary", text: "text-primary" },
    gray: { bg: "from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20", border: "border-gray-200 dark:border-gray-800", icon: "bg-gray-600", text: "text-gray-600" }
  };

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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center"
          >
            Departments
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
      <section className="py-6 sm:py-8 bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          
          {/* Department Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {departments.map((dept, index) => {
              const colors = colorClasses[dept.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border ${colors.border} shadow-lg hover:shadow-xl transition-all`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                      <dept.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">{dept.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 line-clamp-3">{truncateDescription(dept.description)}</p>
                  <button
                    onClick={() => navigate(`/departments/${dept.id}`)}
                    className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl ${colors.icon} text-white font-semibold hover:opacity-90 transition-opacity text-xs sm:text-sm`}
                  >
                    Know More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
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

export default DepartmentsPage;
