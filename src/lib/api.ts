const BASE_API_URL = 'https://rickandmortyapi.com/api';

async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log('API fetch error: ', error);

    return null;
  }
};

export async function getCharacters(page = 1, name = '', status = '') {
  let characterEndpoint = `character/?page=${page}`;

  if (name) {
    characterEndpoint += `&name=${name}`;
  }

  if (status) {
    characterEndpoint += `&status=${status}`;
  }

  return fetchData(characterEndpoint);
};

export async function getEpisodes(page = 1) {
  return fetchData(`episode/?page=${page}`);
};

export async function getLocations(page = 1) {
  return fetchData(`location/?page=${page}`);
};

export async function getCharacterInfo(id: number) {
  return fetchData(`character/${id}`);
};

export async function getEpisodeInfo(id: number) {
  return fetchData(`episode/${id}`);
};

export async function getLocationInfo(id: number) {
  return fetchData(`location/${id}`);
};
