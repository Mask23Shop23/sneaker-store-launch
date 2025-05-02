
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Кроссовки", path: "/sneakers" },
    { name: "Одежда", path: "/clothing" },
    { name: "Бейсболки", path: "/caps" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contact" }
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl flex items-center text-primary">
          <Icon name="ShoppingBag" className="mr-2" size={24} />
          BrandShop
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          {!isMobile ? (
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <Input 
                    placeholder="Поиск товаров..." 
                    className="w-64"
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-0"
                  >
                    <Icon name="X" size={18} />
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Icon name="Search" size={20} />
                </Button>
              )}
            </div>
          ) : null}

          {/* User */}
          <Button variant="ghost" size="icon">
            <Icon name="User" size={20} />
          </Button>

          {/* Favorites */}
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="Heart" size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="mt-6 px-2">
                  <div className="mb-6">
                    <Input placeholder="Поиск товаров..." className="w-full" />
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-sm font-medium hover:text-primary transition-colors p-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
