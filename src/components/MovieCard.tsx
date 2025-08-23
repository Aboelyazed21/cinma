import React, { useState } from "react";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster: string;
    trailer: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div
      key={movie.id}
      className="relative w-64 h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setVideoLoaded(false);
      }}
    >
      {/* صورة البوستر */}
      <img
        src={movie.poster}
        alt={movie.title}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isHovered && videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* التريلر لما أعمل hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50">
          {movie.trailer.includes("imdb.com") || movie.trailer.includes("youtube.com") ? (
            <iframe
              src={movie.trailer}
              className="w-full h-full object-cover"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full h-full object-cover opacity-80"
              autoPlay
              muted
              loop
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src={movie.trailer} type="video/mp4" />
            </video>
          )}
        </div>
      )}

      {/* العنوان */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-3">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
