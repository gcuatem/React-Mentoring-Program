interface IMovieTileProps {
  movie: Movie;
}

export const MovieTile = ({ movie }: IMovieTileProps) => {
  const releaseYear = new Date(movie.releaseDate).getFullYear();

  return (
    <div>
      <img id="movie-img" className="max-h-96" src={movie.imageUrl}></img>
      <div className="flex justify-between place-items-center">
        <p id="movie-title" className="text-white text-base mt-2">
          {movie.movieName}
        </p>
        <p
          id="movie-year"
          className="text-white border border-slate-500 rounded p-1 mt-2 text-sm"
        >
          {releaseYear}
        </p>
      </div>
      <div id="movie-genres" className="mt-2">
        {movie.genres.map((g) => (
          <span
            key={g.id}
            className="bg-blue-900 rounded-full text-white py-1 px-2 text-xs ml-1"
          >
            {g.genreName}
          </span>
        ))}
      </div>
    </div>
  );
};
