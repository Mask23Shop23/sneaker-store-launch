
import { Separator } from "@/components/ui/separator";

const brands = [
  { id: "1", name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=50&fit=crop" },
  { id: "2", name: "Adidas", logo: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=100&h=50&fit=crop" },
  { id: "3", name: "Puma", logo: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=100&h=50&fit=crop" },
  { id: "4", name: "New Balance", logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=100&h=50&fit=crop" },
  { id: "5", name: "Reebok", logo: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=100&h=50&fit=crop" },
  { id: "6", name: "Vans", logo: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=100&h=50&fit=crop" }
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши бренды</h2>
        
        <Separator className="mb-10" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map(brand => (
            <div key={brand.id} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
        
        <Separator className="mt-10" />
      </div>
    </section>
  );
};

export default BrandsSection;
