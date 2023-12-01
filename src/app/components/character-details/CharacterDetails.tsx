import { CharacterType } from "../../../data/types/CharacterType";
import { Loader } from "../loader/Loader";
import { DetailItem } from "./DetailItem";
import s from "./styles.module.css";

interface CharacterDetailsProps {
  character?: CharacterType;
  isLoading: boolean;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  character,
  isLoading,
}) => {
  return !isLoading && character ? (
    <div className={s.character}>
      <div className={s.title}>
        <div className={s.name}>{character.name}</div>
        <div>{character.gender.toLowerCase()}</div>
      </div>
      <div className={s.info}>
        <DetailItem title="Birth year" value={character.birth_year} />
        <DetailItem title="Height" value={character.height} />
        <DetailItem title="Mass" value={character.mass} />
        <DetailItem title="Skin color" value={character.skin_color} />
        <DetailItem title="Eye color" value={character.eye_color} />
        <DetailItem title="Hair color" value={character.hair_color} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};
