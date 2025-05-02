
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedSection />
        <CategoriesSection />
        <BrandsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
