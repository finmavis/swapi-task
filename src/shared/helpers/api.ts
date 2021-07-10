import { API_URL } from '../constants/api.constant';

export const getAllMovie = async (): Promise<MovieDataType[]> => {
  const res = await fetch(API_URL);
  const resJson: FilmsResponse = await res.json();
  const editedMovieList = resJson.results.map((movie) => ({
    id: Number(
      movie.url
        .split('/')
        .filter(Boolean)
        .pop()
    ),
    title: movie.title,
    description: movie.opening_crawl,
    releaseDate: movie.release_date,
  }));
  return editedMovieList;
};

export const getSingleMovie = async (id: number): Promise<MovieDetailType> => {
  const res = await fetch(`${API_URL}${id}/`);
  const resJson: FilmResponse = await res.json();
  const resCharacters = resJson.characters.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: CharactersResponse) => c.name)
  );
  const resPlanets = resJson.planets.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: PlanetsResponse) => c.name)
  );
  const resSpecies = resJson.species.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: SpeciesResponse) => c.name)
  );
  const resStarships = resJson.starships.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: StarshipsResponse) => c.name)
  );
  const resVehicles = resJson.vehicles.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c: VehiclesResponse) => c.name)
  );
  const characters = await Promise.all(resCharacters);
  const planets = await Promise.all(resPlanets);
  const species = await Promise.all(resSpecies);
  const starships = await Promise.all(resStarships);
  const vehicles = await Promise.all(resVehicles);
  const data = {
    characters,
    director: resJson.director,
    description: resJson.opening_crawl,
    planets,
    producer: resJson.producer,
    releaseDate: resJson.release_date,
    species,
    starships,
    title: resJson.title,
    vehicles,
  };
  return data;
};

export type MovieDataType = {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
};

export type MovieDetailType = {
  title: string | null;
  director: string | null;
  producer: string | null;
  description: string | null;
  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
};

export type FilmsResponse = {
  count: number;
  next: number | null;
  previos: number | null;
  results: FilmResponse[];
};

export type FilmResponse = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharactersResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type PlanetsResponse = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type StarshipsResponse = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type VehiclesResponse = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type SpeciesResponse = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
