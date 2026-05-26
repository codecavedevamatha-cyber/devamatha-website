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
import SchemaOrg from "@/components/SchemaOrg";
import { Helmet } from "react-helmet-async";

const Index = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Home | Devamatha College</title>
      <meta
        name="description"
        content="Official website of Devamatha Arts & Science College Paisakary."
      />
    </Helmet>
    <SchemaOrg type="Organization" />
    <SchemaOrg type="CollegeOrUniversity" />
    <SchemaOrg type="WebSite" />
    <Header />
    <HeroSection />
    <CoursesSection />
    <AboutSection />
    <LeadershipSection />
    <NewsEventsSection />
    <PosterSlider />
    <HomeGallery />
    <DepartmentsSection />
    <FacilitiesSection />
    <CollegeFooter />
  </div>
);

export default Index;
