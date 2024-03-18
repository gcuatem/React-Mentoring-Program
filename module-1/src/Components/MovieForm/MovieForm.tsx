import "./MovieForm.css";
interface IMovieForm {
  action: string;
  movie?: Movie;
}

export const MovieForm = ({ action, movie }: IMovieForm) => {
  return (
    <div className="formSettings bg-custom_dark_gray  min-w-full">
      <h1 className="ml-5 mb-2 text-white text-2xl font-Montserrat">
        {action} MOVIE
      </h1>
      <div className="grid grid-cols-2 gap-3 mx-5 pb-3">
        <div className=" grid col-auto">
          <label className="text-custom_pink font-Montserrat " htmlFor="Title">
            Title
          </label>
          <input
            className="bg-custom_light_gray text-white p-1"
            type="text"
            name="Title"
            id="Title"
            value={action === "ADD" ? "" : movie?.movieName}
          />
        </div>

        <div className="grid col-auto">
          <label
            className="text-custom_pink font-Montserrat "
            htmlFor="releaseDate"
          >
            Release Date
          </label>
          <input
            className="bg-custom_light_gray text-white p-1"
            type="date"
            name="release"
            id="releaseDate"
            value={action === "ADD" ? "" : movie?.releaseDate}
          />
        </div>

        <div className="grid col-auto">
          <label
            className="text-custom_pink font-Montserrat "
            htmlFor="movieUrl"
          >
            Movie Url
          </label>
          <input
            className="bg-custom_light_gray text-white p-1"
            type="text"
            name="url"
            id="movieUrl"
            value={action === "ADD" ? "" : movie?.movieUrl}
          />
        </div>

        <div className=" grid col-auto">
          <label className="text-custom_pink font-Montserrat " htmlFor="rating">
            Rating
          </label>
          <input
            className="bg-custom_light_gray text-white p-1"
            type="text"
            name="rating"
            id="rating"
            value={action === "ADD" ? "" : movie?.rating}
          />
        </div>

        <div className=" grid col-auto">
          <label className="text-custom_pink font-Montserrat " htmlFor="genre">
            Genre
          </label>
          <select className="bg-custom_light_gray text-white p-1" id="genre">
            {movie &&
              movie.genres.map((item) => (
                <option key={item.id} value={item.genreName}>
                  {item.genreName}
                </option>
              ))}
            {!movie && <option value="Drama">Drama</option>}
          </select>
        </div>

        <div className="grid col-auto">
          <label
            className="text-custom_pink font-Montserrat "
            htmlFor="runtime"
          >
            Runtime
          </label>
          <input
            className="bg-custom_light_gray text-white p-1"
            type="text"
            name="time"
            id="runtime"
            value={action === "ADD" ? "" : movie?.duration}
          />
        </div>

        <div className="grid col-span-2">
          <label
            className="text-custom_pink font-Montserrat "
            htmlFor="overview"
          >
            Overview
          </label>
          <textarea
            className="bg-custom_light_gray text-white p-1"
            name="overview"
            id="overview"
            value={action === "ADD" ? "" : movie?.description}
          />
        </div>
      </div>
    </div>
  );
};
