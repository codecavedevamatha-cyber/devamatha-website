export interface Course {
  id: string;
  name: string;
  description: string;
  internship: string;
  careerOpportunities: string[];
  opportunitiesIn: string[];
  higherStudyOptions: string[];
  highlights: string[];
}

export const courses: Course[] = [
  {
    id: "bba-hospital-administration",
    name: "BBA<br/>Hospital Administration",
    description: "BBA in Hospital Administration is a FYUG programme that focuses on the management and administration of hospitals, healthcare systems, and medical services. It combines core business administration principles with specialised healthcare management knowledge to prepare students for leadership roles in the healthcare sector.",
    internship: "To enhance practical exposure and industry relevance, the institution has signed MoUs with reputed hospitals such as ASTER MIMS, Baby Memorial Hospital, Indira Gandhi Co-Operative Hospital, and St. Joseph's Hospital.",
    careerOpportunities: [
      "Hospital Administrator",
      "Healthcare Manager",
      "Medical Office Manager",
      "Hospital HR Manager",
      "Quality Manager",
      "Medical Records Manager",
      "Hospital Operations Executive",
      "Insurance Executive (Medical Insurance)"
    ],
    opportunitiesIn: [
      "Hospitals",
      "Clinics",
      "Nursing Homes",
      "Health Insurance Companies",
      "Medical Colleges",
      "NGOs (Health Sector)",
      "Medical Tourism Companies"
    ],
    higherStudyOptions: [
      "MBA in Hospital Administration",
      "MBA in Healthcare Management",
      "Master of Hospital Administration (MHA)"
    ],
    highlights: [
      "Hospital Operations Management",
      "Patient Care Management",
      "Medical Records Management",
      "Healthcare Finance Management",
      "Human Resource Management in Healthcare",
      "Hospital Marketing and Quality Assurance"
    ]
  },
  {
    id: "bcom-logistics",
    name: "B.Com Logistics and Supply Chain Management",
    description: "B.Com in Logistics and Supply Chain Management is a FYUG programme that focuses on the planning, implementation, and control of the efficient movement and storage of goods, services, and information. The programme integrates commerce fundamentals with logistics and supply chain practices to prepare students for careers in the global trade and distribution sector.",
    internship: "To strengthen practical exposure and ensure industry relevance, the institution has established a Memorandum of Understanding (MoU) with Jackways Logistics LLP in Cochin and Mangalore.",
    careerOpportunities: [
      "Logistics Manager",
      "Supply Chain Analyst",
      "Warehouse Manager",
      "Inventory Manager",
      "Procurement Executive",
      "Operations Executive",
      "Shipping and Freight Coordinator",
      "Import–Export Executive"
    ],
    opportunitiesIn: [
      "Logistics and Supply Chain Companies",
      "Shipping and Freight Companies",
      "Warehousing and Distribution Centres",
      "E-commerce Companies",
      "Manufacturing Industries",
      "Retail Chains",
      "Ports and Airports",
      "Export–Import Firms"
    ],
    higherStudyOptions: [
      "M.Com",
      "MBA",
      "Postgraduate Diploma in Logistics and Supply Chain Management"
    ],
    highlights: [
      "Export and Import documentation",
      "Supply chain Services",
      "Technology and tracking",
      "Distribution and delivery systems",
      "Port and terminal operations",
      "Warehousing and storage"
    ]
  },
  {
    id: "bsc-ai-data-science",
    name: "B.Sc AI<br/>and Data Science",
    description: "B.Sc in Artificial Intelligence and Data Science is a FYUG programme that focuses on the study of intelligent systems, data analysis, and computational techniques. The course integrates computer science, mathematics, and statistics to equip students with the skills required to analyse data, build AI models, and develop smart solutions for real-world problems.",
    internship: "The programme includes a compulsory internship that provides students with hands-on experience in real-world projects related to artificial intelligence and data science. This enables students to apply theoretical knowledge in practical settings and gain industry exposure.",
    careerOpportunities: [
      "Data Analyst",
      "Data Scientist",
      "AI Engineer",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Data Engineer",
      "Research Analyst",
      "Software Developer (AI-based applications)"
    ],
    opportunitiesIn: [
      "IT Companies",
      "Data Analytics Firms",
      "Software Development Companies",
      "Banking and Financial Institutions",
      "Healthcare Sector",
      "E-commerce Companies",
      "Research Organizations",
      "Government and Private Sector Enterprises"
    ],
    higherStudyOptions: [
      "M.Sc. in Artificial Intelligence",
      "M.Sc. in Data Science",
      "MCA (Master of Computer Applications)",
      "MBA in Business Analytics",
      "Postgraduate Diploma in Data Science"
    ],
    highlights: [
      "Big Data & Tools",
      "Natural Language Processing",
      "AI and Machine Learning",
      "Quantum Machine Learning (QML)",
      "Deep Learning",
      "intelligent computing",
      "Digital Forensics"
    ]
  },
  {
    id: "bcom-business-analytics",
    name: "B.Com<br/>Business Analytics",
    description: "B.Com in Business Analytics is a FYUG programme that focuses on analysing business data to support decision-making and strategic planning. The course combines commerce, statistics, and data analysis techniques to equip students with skills in interpreting data and deriving meaningful business insights.",
    internship: "The programme includes a compulsory internship that provides practical exposure to real-world business analytics applications. Students gain hands-on experience in data analysis, reporting, and decision-making processes within organizations.",
    careerOpportunities: [
      "Business Analyst",
      "Data Analyst",
      "Financial Analyst",
      "Marketing Analyst",
      "Operations Analyst",
      "Business Intelligence Executive",
      "Risk Analyst",
      "Data Consultant"
    ],
    opportunitiesIn: [
      "Corporate Companies",
      "Banking and Financial Institutions",
      "IT and Analytics Firms",
      "E-commerce Companies",
      "Consulting Firms",
      "Retail and Marketing Companies",
      "Government and Private Sector Organizations"
    ],
    higherStudyOptions: [
      "M.Com",
      "MBA in Business Analytics",
      "MBA in Finance",
      "MBA in Marketing",
      "Postgraduate Diploma in Business Analytics"
    ],
    highlights: [
      "Business Analytics",
      "Data Analysis",
      "Statistical Methods",
      "Financial Analytics",
      "Marketing Analytics",
      "Data Visualization"
    ]
  },
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    description: "Bachelor of Computer Applications (BCA) is a FYUG programme that focuses on computer science, software development, and information technology. The course equips students with the knowledge and skills required to design, develop, and manage software applications and IT systems.",
    internship: "The programme includes a compulsory internship that provides practical exposure in software development, IT services, and real-world computing environments. This helps students gain hands-on experience and industry readiness.",
    careerOpportunities: [
      "Software Developer",
      "Web Developer",
      "System Analyst",
      "IT Support Specialist",
      "Database Administrator",
      "Network Administrator",
      "Mobile App Developer",
      "Software Tester"
    ],
    opportunitiesIn: [
      "IT Companies",
      "Software Development Firms",
      "Web Development Companies",
      "Banking and Financial Institutions",
      "E-commerce Companies",
      "Government Organizations",
      "Startups and Tech Companies"
    ],
    higherStudyOptions: [
      "MCA (Master of Computer Applications)",
      "M.Sc Computer Science",
      "MBA in Information Technology",
      "Postgraduate Diploma in Computer Applications"
    ],
    highlights: [
      "Ethical Hacking",
      "Digital Marketing",
      "Cyber Security",
      "Cloud Computing",
      "R programming"
    ]
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    description: "Bachelor of Business Administration (BBA) is a FYUG programme that focuses on developing managerial, leadership, and entrepreneurial skills. The course provides a strong foundation in business principles, preparing students to handle various aspects of management in organizations.",
    internship: "The programme includes a compulsory internship that offers practical exposure to business operations, management practices, and real-time corporate environments, enhancing students' industry readiness.",
    careerOpportunities: [
      "Business Executive",
      "Marketing Executive",
      "HR Executive",
      "Sales Manager",
      "Operations Executive",
      "Business Development Executive",
      "Entrepreneur",
      "Management Trainee"
    ],
    opportunitiesIn: [
      "Corporate Companies",
      "Banking and Financial Institutions",
      "Marketing and Advertising Agencies",
      "Retail and E-commerce Companies",
      "Consulting Firms",
      "Startups and Business Enterprises",
      "Government Organizations"
    ],
    higherStudyOptions: [
      "MBA (Master of Business Administration)",
      "M.Com"
    ],
    highlights: [
      "Principles of Management",
      "Marketing Management",
      "Financial Management",
      "Human Resource Management",
      "Business Communication",
      "Entrepreneurship Development"
    ]
  },
  {
    id: "bcom-finance",
    name: "B.Com Finance",
    description: "B.Com in Finance is a FYUG programme that focuses on financial management, investment analysis, banking, and accounting. The course provides students with a strong foundation in financial principles and equips them with the skills required to manage financial resources effectively in business organizations.",
    internship: "The programme includes a compulsory internship that provides practical exposure to financial operations, accounting practices, and real-world business environments, helping students gain industry experience.",
    careerOpportunities: [
      "Financial Analyst",
      "Accountant",
      "Banking Executive",
      "Investment Analyst",
      "Tax Consultant",
      "Audit Assistant",
      "Finance Executive",
      "Insurance Advisor"
    ],
    opportunitiesIn: [
      "Banks",
      "Financial Institutions",
      "Accounting and Audit Firms",
      "Corporate Companies",
      "Insurance Companies",
      "Investment Firms",
      "Government Organizations"
    ],
    higherStudyOptions: [
      "M.Com",
      "MBA in Finance",
      "Chartered Accountant (CA)",
      "Company Secretary (CS)",
      "Cost and Management Accountant (CMA)"
    ],
    highlights: [
      "Financial Management",
      "Accounting",
      "Investment Analysis",
      "Banking and Insurance",
      "Taxation",
      "Auditing"
    ]
  },
  {
    id: "bcom-cooperation",
    name: "B.Com Co-Operation",
    description: "B.Com Co-Operation is a FYUG programme that focuses on the principles and practices of co-operative organizations, banking, and rural development. The course combines commerce education with co-operative management to prepare students for careers in co-operative institutions and financial sectors.",
    internship: "The programme includes a compulsory internship that provides practical exposure in co-operative societies, banks, and financial institutions, enabling students to understand real-world operations and management practices.",
    careerOpportunities: [
      "Co-operative Officer",
      "Bank Clerk/Officer",
      "Accountant",
      "Auditor",
      "Loan Officer",
      "Credit Analyst",
      "Rural Development Officer",
      "Finance Executive"
    ],
    opportunitiesIn: [
      "Co-operative Banks",
      "Co-operative Societies",
      "Commercial Banks",
      "Rural Development Organizations",
      "Government Departments",
      "Financial Institutions",
      "NGOs"
    ],
    higherStudyOptions: [
      "M.Com",
      "MBA in Finance",
      "MBA in Co-operative Management",
      "Postgraduate Diploma in Co-operation",
      "Professional Courses like CA, CS, CMA"
    ],
    highlights: [
      "Co-operative Management",
      "Banking",
      "Accounting",
      "Rural Development",
      "Credit and Loan Management",
      "Auditing"
    ]
  },
  {
    id: "ba-english",
    name: "BA English",
    description: "BA English is a FYUG programme that focuses on the study of English literature, language, and communication. The course develops critical thinking, analytical skills, and effective communication abilities through the study of literary texts, linguistics, and cultural contexts.",
    internship: "The programme includes a compulsory internship that provides practical exposure in areas such as content writing, publishing, media, teaching, and communication-based roles, helping students gain real-world experience.",
    careerOpportunities: [
      "Content Writer",
      "Editor",
      "Teacher",
      "Journalist",
      "Copywriter",
      "Public Relations Executive",
      "Media Professional",
      "Communication Specialist"
    ],
    opportunitiesIn: [
      "Educational Institutions",
      "Media and Publishing Houses",
      "Newspapers and Magazines",
      "Advertising Agencies",
      "Corporate Companies",
      "Digital Marketing Firms",
      "NGOs"
    ],
    higherStudyOptions: [
      "MA English",
      "MA Journalism and Mass Communication",
      "MBA",
      "B.Ed",
      "Postgraduate Diploma in Communication or Journalism"
    ],
    highlights: [
      "British Literature",
      "Indian Writing in English",
      "Literary Criticism",
      "Linguistics",
      "Communication Skills",
      "Creative Writing"
    ]
  },
  {
    id: "ma-english",
    name: "MA English",
    description: "MA English is a 2 years post graduate programme that offers advanced study in English literature, language, and critical theory. The course enhances analytical, interpretative, and research skills through an in-depth exploration of literary texts, cultural contexts, and theoretical perspectives.",
    internship: "",
    careerOpportunities: [
      "Lecturer/Assistant Professor",
      "Content Writer",
      "Editor",
      "Research Scholar",
      "Journalist",
      "Copywriter",
      "Public Relations Officer",
      "Academic Consultant"
    ],
    opportunitiesIn: [
      "Colleges and Universities",
      "Schools and Educational Institutions",
      "Media and Publishing Houses",
      "Research Organizations",
      "Corporate Companies",
      "Digital Media Firms",
      "NGOs"
    ],
    higherStudyOptions: [
      "Ph.D in English",
      "M.Phil in English",
      "B.Ed (for teaching)",
      "Postdoctoral Research",
      "Specialized Diplomas in Communication, Journalism, or Linguistics"
    ],
    highlights: [
      "Literary Theory and Criticism",
      "British and American Literature",
      "New Media Studies",
      "Content Writing",
      "Digital Humanities",
      "Research Methodology"
    ]
  },
  {
    id: "mcom-finance",
    name: "M.Com Finance",
    description: "M.Com in Finance is a 2 years post graduate programme that provides advanced knowledge in financial management, investment analysis, accounting, and corporate finance. The course is designed to develop analytical, decision-making, and research skills required for higher-level roles in finance and commerce.",
    internship: "",
    careerOpportunities: [
      "Financial Analyst",
      "Investment Banker",
      "Accountant",
      "Audit Manager",
      "Finance Manager",
      "Tax Consultant",
      "Banking Professional",
      "Risk Analyst"
    ],
    opportunitiesIn: [
      "Banks",
      "Financial Institutions",
      "Corporate Companies",
      "Accounting and Audit Firms",
      "Investment Firms",
      "Insurance Companies",
      "Government Organizations"
    ],
    higherStudyOptions: [
      "Ph.D in Commerce/Finance",
      "Professional Courses like CA, CS, CMA",
      "MBA in Finance",
      "Advanced Certifications in Finance and Investment"
    ],
    highlights: [
      "Advanced Financial Management",
      "Investment Analysis",
      "Corporate Finance",
      "Financial Markets",
      "Taxation and Auditing",
      "Research Methodology"
    ]
  }
];
