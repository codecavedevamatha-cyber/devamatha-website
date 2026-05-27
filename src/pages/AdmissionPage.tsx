import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Phone, Upload, FileText, User, GraduationCap, MapPin, ClipboardCheck, Shield, ExternalLink, BookOpen, Info, CheckCircle, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import { client, urlFor } from "@/sanity";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    percentage: '',
    previous_school: '',
    address: '',
    parent_name: '',
    parent_phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await client.create({
        _type: "managementQuota",

        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        percentage: formData.percentage,
        previous_school: formData.previous_school,
        address: formData.address,
        parent_name: formData.parent_name,
        parent_phone: formData.parent_phone,

        submittedAt: new Date().toISOString(),
      });

      setSubmitMessage("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        percentage: "",
        previous_school: "",
        address: "",
        parent_name: "",
        parent_phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      setSubmitMessage("Error submitting enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admission | Devamatha College</title>
        <meta
          name="description"
          content="Admission details for Devamatha Arts & Science College Paisakary."
        />
      </Helmet>
      <Header />
      <Breadcrumb />
      
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
            Admission
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

          {/* Admission Portal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Admission Portal</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://admissions.kannuruniversity.ac.in/?" target="_blank" rel="noopener noreferrer" className="group bg-card p-6 rounded-xl border border-border hover:border-accent transition-all hover:scale-105">
                <div className="text-accent mb-3">
                  <span className="font-semibold">Application for FYUG Programmes</span>
                </div>
                <p className="text-sm text-muted-foreground">Access the online application portal for the Kannur University FYUG Common Admission Process (CAP) here.</p>
                <button className="flex items-center gap-2 mt-4 text-accent hover:underline text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Click Here
                </button>
              </a>
              <a href="https://admissions.kannuruniversity.ac.in/?" target="_blank" rel="noopener noreferrer" className="group bg-card p-6 rounded-xl border border-border hover:border-accent transition-all hover:scale-105">
                <div className="text-accent mb-3">
                  <span className="font-semibold">Application for PG Programmes</span>
                </div>
                <p className="text-sm text-muted-foreground">Access the online application portal for the Kannur University PG Common Admission Process (CAP) here.</p>
                <button className="flex items-center gap-2 mt-4 text-accent hover:underline text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Click Here
                </button>
              </a>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="text-accent mb-3">
                  <span className="font-semibold whitespace-nowrap">Application for Management Quota Seats</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Download the application form for Management Quota seats. Duly filled-in applications should be submitted at the College Office.</p>
                <button className="flex items-center gap-2 text-accent hover:underline text-sm">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </motion.div>

          {/* Prospectus Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Prospectus</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-3">FYUG Prospectus</h3>
                <p className="text-sm text-muted-foreground mb-4">Download prospectus for admission to the FYUG Programmes under Kannur University for the current academic year.</p>
                <button className="flex items-center gap-2 text-accent hover:underline text-sm">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
              <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-3">PG Prospectus</h3>
                <p className="text-sm text-muted-foreground mb-4">Download prospectus for admission to the FYUG Programmes under Kannur University for the current academic year.</p>
                <button className="flex items-center gap-2 text-accent hover:underline text-sm">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </motion.div>

          {/* Admission Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Admission Support</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For all admission-related queries, applicants are advised to contact the Nodal Officer.
            </p>
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">Nodal Officer:</span> Saiju P J</p>
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">Mobile Number:</span> 9400111818</p>
            </div>
          </motion.div>

          {/* Management Quota Enquiry Form Section */}
          <motion.div
            id="management-quota-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Apply online for Management Quota Seats</h2>
            </div>
            <p className="text-muted-foreground mb-6">To receive further details, please fill out the enquiry form.</p>
            
            <form onSubmit={handleSubmit} className="bg-white dark:bg-card p-6 rounded-xl shadow-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name of the Applicant</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your full name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mobile Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your mobile number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Programme</label>
                <select name="course" value={formData.course} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="">Select Programme</option>
                  <option value="bba-hospital">BBA Hospital Administration</option>
                  <option value="bcom-logistics">B.Com Logistics & Supply Chain Management</option>
                  <option value="bsc-ai">B.Sc AI & Data Science</option>
                  <option value="bcom-analytics">B.Com Business Analytics</option>
                  <option value="bba">BBA</option>
                  <option value="bca">BCA</option>
                  <option value="bcom-cooperation">B.Com Co-Operation</option>
                  <option value="bcom-finance">B.Com Finance</option>
                  <option value="ba-english">BA English</option>
                  <option value="ma-english">MA English</option>
                  <option value="mcom-finance">M.Com Finance</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Total Marks Obtained</label>
                <input type="text" name="percentage" value={formData.percentage} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter total marks" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Institution Studied</label>
                <input type="text" name="previous_school" value={formData.previous_school} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter last institution" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" rows={3} placeholder="Enter your address"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Parent Name</label>
                <input type="text" name="parent_name" value={formData.parent_name} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter parent name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Parent Phone Number</label>
                <input type="tel" name="parent_phone" value={formData.parent_phone} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter parent phone number" />
              </div>

              {submitMessage && (
                <div className={`text-center p-4 rounded-lg ${submitMessage.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
              
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-purple-600 text-white hover:bg-purple-700 font-semibold text-base shadow-lg">
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </form>
          </motion.div>

          {/* Admission Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-3xl p-8 border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Admission Process</h2>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Admission to the various programmes offered by the College shall be granted to eligible and deserving candidates in strict accordance with the regulations prescribed by the University from time to time. Selection shall be made purely on the basis of merit, determined by the performance of the candidate in the qualifying examinations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Of the total seats available in each programme, 50% are allocated under the Management Quota, while the remaining 50% are filled through the University allotment process. Candidates seeking admission under the University Quota are required to apply through the Single Window System in the prescribed format, subsequent to the publication of the results of the qualifying examinations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For admission under the Management Quota, application forms and the prospectus may be obtained from the College Office or downloaded from the official College website. Completed applications must be submitted to the College Office within the stipulated date. Only applications submitted in the prescribed format and within the notified deadline shall be considered for admission.
              </p>
            </div>
          </motion.div>

          {/* Documents to be Produced Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Documents to be Produced at the Time of Admission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">a</span>
                <p className="text-sm text-muted-foreground">Print out of completed online application generated by the Candidate.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">b</span>
                <p className="text-sm text-muted-foreground">Print out of registration fee & university fee remitted by the candidate online.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">c</span>
                <p className="text-sm text-muted-foreground">Original mark lists of the qualifying examination.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">d</span>
                <p className="text-sm text-muted-foreground">Certificate to prove date of birth</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">e</span>
                <p className="text-sm text-muted-foreground">TC from the Institution last attended</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">f</span>
                <p className="text-sm text-muted-foreground">Course & Conduct Certificate</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">g</span>
                <p className="text-sm text-muted-foreground">Original Community/Caste Certificate /Anthyodaya Anna Yojana (AAY) and Priority House Hold (PHH) category certificate (EWS) /The Income and Assets certificate for Economically Weaker Sections (EWS) if applicable</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">h</span>
                <p className="text-sm text-muted-foreground">Non creamy layer certificate in the case of SEBC candidates</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">i</span>
                <p className="text-sm text-muted-foreground">Original certificates to prove the claim for grace marks, if any.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">j</span>
                <p className="text-sm text-muted-foreground">Recognition certificate from the University of Kannur in the case of candidates who have passed their qualifying examination from other Boards/Institutes/governments, except BOARD OF HIGHER SECONDARY EDUCATION Kerala, VHSE Kerala, THSE Kerala, NIOS, Kerala Literacy Mission, CBSE, CISCE and State/Central Equivalent</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">k</span>
                <p className="text-sm text-muted-foreground">Any document to prove Nativity.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0">l</span>
                <p className="text-sm text-muted-foreground">Any other relevant certificate for any claim made in the application.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default AdmissionPage;
