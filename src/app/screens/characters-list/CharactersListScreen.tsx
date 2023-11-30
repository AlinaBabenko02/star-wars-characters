import { CharactersList } from "../../components/characters-list/CharactersList";
import s from "./styles.module.css";

export const CharactersListScreen = () => {
  const data = [
    {
      name: "Luke Skywalker",
      birth_year: "19 BBY",
      eye_color: "Blue",
      gender: "Male",
      hair_color: "Blond",
      height: "172",
      mass: "77",
      skin_color: "Fair",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-10T13:52:43.172000Z",
    },
    {
      name: "Luke Skywalker",
      birth_year: "19 BBY",
      eye_color: "Blue",
      gender: "Male",
      hair_color: "Blond",
      height: "172",
      mass: "77",
      skin_color: "Fair",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-10T13:52:43.172000Z",
    },
  ];
  return (
    <div className={s.root}>
      <img src="images/star-wars.png" alt="Star Wars" height={120} />
      <CharactersList characters={data} />
    </div>
  );
};
