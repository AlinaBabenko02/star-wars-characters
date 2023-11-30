import s from "./styles.module.css";

interface DetailItemProps {
  title: string;
  value: string;
}

export const DetailItem: React.FC<DetailItemProps> = ({ title, value }) => (
  <div className={s.detail}>
    <div className={s.heading}>{title}:</div>
    <div>{value}</div>
  </div>
);
