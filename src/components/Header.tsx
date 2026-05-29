import { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/courses" },
  { label: "Departments", href: "/departments" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "IQAC", href: "/iqac" },
  { label: "Student's Corner", href: "/students-corner" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
];

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
    setShowScrollTop(window.scrollY > 600);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      {/* Top bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block bg-primary text-primary-foreground text-sm"
      >
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> dmc@devamathacollege.ac.in</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 9188702610</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:9400111818" 
              className="font-medium flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Admission Nodal Officer - 9400111818
            </a>
            <a 
              href="https://feebook.southindianbank.bank.in/FeeBookUser/org?id=346" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Fee Payment
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-college-navy/5" : "bg-card/80 backdrop-blur-sm"}`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/img/logo&typo.png" 
              alt="Deva Matha College" 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-2 py-3 text-base font-medium transition-colors rounded-md text-foreground/70 hover:text-primary hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Button 
                  className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  onClick={() => {
                    navigate('/admission');
                    setMobileOpen(false);
                  }}
                >
                  Know More
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 flex items-center justify-center transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
