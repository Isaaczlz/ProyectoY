import { API_HOST } from "../utils/constants";

export async function getCharactersApi(endpointUrl) {
  try {
    const url = `${API_HOST}/character?limit=10&offset=0`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCharacterDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCharactersDetailApi(id) {
  try {
    const url = `${API_HOST}/character/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
