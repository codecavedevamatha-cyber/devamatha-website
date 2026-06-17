import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, BadgeIndianRupee, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";

const scholarships = [
  {
    title: "AICTE Scholarships for Students",
    icon: GraduationCap,
    description:
      "The All India Council for Technical Education (AICTE) offers various scholarship schemes to support deserving students pursuing technical and professional education in AICTE-approved institutions.",
    guidance:
      "Students are advised to regularly visit the AICTE Scholarship Portal and the National Scholarship Portal (NSP) for detailed eligibility criteria, application procedures, and important dates. Eligible students should make maximum use of these opportunities to support their academic journey.",
    actionText: "AICTE Scholarship/Fellowship Schemes",
    actionUrl: "https://www.aicte.gov.in/schemes/students-development-schemes",
    tone: "from-accent/10 to-primary/10 border-accent/20",
    iconClass: "bg-accent",
  },
  {
    title: "e-Grantz Scholarship",
    icon: BadgeIndianRupee,
    description:
      "The e-Grantz Scholarship is a Government of Kerala initiative that provides financial assistance to eligible students belonging to SC, ST, OBC(H), OEC, and other approved categories pursuing post-matric education.",
    guidance:
      "Through the e-Grantz 3.0 portal, students can complete a one-time registration and apply for various scholarship schemes using a single platform. The system enables efficient processing of applications and ensures that scholarship amounts are transferred directly to students' bank accounts through the Direct Benefit Transfer (DBT) mechanism.",
    note:
      "Eligible students are advised to register on the portal and submit their applications along with the required documents within the prescribed time.",
    actionText: "e-Grantz 3.0 Scholarship Portal",
    actionUrl: "https://egrantz.kerala.gov.in/",
    tone: "from-emerald-50 to-cyan-50 border-emerald-200",
    iconClass: "bg-emerald-600",
  },
];

const ScholarshipPage = () => {
  return (
    <>
      <Helmet>
        <title>Scholarship | Devamatha College</title>
        <meta
          name="description"
          content="Scholarship information and useful application links for students of Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />
      <Breadcrumb />

      <section className="relative min-h-[42vh] flex items-center justify-center pt-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-4"
          >
            Scholarship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-lg md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            Student support schemes and official scholarship portals
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              fill="hsl(var(--background))"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120,768,120,672,120,576,120,480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 bg-card rounded-3xl p-6 md:p-8 border border-border shadow-lg"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Students can use the following official scholarship portals to
              review eligibility criteria, application procedures, required
              documents, and important dates. Applicants should complete their
              submissions within the prescribed time and keep all supporting
              documents ready before applying.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => {
              const Icon = scholarship.icon;

              return (
                <motion.article
                  key={scholarship.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${scholarship.tone} rounded-3xl p-6 md:p-8 border shadow-lg flex flex-col`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full ${scholarship.iconClass} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {scholarship.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed flex-1">
                    <p>{scholarship.description}</p>
                    <p>{scholarship.guidance}</p>
                    {scholarship.note && <p>{scholarship.note}</p>}
                  </div>

                  <a
                    href={scholarship.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-fit"
                  >
                    {scholarship.actionText}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default ScholarshipPage;
