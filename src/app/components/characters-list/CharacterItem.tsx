import { Link } from "react-router-dom";
import s from "./styles.module.css";
import { CharacterType } from "../../../data/types/CharacterType";

export const CharacterItem: React.FC<{
  character: CharacterType;
}> = ({ character }) => {
  let avatarImage: string;
  switch (character.gender) {
    case "female":
      avatarImage = "female";
      break;
    case "male":
      avatarImage = "male";
      break;
    default:
      avatarImage = "unknown";
  }

  return (
    <Link to="/characters/1" className={s.item}>
      <img src={`images/${avatarImage}.png`} alt="Star Wars" height={80} />
      <div>
        <div className={s.name}>{character.name}</div>
        <div>{character.birth_year}</div>
      </div>
    </Link>
  );
};
