import { DetailItem } from "./DetailItem";
import s from "./styles.module.css";

export const CharacterDetails = ({ character }) => {
  return (
    <div className={s.character}>
      <div className={s.title}>
        <div className={s.name}>{character.name}</div>
        <div>{character.gender.toLowerCase()}</div>
      </div>
      <div className={s.info}>
        <DetailItem title="Height" value={character.height} />
        <DetailItem title="Mass" value={character.mass} />
        <DetailItem title="Skin color" value={character.skin_color} />
        <DetailItem title="Eye color" value={character.eye_color} />
        <DetailItem title="Hair color" value={character.hair_color} />
      </div>
    </div>
  );
};
