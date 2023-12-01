import { ReactNode } from "react";
import s from "./styles.module.css";

interface NotificationProps {
  children: ReactNode;
}
export const Notification: React.FC<NotificationProps> = ({ children }) => (
  <div className={s.notification}>{children}</div>
);
