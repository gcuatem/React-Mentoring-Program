interface IMovieTileProps {
  movie: Movie;
}

export const MovieTile = ({ movie }: IMovieTileProps) => {
  const releaseYear = new Date(movie.releaseDate).getFullYear();

  return (
    <div className="bg-slate-950 p-3">
      <img id="movie-img" className="max-h-80" src={movie.imageUrl}></img>
      <div className="flex justify-between max-w-48 place-items-center mx-2 my-1">
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
      <div id="movie-genres" className="max-w-48 my-2 mx-2">
        {movie.genres.map((g) => (
          <span
            key={g.id}
            className="bg-green-700 rounded-md text-white  px-2 text-xs ml-1"
          >
            {g.genreName}
          </span>
        ))}
      </div>
    </div>
  );
};
