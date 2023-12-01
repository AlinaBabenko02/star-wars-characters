import { CharacterType } from "../../../data/types/CharacterType";
import { Loader } from "../loader/Loader";
import { CharacterItem } from "./CharacterItem";
import { Notification } from "./Notification";
import s from "./styles.module.css";

interface CharactersListProps {
  characters?: CharacterType[];
  isLoading: boolean;
}

export const CharactersList: React.FC<CharactersListProps> = ({
  characters,
  isLoading,
}) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.list}>
      {characters && characters.length ? (
        characters.map((character) => (
          <CharacterItem character={character} key={character.url} />
        ))
      ) : (
        <Notification>No results.</Notification>
      )}
    </div>
  );
};
