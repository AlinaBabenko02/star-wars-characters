import axios from "axios";
import { CharacterType } from "../types/CharacterType";

const baseURL = "https://swapi.dev/api/people/";

export const fetchCharacters = async (
  params?: string
): Promise<CharacterType[]> =>
  await (
    await axios.get(`${baseURL}?${params}`)
  ).data.results;

export const fetchCharacter = async (
  characterId: string
): Promise<CharacterType> =>
  await (
    await axios.get(`${baseURL}/${characterId}`)
  ).data;
