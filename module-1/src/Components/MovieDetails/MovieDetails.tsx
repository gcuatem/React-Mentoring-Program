interface IMovieDetailsProps {
  movie: Movie;
}

export const MovieDetails = ({ movie }: IMovieDetailsProps) => {
  const releaseYear = new Date(movie.releaseDate).getFullYear();
  return (
    <div className="grid grid-cols-2 bg-slate-950">
      <div className="mx-auto">
        <img
          data-testid="details-img"
          className="max-h-96 m-2 rounded-lg"
          src={movie.imageUrl}
        ></img>
      </div>
      <div>
        <h1
          data-testid="details-title"
          className="text-white mt-2 text-2xl mt-3 text-center"
        >
          {movie.movieName}
          <span
            data-testid="details-rating"
            className="ml-3 text-white border rounded-full p-2 text-sm"
          >
            {movie.rating}
          </span>
        </h1>
        <div data-testid="details-genres" className="mt-4">
          {movie.genres.map((g) => (
            <span
              key={g.id}
              className="bg-green-700 rounded-sm text-white  px-1 text-xs ml-1"
            >
              {g.genreName}
            </span>
          ))}
        </div>
        <div className="flex justify-start ml-2 mt-3">
          <p data-testid="details-year" className="text-red-700 ">
            {releaseYear}
          </p>
          <p data-testid="details-duration" className="text-red-700 ml-6">
            {movie.duration}
          </p>
        </div>
        <div>
          <p
            data-testid="details-description"
            className="text-white font-Montserrat font-thin  text-sm text-justify my-5 mr-5"
          >
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};
