
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({ id, name, brand, price, image, isNew, discount }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        {isNew && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            Новинка
          </span>
        )}
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
            -{discount}%
          </span>
        )}
        <div className="h-60 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm" className="m-1">
            <Icon name="Eye" size={16} className="mr-1" />
            Просмотр
          </Button>
          <Button variant="secondary" size="sm" className="m-1">
            <Icon name="Heart" size={16} className="mr-1" />
            Избранное
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm font-medium text-muted-foreground">{brand}</p>
        <h3 className="font-semibold text-lg mt-1 truncate">{name}</h3>
        <div className="flex items-center mt-2">
          {discount ? (
            <>
              <p className="font-bold text-lg">{Math.round(price * (1 - discount / 100))} ₽</p>
              <p className="text-muted-foreground line-through ml-2">{price} ₽</p>
            </>
          ) : (
            <p className="font-bold text-lg">{price} ₽</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
