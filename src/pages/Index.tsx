import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import RevenueChart from "@/components/RevenueChart";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import QualificationForm from "@/components/QualificationForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Hero />
    <About />
    <HowItWorks />
    <RevenueChart />
    <Testimonials />
    <FAQ />
    <QualificationForm />
    <Footer />
  </div>
);

export default Index;
