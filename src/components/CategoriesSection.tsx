
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const categories = [
  {
    id: "1",
    name: "Кроссовки",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&h=350&fit=crop",
    productCount: 120
  },
  {
    id: "2",
    name: "Одежда",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=350&fit=crop",
    productCount: 85
  },
  {
    id: "3",
    name: "Бейсболки",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=350&fit=crop",
    productCount: 43
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Категории</h2>
            <p className="text-muted-foreground">Исследуйте наши категории и найдите то, что вам нужно</p>
          </div>
          <Button variant="link" className="mt-4 md:mt-0">
            Все категории
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
