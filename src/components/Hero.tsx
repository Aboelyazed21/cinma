import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredMovies = [
  {
  id: 1,
  title: 'Avatar: The Way of Water',
  titleAr: 'أفاتار: طريق الماء',
  description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.',
  descriptionAr: 'يعيش جيك سولي مع عائلته الجديدة التي تشكلت على قمر باندورا خارج المجموعة الشمسية.',
  backdrop: 'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  trailer: 'https://www.youtube.com/embed/d9MyW72ELq0',  // ✅ YouTube Embed
  year: 2022,
  genre: 'Sci-Fi, Adventure',
  rating: 8.1
},

{
  id: 2,
  title: 'Top Gun: Maverick',
  titleAr: 'توب غن: مافريك',
  description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator.',
  descriptionAr: 'بعد ثلاثين عاماً، لا يزال مافريك يدفع الحدود كطيار بحري متميز.',
  backdrop: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  trailer: 'https://www.youtube.com/embed/giXco2jaZ_4', // 🎬 التريلر الرسمي من يوتيوب
  year: 2022,
  genre: 'Action, Drama',
  rating: 8.7
},

{
  id: 3,
  title: 'Black Panther: Wakanda Forever',
  titleAr: 'النمر الأسود: واكاندا للأبد',
  description: 'The people of Wakanda fight to protect their home from intervening world powers.',
  descriptionAr: 'يقاتل شعب واكاندا لحماية وطنهم من القوى العالمية المتدخلة.',
  backdrop: 'https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
  trailer: 'https://www.youtube.com/embed/_Z3QKkl1WyM', // ✅ YouTube Embed
  year: 2022,
  genre: 'Action, Adventure',
  rating: 7.9
},


];

const Hero: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const movie = featuredMovies[currentMovie];

  const nextMovie = () => {
    setAutoplay(false);
    setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
  };

  const prevMovie = () => {
    setAutoplay(false);
    setCurrentMovie((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">
            {/* Movie Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              {movie.title}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-arabic">
              {movie.titleAr}
            </h2>

            {/* Movie Info */}
            <div className="flex items-center gap-4 mb-6 text-gray-300">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                {movie.rating}/10
              </span>
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.genre}</span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-200 mb-4 leading-relaxed max-w-xl">
              {movie.description}
            </p>
            <p className="text-md text-gray-400 mb-8 leading-relaxed max-w-xl font-arabic">
              {movie.descriptionAr}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button className="bg-white text-black px-8 py-3 rounded-md font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
                <Play className="w-6 h-6" />
                تشغيل
              </button>
              <button className="bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded-md font-bold text-lg flex items-center gap-2 hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
                <Info className="w-6 h-6" />
                معلومات
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-200"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevMovie}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-200 z-20"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextMovie}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 transition-all duration-200 z-20"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Movie Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMovie(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentMovie ? 'bg-red-600' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;