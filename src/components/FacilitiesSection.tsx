import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Library,
  Computer,
  Utensils,
  Bed,
  Car,
  Building,
  Monitor
} from "lucide-react";

const facilities = [
  { icon: Library, name: "Library", description: "The College Library is well-stocked with a wide collection of books, journals, periodicals, and digital resources. It offers a quiet and conducive environment for study and research, catering to the academic requirements of students and faculty." },
  { icon: Computer, name: "Computer Lab", description: "The Computer Lab is equipped with modern systems, high-speed internet connectivity, and updated software to support practical learning in areas such as programming, data analysis, and digital applications." },
  { icon: Utensils, name: "Canteen", description: "The College Canteen provides hygienic and affordable food for students and staff. It serves as a common space for relaxation and social interaction within the campus." },
  { icon: Bed, name: "Hostel", description: "Separate hostel facilities are available for boys and girls, offering a safe and disciplined living environment with necessary amenities for comfortable accommodation." },
  { icon: Car, name: "Parking", description: "Adequate parking space is provided within the campus for both students and staff, ensuring convenience and proper vehicle management." },
  { icon: Building, name: "Bank & ATM", description: "Banking services and ATM facilities are available within the campus, enabling easy access to financial transactions for students and staff." },
  { icon: Monitor, name: "Akshaya Centre", description: "The Akshaya Centre in the campus facilitates various e-governance services, online applications, and digital support services, benefiting students in accessing government and online resources efficiently." }
];

const FacilitiesSection = () => {
  const navigate = useNavigate();

  return (
  <section id="facilities" className="pt-8 pb-16 bg-secondary/50 overflow-hidden">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Facilities</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-accent rounded-full mx-auto mt-4"
        />
      </motion.div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            className="group bg-card rounded-2xl p-6 border border-border transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300"
            >
              <facility.icon className="w-8 h-8 text-accent" />
            </motion.div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">{facility.name}</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/facilities")}
              className="w-full bg-accent text-white px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Know More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FacilitiesSection;
