import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import { movies, getMoviesByCategory, getRandomMovies } from './data/movies';

function App() {
  const actionMovies = getMoviesByCategory('action');
  const dramaMovies = getMoviesByCategory('drama');
  const comedyMovies = getMoviesByCategory('comedy');
  const horrorMovies = getMoviesByCategory('horror');
  const scifiMovies = getMoviesByCategory('scifi');
  const newMovies = getMoviesByCategory('new');
  const randomMovies = getRandomMovies(8);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Movies Content */}
      <main className="relative -mt-32 z-10">
        {/* Trending Now */}
        <MovieRow
          title="Trending Now"
          titleAr="الأكثر رواجاً الآن"
          movies={randomMovies}
          size="large"
        />

        {/* New Releases */}
        <section id="new">
          <MovieRow
            title="New Releases"
            titleAr="الإصدارات الجديدة"
            movies={newMovies}
            size="medium"
          />
        </section>

        {/* Action Movies */}
        <section id="movies">
          <MovieRow
            title="Action & Adventure"
            titleAr="أفلام الأكشن والمغامرة"
            movies={actionMovies}
            size="medium"
          />
        </section>

        {/* Drama Movies */}
        <MovieRow
          title="Drama"
          titleAr="أفلام الدراما"
          movies={dramaMovies}
          size="medium"
        />

        {/* Comedy Movies */}
        <MovieRow
          title="Comedy"
          titleAr="أفلام الكوميديا"
          movies={comedyMovies}
          size="medium"
        />

        {/* Horror Movies */}
        <MovieRow
          title="Horror & Thriller"
          titleAr="أفلام الرعب والإثارة"
          movies={horrorMovies}
          size="medium"
        />

        {/* Sci-Fi Movies */}
        <MovieRow
          title="Sci-Fi & Fantasy"
          titleAr="الخيال العلمي والفانتازيا"
          movies={scifiMovies}
          size="medium"
        />

        {/* My List - Random selection for demo */}
        <section id="mylist">
          <MovieRow
            title="My List"
            titleAr="قائمتي"
            movies={movies.slice(0, 6)}
            size="small"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-20 py-12">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">CinemaHub</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your ultimate destination for movies and entertainment.
              </p>
              <p className="text-gray-400 text-sm mt-2 font-arabic">
                Your ultimate destination for movies and entertainment." 🎬✨
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TV Shows</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My List</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400 text-sm font-arabic">
                <li><a href="#" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأفلام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">المسلسلات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">قائمتي</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024  ENG : ZEZO. All rights reserved. | جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;