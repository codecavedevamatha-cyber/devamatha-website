import { motion } from "framer-motion";
import { BookOpen, Languages, Briefcase, Monitor, TrendingUp, Trophy, Users, User, GraduationCap, Award, ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { Link, useParams, useNavigate } from "react-router-dom";

// Department data
const departmentData: Record<string, any> = {
  english: {
    name: "PG DEPARTMENT OF ENGLISH",
    icon: BookOpen,
    color: "purple",
    fullDescription: [
      "The Department of English, established in 2005, has consistently contributed to academic excellence and intellectual growth. It initially introduced the Bachelor of Arts Degree in English Literature with Journalism, a programme designed to equip students with strong analytical, communicative, and critical thinking skills.",
      "In 2013, the Department expanded its academic offerings by introducing a Postgraduate Degree Programme in English Language and Literature, further strengthening its commitment to advanced scholarship and research-oriented learning.",
      "Over the years, the Department has built and sustained an impressive academic record, reflecting its dedication to holistic student development. It regularly organizes Association Day celebrations, seminars, and workshops that foster intellectual engagement and practical exposure. The faculty members, known for their experience and commitment, play a vital role in ensuring the smooth functioning of the Department and in mentoring students effectively.",
      "Students are actively encouraged to participate in various literary competitions conducted within the college, which helps nurture their creative and critical abilities. Additionally, the Literary Club serves as a vibrant platform that promotes serious reading habits, encouraging students to broaden their intellectual perspectives and deepen their appreciation of literature."
    ],
    programmes: [
      "BA English Literature with Journalism.",
      "M.A. in English Language and Literature."
    ],
    faculty: [
      { name: "Tomichan E M", role: "HoD" },
      { name: "Saiju P J", role: "" }
    ]
  },
  malayalam: {
    name: "DEPARTMENT OF MALAYALAM",
    icon: Languages,
    color: "accent",
    fullDescription: [
      "The Department of Malayalam has been an integral part of the institution since its inception, playing a significant role in promoting language, literature, and cultural studies. From its early years, the Department has been committed to fostering a deep appreciation for Malayalam language and its rich literary heritage."
    ],
    programmes: [],
    faculty: [
      { name: "Sali Joseph", role: "" }
    ]
  },
  hindi: {
    name: "DEPARTMENT OF HINDI",
    icon: Languages,
    color: "orange",
    fullDescription: [
      "The Department of Hindi plays a significant role in promoting the study of Hindi language and literature, contributing to the linguistic and cultural diversity of the institution. The Department is committed to developing students' proficiency in Hindi while fostering an appreciation for its rich literary traditions."
    ],
    programmes: [],
    faculty: [
      { name: "Jain V Antony", role: "" }
    ]
  },
  management: {
    name: "DEPARTMENT OF MANAGEMENT STUDIES",
    icon: Briefcase,
    color: "blue",
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
  computer: {
    name: "DEPARTMENT OF COMPUTER APPLICATIONS",
    icon: Monitor,
    color: "green",
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
  commerce: {
    name: "PG DEPARTMENT OF COMMERCE",
    icon: TrendingUp,
    color: "indigo",
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
  physical: {
    name: "DEPARTMENT OF PHYSICAL EDUCATION",
    icon: Trophy,
    color: "primary",
    fullDescription: [
      "The Department of Physical Education has been an integral part of the institution, committed to promoting physical fitness, sportsmanship, and overall well-being among students. It plays a vital role in fostering a healthy and active lifestyle, which is essential for holistic development.",
      "The Department is equipped with excellent sports infrastructure, including a well-maintained basketball court, volleyball court, and a spacious playground that supports a variety of outdoor games and athletic activities. In addition, the presence of a sports academy provides students with professional training and guidance, enabling them to develop their skills and excel in competitive sports."
    ],
    programmes: [],
    faculty: [
      { name: "Sunny James", role: "" }
    ]
  },
  "non-teaching": {
    name: "Non-Teaching Staff",
    icon: Users,
    color: "gray",
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
};

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

const DepartmentDetailPage = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();

  if (!departmentId) {
    return <div>Department not found</div>;
  }

  const department = departmentData[departmentId];

  if (!department) {
    return <div>Department not found</div>;
  }

  const colors = colorClasses[department.color as keyof typeof colorClasses];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/departments')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </motion.button>

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-3xl md:text-5xl font-bold mb-12"
            >
              {department.name}
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

      {/* Content Section */}
      <section className="py-8 bg-background">
        <div className="container max-w-7xl mx-auto px-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Description */}
            <div className={`bg-gradient-to-br ${colors.bg} p-8 rounded-3xl border ${colors.border}`}>
              {department.fullDescription.map((para: string, idx: number) => (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{para}</p>
              ))}
            </div>

            {/* Programmes */}
            {department.programmes.length > 0 && (
              <div className={`bg-gradient-to-br ${colors.bg} p-8 rounded-3xl border ${colors.border} mt-8`}>
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className={`w-5 h-5 ${colors.text}`} />
                  Programmes Offered
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {department.programmes.map((prog: string, idx: number) => (
                    <li key={idx}>• {prog}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Faculty */}
            {department.faculty.length > 0 && (
              <div className={`bg-gradient-to-br ${colors.bg} p-8 rounded-3xl border ${colors.border} mt-8`}>
                <h3 className="font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
                  <Users className={`w-5 h-5 ${colors.text}`} />
                  {departmentId === "non-teaching" ? "Staff" : "Faculty"}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {department.faculty.map((faculty: any, idx: number) => (
                    <div key={idx} className="bg-background rounded-xl p-6 flex flex-col items-center text-center shadow-md">
                      <div className={`w-28 h-28 rounded-full ${colors.icon} flex items-center justify-center mb-4`}>
                        <User className="w-14 h-14 text-white" />
                      </div>
                      <p className="font-semibold text-foreground text-lg">{faculty.name}</p>
                      {faculty.role && <p className="text-sm text-muted-foreground mt-1">{faculty.role}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default DepartmentDetailPage;
