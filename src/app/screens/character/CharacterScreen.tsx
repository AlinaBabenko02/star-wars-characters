import { Link } from "react-router-dom";
import { CharacterDetails } from "../../components/character-details/CharacterDetails";
import s from "./styles.module.css";

export const CharacterScreen = () => {
  const data = {
    name: "Luke Skywalker",
    gender: "Male",
    birth_year: "19 BBY",

    eye_color: "Blue",
    hair_color: "Blond",
    height: "172",
    mass: "77",
    skin_color: "Fair",

    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-10T13:52:43.172000Z",
  };

  return (
    <div className={s.root}>
      <Link to="/characters" className={s.back}>
        ←Back
      </Link>
      <CharacterDetails character={data} />
    </div>
  );
};
