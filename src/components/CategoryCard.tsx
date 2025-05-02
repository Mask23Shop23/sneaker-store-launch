
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard = ({ name, image, productCount }: CategoryCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer group h-[220px] relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <CardContent className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-sm text-white/80 mt-1">{productCount} товаров</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
