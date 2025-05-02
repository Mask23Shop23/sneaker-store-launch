
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop')",
          opacity: 0.7
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-xl text-white">
          <span className="inline-block bg-primary px-2 py-1 text-sm font-semibold text-white rounded mb-4">
            New Collection 2025
          </span>
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Брендовые коллекции премиум качества
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Откройте для себя эксклюзивные модели от ведущих мировых брендов. Создайте свой неповторимый стиль с нами.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg font-medium">
              Смотреть коллекцию
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-medium border-white text-white hover:bg-white hover:text-black">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
