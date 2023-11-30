import { Link } from "react-router-dom";
import s from "./styles.module.css";

export const CharacterItem = ({ character }) => (
  <Link to="/characters/1" className={s.item}>
    <img
      src={`images/${character.gender.toLowerCase()}.png`}
      alt="Star Wars"
      height={80}
    />
    <div>
      <div className={s.name}>{character.name}</div>
      <div>{character.birth_year}</div>
    </div>
  </Link>
);
