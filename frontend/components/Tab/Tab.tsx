import DSIcon from "../DSIcon";
import styles from "./Tab.module.css";

interface TabProps {
  label: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Tab({ label, icon, active = false, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`${styles.tab} ${active ? styles.active : ""}`}
    >
      {icon && <DSIcon name={icon} size="sm" />}
      <p>{label}</p>
    </button>
  );
}