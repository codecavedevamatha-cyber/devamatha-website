import { motion } from "framer-motion";
import {
  Library,
  Computer,
  Utensils,
  Bed,
  Car,
  Building,
  Monitor,
  ArrowRight,
  MapPin
} from "lucide-react";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import Breadcrumb from "@/components/Breadcrumb";

const facilities = [
  { icon: Library, name: "Library", description: "The College Library is well-stocked with a wide collection of books, journals, periodicals, and digital resources. It offers a quiet and conducive environment for study and research, catering to the academic requirements of students and faculty." },
  { icon: Computer, name: "Computer Lab", description: "The Computer Lab is equipped with modern systems, high-speed internet connectivity, and updated software to support practical learning in areas such as programming, data analysis, and digital applications." },
  { icon: Utensils, name: "Canteen", description: "The College Canteen provides hygienic and affordable food for students and staff. It serves as a common space for relaxation and social interaction within the campus." },
  { icon: Bed, name: "Hostel", description: "Separate hostel facilities are available for boys and girls, offering a safe and disciplined living environment with necessary amenities for comfortable accommodation." },
  { icon: Car, name: "Parking", description: "Adequate parking space is provided within the campus for both students and staff, ensuring convenience and proper vehicle management." },
  { icon: Building, name: "Bank & ATM", description: "Banking services and ATM facilities are available within the campus, enabling easy access to financial transactions for students and staff." },
  { icon: Monitor, name: "Akshaya Centre", description: "The Akshaya Centre in the campus facilitates various e-governance services, online applications, and digital support services, benefiting students in accessing government and online resources efficiently." }
];

const FacilitiesPage = () => {
  return (
    <>
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
            FACILITIES
          </motion.h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -8px hsl(213 65% 32% / 0.15)",
                  scale: 1.02
                }}
                className={`group bg-card rounded-2xl p-8 border border-border transition-all duration-300 cursor-default ${i === facilities.length - 1 ? 'col-start-2' : ''}`}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300"
                >
                  <facility.icon className="w-10 h-10 text-accent" />
                </motion.div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{facility.name}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default FacilitiesPage;
