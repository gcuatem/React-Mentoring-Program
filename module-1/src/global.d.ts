type Genre = {
  id: number;
  genreName: string;
};

type SearchField = {
  id: number;
  field: string;
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
  movieUrl?: string;
};
