import { CharacterType } from "../../../data/types/CharacterType";
import { CharacterItem } from "./CharacterItem";
import s from "./styles.module.css";

interface CharactersListProps {
  characters?: CharacterType[];
  isLoading: boolean;
}

export const CharactersList: React.FC<CharactersListProps> = ({
  characters,
  isLoading,
}) => {
  return (
    <div className={s.list}>
      {!isLoading && characters
        ? characters.map((character) => <CharacterItem character={character} />)
        : "load"}
    </div>
  );
};
