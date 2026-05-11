import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import HomeGallery from "@/components/HomeGallery";
import PosterSlider from "@/components/PosterSlider";
import NewsEventsSection from "@/components/NewsEventsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import CollegeFooter from "@/components/CollegeFooter";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <CoursesSection />
    <NewsEventsSection />
    <DepartmentsSection />
    <HomeGallery />
    <PosterSlider />
    <AboutSection />
    <LeadershipSection />
    <FacilitiesSection />
    <CollegeFooter />
  </div>
);

export default Index;
