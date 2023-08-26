type Profile = {
  _id?: string;
  name: string;
  avatar: string;
};

type User = {
  _id: string;
  email: string;
  phone: string;
  profiles?: Profile[];
};

type ComponentProp = {
  children?: any;
  [x: string]: any;
};

type ShowOverview = {
  id: number;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  original_language: string;
  original_title?: string;
  title?: string;
  origin_country?: string[];
  name?: string;
  original_name?: string;
  [x: string]: any;
};
export type { Profile, User, ComponentProp, ShowOverview };
