import { APIResponseType, CharacterType, EpisodeType, LocationType } from "../types";

const BASE_API_URL = 'https://rickandmortyapi.com/api';

async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.log('API fetch error: ', error);

    return null;
  }
};

export async function getCharacters(page = 1, name = '', status = ''): Promise<APIResponseType<CharacterType> | null> {
  let characterEndpoint = `character/?page=${page}`;

  if (name) {
    characterEndpoint += `&name=${name}`;
  }

  if (status) {
    characterEndpoint += `&status=${status}`;
  }

  return fetchData<APIResponseType<CharacterType>>(characterEndpoint);
};

export async function getEpisodes(page = 1): Promise<APIResponseType<EpisodeType> | null> {
  return fetchData<APIResponseType<EpisodeType>>(`episode/?page=${page}`);
};

export async function getLocations(page = 1): Promise<APIResponseType<LocationType> | null> {
  return fetchData<APIResponseType<LocationType>>(`location/?page=${page}`);
};

export async function getCharacterInfo(id: number): Promise<CharacterType | null> {
  return fetchData<CharacterType>(`character/${id}`);
};

export async function getEpisodeInfo(id: number): Promise<EpisodeType | null> {
  return fetchData<EpisodeType>(`episode/${id}`);
};

export async function getLocationInfo(id: number): Promise<LocationType | null> {
  return fetchData<LocationType>(`location/${id}`);
};
