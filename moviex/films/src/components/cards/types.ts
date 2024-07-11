interface FilmDetailsProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface Genre {
  id: number;
  name: string;
}
interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface FilmCreditsProps {
  id: number;
  cast: CastMember[];
}

interface FavoriteListProps {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
  id: number;
}
interface FavoriteButtonProps {
  handleFavoriteToggling: (
    movieId: number,
    token: string | undefined,
  ) => Promise<void>;
  isFavorite: boolean | undefined;
  buttonId: number;
  ApiKey: string | undefined;
}
interface PropsForCardTemplate {
  id: number;
}

export type {
  FilmDetailsProps,
  FilmCreditsProps,
  FavoriteListProps,
  FavoriteButtonProps,
  PropsForCardTemplate,
};
