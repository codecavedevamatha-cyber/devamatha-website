import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight, Home } from "lucide-react";

const CollegeFooter = () => (
  <footer className="bg-white text-gray-800 relative overflow-hidden border-t border-gray-200">
    {/* Decorative top wave */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-accent" />

    <div className="container py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="mb-4">
            <Link to="/" className="inline-block">
              <img
                src="/img/footer-logo.png"
                alt="Deva Matha College"
                className="h-48 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div className="flex gap-8 justify-center w-full">
            {[
              {
                Icon: Facebook,
                label: "Facebook",
                url: "https://www.facebook.com/share/18QMWeJENw/",
              },
              {
                Icon: Instagram,
                label: "Instagram",
                url: "https://www.instagram.com/devamathacollegepaisakary/#",
              },
              {
                Icon: Youtube,
                label: "YouTube",
                url: "https://youtube.com/@devamathacollegepaisakary?si=H4vEGhR7MoDFnj4Z",
              },
            ].map(({ Icon, label, url }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-gray-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-display text-base font-semibold mb-4">
            Related Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { label: "Academic Bank of Credit", url: "https://abc.gov.in/" },
              { label: "Swayam", url: "https://swayam.gov.in/" },
              { label: "Digi Locker", url: "https://digilocker.gov.in/" },
              {
                label: "Kannur University",
                url: "https://kannuruniversity.ac.in/",
              },
              {
                label: "K-Reap Course Selection",
                url: "https://kannuradm.kreap.co.in/applicant/?#/login?client=KANNUR",
              },
              {
                label: "K-Reap Student Login",
                url: "https://kannurops.kreap.co.in/studentLogin/?#/kannur/studentLogin",
              },
              {
                label: "K-Reap College Login",
                url: "https://kannurops.kreap.co.in/?#/kannur",
              },
            ].map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-1 group text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Committees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-display text-base font-semibold mb-4">
            Committees
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              {
                label: "Anti Ragging Committee",
                href: "/committee/anti-ragging",
              },
              {
                label: "Special Protection Group",
                href: "/committee/special-protection",
              },
              {
                label: "Women's Anti-Harassment Cell",
                href: "/committee/women-anti-harassment",
              },
              {
                label: "Students' Grievance Redressal Cell",
                href: "/committee/students-grievance",
              },
              {
                label: "Internship Monitoring Committee",
                href: "/committee/internship-monitoring",
              },
              {
                label: "Career Guidance and Placement Cell",
                href: "/committee/career-guidance",
              },
              {
                label: "National Service Scheme",
                href: "/students-corner",
                scrollTo: "national-nss-scheme",
              },
            ].map((committee) => (
              <li key={committee.label}>
                <Link
                  to={committee.href}
                  className="hover:text-accent transition-colors inline-flex items-center gap-1 group text-gray-700"
                  onClick={() => {
                    if (committee.scrollTo) {
                      setTimeout(() => {
                        const element = document.getElementById(
                          committee.scrollTo,
                        );

                        if (element) {
                          const navbarOffset = 120;

                          const elementPosition =
                            element.getBoundingClientRect().top +
                            window.pageYOffset;

                          const offsetPosition = elementPosition - navbarOffset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }, 100);
                    }
                  }}
                >
                  {committee.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-display text-base font-semibold mb-4">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="font-semibold text-gray-800">
              Devamatha Arts & Science College
            </div>
            <p className="leading-relaxed">
              Paisakary P O, Payyavoor
              <br />
              Kannur Dist. Kerala, 670633.
            </p>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>04602939190</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>Admin: 918870260</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>Admission Nodal Officer: 9400111818</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a
                href="mailto:dmc@devamathacollege.ac.in"
                className="hover:text-accent transition-colors whitespace-nowrap"
              >
                dmc@devamathacollege.ac.in
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="border-t border-gray-200">
      <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 Deva Matha College, Paisakary. All rights reserved.</p>
        <p>Powered by: Code Cave</p>
      </div>
    </div>
  </footer>
);

export default CollegeFooter;
