import "./MovieForm.css";
interface MovieFormProps {
  title: string;
  movie?: Movie;
  closeCallback: () => void;
}

export const MovieForm = ({ title, movie, closeCallback }: MovieFormProps) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("HandleSubmit");
  }
  const handleClose = () => closeCallback();
  return (
    <div className="formSettings bg-custom_dark_gray  min-w-full">
      <div className="flex text-white justify-end mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => handleClose()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 className="ml-5 mb-2 text-white text-2xl font-Montserrat">{title}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-2 gap-3 mx-5 pb-3">
          <div className=" grid col-auto">
            <label
              className="text-custom_pink font-Montserrat "
              htmlFor="Title"
            >
              Title
            </label>
            <input
              className="bg-custom_light_gray text-white p-1"
              type="text"
              name="Title"
              id="Title"
              value={movie?.movieName}
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
              value={movie?.releaseDate}
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
              value={movie?.movieUrl}
            />
          </div>

          <div className=" grid col-auto">
            <label
              className="text-custom_pink font-Montserrat "
              htmlFor="rating"
            >
              Rating
            </label>
            <input
              className="bg-custom_light_gray text-white p-1"
              type="text"
              name="rating"
              id="rating"
              value={movie?.rating}
            />
          </div>

          <div className=" grid col-auto">
            <label
              className="text-custom_pink font-Montserrat "
              htmlFor="genre"
            >
              Genre
            </label>
            <select className="bg-custom_light_gray text-white p-1" id="genre">
              {movie &&
                movie.genres.map((item) => (
                  <option
                    onChange={() => {}}
                    key={item.id}
                    value={item.genreName}
                  >
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
              value={movie?.duration}
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
              value={movie?.description}
            />
          </div>
          <button
            type="button"
            onClick={() => handleClose()}
            className="bg-custom_black hover:bg-slate-900 text-custom_pink  border border-custom_pink rounded-md ml-2 py-1 px-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-custom_pink hover:bg-pink-400 text-white  border border-custom_pink rounded-md ml-2 py-1 px-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
