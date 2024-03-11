type Genre = {
  id: number;
  genreName: string;
};

type Movie = {
  id: number;
  imageUrl: string;
  movieName: string;
  releaseDate: string;
  genres: Genre[];
  rating?: number;
  duration?: string;
  description?: string;
};
