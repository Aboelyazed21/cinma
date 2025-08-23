import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  titleAr: string;
  genre: string;
  year: number;
  rating: number;
  duration: string;
  poster: string;
  trailer: string; // trailer link
  description: string;
  descriptionAr: string;
}

interface MovieRowProps {
  title: string;
  titleAr: string;
  movies: Movie[];
  size?: 'small' | 'medium' | 'large';
}

const MovieRow: React.FC<MovieRowProps> = ({ title, titleAr, movies, size = 'medium' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);

  const checkScrollButtons = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div className="relative mb-12 group">
      {/* Section Title */}
      <div className="px-8 lg:px-16 mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-lg text-gray-400 font-arabic">{titleAr}</p>
      </div>

      {/* Movies Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 z-10 ${
            !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-100'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-200 z-10 ${
            !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100 group-hover:opacity-100'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Movies Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-8 lg:px-16 py-4"
          onScroll={checkScrollButtons}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard movie={movie} size={size} />
              {/* زر عرض التريلر */}
              {movie.trailer && (
                <button
                  onClick={() => setSelectedTrailer(movie.trailer)}
                  className="mt-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                >
                  ▶ Watch Trailer
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trailer Modal */}
      {selectedTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={selectedTrailer}
              className="w-full h-full rounded-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedTrailer(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-lg"
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieRow;
