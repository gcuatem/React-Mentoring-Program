import "./MovieForm.css";
interface IMovieForm {
  action: string;
}

export const MovieForm = ({ action }: IMovieForm) => {
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
          />
        </div>

        <div className=" grid col-auto">
          <label className="text-custom_pink font-Montserrat " htmlFor="genre">
            Genre
          </label>
          <select className="bg-custom_light_gray text-white p-1" id="genre">
            <option value="Drama">Drama</option>
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
          />
        </div>
      </div>
    </div>
  );
};
