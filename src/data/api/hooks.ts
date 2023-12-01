import { useQuery } from "react-query";
import { fetchCharacters, fetchCharacter } from "./actions-query";
import { charactersKeys } from "./hook-keys";
import { CharacterType } from "../types/CharacterType";

export const useCharacters = (params: string) => {
  const queryParams = `search=${params}`;
  return useQuery<CharacterType[], Error>(
    charactersKeys.list(queryParams),
    () => fetchCharacters(queryParams)
  );
};

export const useCharacter = (characterId: string) =>
  useQuery<CharacterType, Error>(charactersKeys.character(characterId), () =>
    fetchCharacter(characterId)
  );
