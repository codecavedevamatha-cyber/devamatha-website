import { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Home",
    href: "/",
    dropdownAlign: "left",
    children: [
      { label: "About College", href: "/#about" },
      { label: "Departments", href: "/#departments" },
      { label: "Admissions", href: "/#admissions" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Management", href: "/about#management" },
      { label: "College Profile", href: "/about#college-profile" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Former Leadership", href: "/about#former-leadership" },
    ],
  },
  {
    label: "Programmes",
    href: "/courses",
    children: [
      { label: "Choose Your Programme", href: "/courses#choose-programme" },
      { label: "Undergraduate", href: "/courses#choose-programme" },
      { label: "Postgraduate", href: "/courses#choose-programme" },
      { label: "BBA Hospital Administration", href: "/course/bba-ha" },
      { label: "B.Sc AI and Data Science", href: "/course/bsc-ai" },
      { label: "M.Com Finance", href: "/course/mcom-finance" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "English", href: "/departments/english" },
      { label: "Management Studies", href: "/departments/management" },
      { label: "Computer Applications", href: "/departments/computer" },
      { label: "Commerce", href: "/departments/commerce" },
      { label: "Physical Education", href: "/departments/physical" },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      { label: "Admission Portal", href: "/admission#admission-portal" },
      { label: "Prospectus", href: "/admission#prospectus" },
      { label: "Admission Support", href: "/admission#admission-support" },
      { label: "Management Quota Seats", href: "/admission#management-quota-form" },
      { label: "Admission Process", href: "/admission#admission-process" },
      { label: "Documents Required", href: "/admission#documents-required" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery#gallery-content" },
      { label: "Videos", href: "/gallery#gallery-content" },
      { label: "Year-wise Albums", href: "/gallery#gallery-content" },
    ],
  },
  {
    label: "IQAC",
    href: "/iqac",
    children: [
      { label: "About IQAC", href: "/iqac#about-iqac" },
      { label: "Objective", href: "/iqac#objective" },
      { label: "IQAC Team", href: "/iqac#iqac-team" },
    ],
  },
  {
    label: "Student's Corner",
    href: "/students-corner",
    dropdownAlign: "right",
    children: [
      { label: "K-Reap Portal", href: "/students-corner#k-reap-portal" },
      { label: "Syllabus", href: "/students-corner#syllabus" },
      { label: "Committees", href: "/students-corner#committees" },
      { label: "Clubs", href: "/students-corner#clubs" },
      { label: "Alumni Registration", href: "/students-corner#alumni-registration" },
    ],
  },
  {
    label: "Scholarship",
    href: "/scholarship",
    dropdownAlign: "right",
    children: [
      { label: "AICTE Scholarships", href: "/scholarship#aicte-scholarships" },
      { label: "e-Grantz Scholarship", href: "/scholarship#e-grantz-scholarship" },
    ],
  },
];

const getDropdownPosition = (align?: string) => {
  if (align === "left") return "left-0";
  if (align === "right") return "right-0";
  return "left-1/2 -translate-x-1/2";
};

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToHash = useCallback((href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;

      const navbarOffset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }, 120);
  }, []);

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
        <div className="container flex min-h-[88px] items-center gap-3 py-2 xl:min-h-[104px] xl:gap-4">
          <Link to="/" className="flex flex-shrink-0 items-center">
            <img 
              src="/img/logo&typo.png" 
              alt="Deva Matha College" 
              className="h-16 md:h-20 xl:h-[88px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-end gap-0.5 xl:gap-1.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="group relative"
              >
                <Link
                  to={link.href}
                  onClick={() => scrollToHash(link.href)}
                  className="relative flex items-center gap-1 rounded-md px-1.5 py-3 text-xs font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary focus:outline-none xl:px-2 xl:text-sm 2xl:text-base"
                >
                  {link.label}
                  {link.children?.length ? (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  ) : null}
                </Link>

                {link.children?.length ? (
                  <div
                    className={`pointer-events-none absolute top-full ${getDropdownPosition(link.dropdownAlign)} z-50 min-w-60 pt-2 opacity-0 translate-y-2 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100`}
                  >
                    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-2xl shadow-college-navy/20 ring-1 ring-black/5">
                      <div className="border-b border-border bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                        {link.label}
                      </div>
                      <div className="max-h-[70vh] overflow-y-auto py-2">
                        {link.children.map((child) => (
                          <Link
                            key={`${link.href}-${child.href}-${child.label}`}
                            to={child.href}
                            onClick={() => scrollToHash(child.href)}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary focus:outline-none"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <button className="ml-auto lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
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
                      onClick={() => {
                        scrollToHash(link.href);
                        setMobileOpen(false);
                      }}
                      className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.children?.length ? (
                      <div className="ml-4 mb-2 grid gap-1 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={`${link.href}-${child.href}-${child.label}`}
                            to={child.href}
                            onClick={() => {
                              scrollToHash(child.href);
                              setMobileOpen(false);
                            }}
                            className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
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
