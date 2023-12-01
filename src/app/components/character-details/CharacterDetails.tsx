import { CharacterType } from "../../../data/types/CharacterType";
import { Loader } from "../loader/Loader";
import { DetailItem, DetailItemProps } from "./DetailItem";
import s from "./styles.module.css";

interface CharacterDetailsProps {
  character?: CharacterType;
  isLoading: boolean;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  character,
  isLoading,
}) => {
  const characterInfo: DetailItemProps[] = [
    { title: "Birth year", value: character?.birth_year! },
    { title: "Height", value: character?.height! },
    { title: "Mass", value: character?.mass! },
    { title: "Skin color", value: character?.skin_color! },
    { title: "Eye color", value: character?.eye_color! },
    { title: "Hair color", value: character?.hair_color! },
  ];

  return !isLoading && character ? (
    <div className={s.character}>
      <div className={s.title}>
        <div className={s.name}>{character.name}</div>
        <div>{character.gender.toLowerCase()}</div>
      </div>
      <div className={s.info}>
        {characterInfo.map((detail: DetailItemProps) => (
          <DetailItem title={detail.title} value={detail.value} />
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};
