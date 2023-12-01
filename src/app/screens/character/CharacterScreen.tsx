import { Link, useParams } from "react-router-dom";
import { CharacterDetails } from "../../components/character-details/CharacterDetails";
import s from "./styles.module.css";
import { useCharacter } from "../../../data/api/hooks";

export const CharacterScreen: React.FC = () => {
  let { id } = useParams();
  const { data: character, isLoading: characterLoading } = useCharacter(id!);

  return (
    <div className={s.root}>
      <Link to="/characters" className={s.back}>
        ←Back
      </Link>
      <CharacterDetails character={character} isLoading={characterLoading} />
    </div>
  );
};
