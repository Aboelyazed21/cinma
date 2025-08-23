import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, Film } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', nameEn: 'Home', href: '#home' },
    { name: 'الأفلام', nameEn: 'Movies', href: '#movies' },
    { name: 'المسلسلات', nameEn: 'Series', href: '#series' },
    { name: 'الجديد', nameEn: 'New', href: '#new' },
    { name: 'قائمتي', nameEn: 'My List', href: '#mylist' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-95 backdrop-blur-md' : 'bg-gradient-to-b from-black to-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 lg:w-10 lg:h-10 text-red-600" />
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              ENG
            </h1>
            <span className="text-lg text-gray-400 font-arabic hidden sm:block">
               ZEZO
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-red-500 transition-colors duration-200 flex flex-col items-center group"
              >
                <span className="text-sm">{item.nameEn}</span>
                <span className="text-xs text-gray-400 font-arabic group-hover:text-red-400">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white hover:text-red-500 transition-colors duration-200 p-2"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-black bg-opacity-95 rounded-lg p-4 border border-gray-800">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن الأفلام والمسلسلات..."
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Notifications */}
            <button className="text-white hover:text-red-500 transition-colors duration-200 p-2 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button className="flex items-center gap-2 text-white hover:text-red-500 transition-colors duration-200">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="hidden lg:block text-sm">الملف الشخصي</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-95 rounded-lg mt-2 p-4 border border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white hover:text-red-500 py-3 border-b border-gray-800 last:border-b-0 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex justify-between items-center">
                  <span>{item.nameEn}</span>
                  <span className="text-sm text-gray-400 font-arabic">{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;