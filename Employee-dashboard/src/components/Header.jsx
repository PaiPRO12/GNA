import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AuthContext } from '../context/AuthContext';
import { useTheme } from './theme-provider';
import { Bell, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [showNews, setShowNews] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const latestNews = [
    { id: 1, title: "New Sustainable Farming Initiative Launched" },
    { id: 2, title: "Employee of the Month: Ignitious Sakala" },
    { id: 3, title: "Upcoming Team Building Event: Save the Date!" },
  ];

  return (
    <header className="bg-primary text-white shadow-md fixed top-0 left-64 right-0 z-40">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Good Nature Agro</h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:text-primary-foreground"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Bell className="h-5 w-5 cursor-pointer" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar.png" alt="Ignitious Sakala" />
                    <AvatarFallback>IS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/personal-info')}>Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showNews && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-800 text-white py-1"
          >
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex-1 overflow-hidden">
                <motion.div
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="whitespace-nowrap text-sm"
                >
                  {latestNews.map((news, index) => (
                    <span key={news.id} className="mr-8">
                      {news.title}
                      {index < latestNews.length - 1 && " | "}
                    </span>
                  ))}
                </motion.div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={() => setShowNews(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
