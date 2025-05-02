
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const mockProducts = [
  {
    id: "1",
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 12990,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=350&fit=crop",
    isNew: true
  },
  {
    id: "2",
    name: "Adidas Ultra Boost 21",
    brand: "Adidas",
    price: 14990,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&h=350&fit=crop",
    discount: 20
  },
  {
    id: "3",
    name: "Puma RS-X",
    brand: "Puma",
    price: 8990,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=350&fit=crop"
  },
  {
    id: "4",
    name: "New Balance 574",
    brand: "New Balance",
    price: 9990,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=350&fit=crop",
    isNew: true,
    discount: 15
  }
];

const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState("popular");
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Популярные товары</h2>
            <p className="text-muted-foreground">Откройте для себя наши популярные товары и новые поступления</p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4 md:mt-0">
            <TabsList>
              <TabsTrigger value="popular">Популярные</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
              <TabsTrigger value="sale">Распродажа</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <TabsContent value="popular" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="new" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.filter(p => p.isNew).map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sale" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockProducts.filter(p => p.discount).map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="font-medium">
            Смотреть все товары
            <Icon name="ArrowRight" className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
