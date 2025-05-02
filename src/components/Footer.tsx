
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Logo size={32} className="mr-2" />
              BrandShop
            </h3>
            <p className="text-gray-400 mb-4">
              Мы предлагаем премиальные товары от лучших мировых брендов. Качество и стиль — наш приоритет.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-primary hover:bg-white/10">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-primary hover:bg-white/10">
                <Icon name="Facebook" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-primary hover:bg-white/10">
                <Icon name="Twitter" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-primary hover:bg-white/10">
                <Icon name="Youtube" size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/sneakers" className="text-gray-400 hover:text-white transition-colors">Кроссовки</Link></li>
              <li><Link to="/clothing" className="text-gray-400 hover:text-white transition-colors">Одежда</Link></li>
              <li><Link to="/caps" className="text-gray-400 hover:text-white transition-colors">Бейсболки</Link></li>
              <li><Link to="/accessories" className="text-gray-400 hover:text-white transition-colors">Аксессуары</Link></li>
              <li><Link to="/sale" className="text-gray-400 hover:text-white transition-colors">Распродажа</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Доставка</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Возврат и обмен</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Подписка на новости</h3>
            <p className="text-gray-400 mb-4">
              Подпишитесь на наши новости и получите скидку 10% на первый заказ
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button>
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 BrandShop. Все права защищены.</p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Link to="/terms" className="hover:text-white transition-colors">Условия использования</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
