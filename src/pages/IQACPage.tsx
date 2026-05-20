import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";

const IQACPage = () => {
  return (
    <>
      <Helmet>
        <title>IQAC | Devamatha College</title>
        <meta
          name="description"
          content="Internal Quality Assurance Cell details for Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6"
          >
            IQAC
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-xl md:text-2xl text-primary-foreground/90 italic max-w-4xl mx-auto"
          >
            Internal Quality Assurance Cell (IQAC)
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120,768,120,672,120,576,120,480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          
          {/* About IQAC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Internal Quality Assurance Cell (IQAC) of the College functions as a vital mechanism for ensuring continuous improvement in academic and administrative performance. Established in accordance with the guidelines of the National Assessment and Accreditation Council (NAAC), the IQAC strives to develop a system for conscious, consistent, and catalytic action to enhance the overall quality of the institution.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The primary objective of the IQAC is to promote a culture of quality by institutionalizing best practices in teaching, learning, evaluation, research, and extension activities. It facilitates the planning and implementation of quality benchmarks, organizes academic and administrative audits, and encourages innovative practices for holistic development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The IQAC plays a proactive role in documenting and reporting institutional activities, including the preparation of the Annual Quality Assurance Report (AQAR) as mandated by NAAC. It also ensures stakeholder participation by involving faculty, students, alumni, and external experts in quality enhancement initiatives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through regular meetings, feedback mechanisms, and strategic planning, the IQAC works towards sustaining and enhancing the academic standards of the College, thereby contributing to excellence in higher education.
              </p>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Objective:</span>
            </h2>
            <ul className="space-y-4 text-muted-foreground list-disc pl-6">
              <li className="ml-2">To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the college.</li>
              <li className="ml-2">To promote measures for institutional functioning towards quality enhancement.</li>
              <li className="ml-2">Conduct TQM (Total Quality Management) programmes for professional excellence of teachers and non-teaching staff.</li>
              <li className="ml-2">Recommends the setting up of departmental plans and goals and conduct the periodic review of the same.</li>
              <li className="ml-2">To formulate a well-defined procedure and co-ordinate programmes effectively to get the college accredited by ISO, SAAC, etc., from time to time.</li>
              <li className="ml-2">To publish the Annual News Letter of the college.</li>
              <li className="ml-2">To monitor the maintenance and up gradation of the official website of the college.</li>
              <li className="ml-2">Upkeep of the Data-Bank of the College. (Data-Bank is the information centre of the college, where all relevant data regarding all activities / programmes conducted in the college are stored in hard and soft forms). Data-Bank will also function as the Public-Relation centre of the college.</li>
            </ul>
          </motion.div>

          {/* IQAC Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">IQAC Team</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-2xl border border-border shadow-lg">
                <thead>
                  <tr className="bg-accent/10 border-b border-border">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Name</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Designation</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Dr. M J Mathew</td>
                    <td className="px-6 py-4 text-muted-foreground">Principal</td>
                    <td className="px-6 py-4 text-muted-foreground">Chairman</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Saiju P J</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">Coordinator</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Sebastian C M</td>
                    <td className="px-6 py-4 text-muted-foreground">Superintendent</td>
                    <td className="px-6 py-4 text-muted-foreground">PRO</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Sibichan Thomas</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">PRO</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Manu Joseph</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">PRO</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Monisha Mohandas</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Sarisa David</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Swathi V S</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">Member</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-6 py-4 text-muted-foreground">Pravisha N</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">Member</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground">Jithya V Augustine</td>
                    <td className="px-6 py-4 text-muted-foreground">Assistant Professor</td>
                    <td className="px-6 py-4 text-muted-foreground">Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default IQACPage;
