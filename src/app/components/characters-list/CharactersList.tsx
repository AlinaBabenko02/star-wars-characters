import { CharacterItem } from "./CharacterItem";
import s from "./styles.module.css";

export const CharactersList = ({ characters }) => {
  return (
    <div className={s.list}>
      {characters.map((character) => (
        <CharacterItem character={character} />
      ))}
    </div>
  );
};
