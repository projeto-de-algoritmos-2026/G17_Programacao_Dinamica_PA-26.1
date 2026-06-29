import styles from "./Badge.module.css";

type Shape = "default" | "status";
type Color = "success" | "warning" | "error";
type Status = "Enviado" | "Aguardando envio";

const STATUS_COLOR: Record<Status, Color> = {
  Enviado: "success",
  "Aguardando envio": "warning",
};

type BadgeProps =
  | { shape: "status"; label?: Status; color?: never }
  | { shape?: "default"; label?: string; color?: Color };

export default function Badge(props: BadgeProps) {
  if (props.shape === "status") {
    const { label } = props;
    const color = label ? STATUS_COLOR[label] : undefined;

    return (
      <div className={`${styles.Badge} ${styles[props.shape]}`}>
      <div className={`${styles.CircleBadge} ${color ? styles[color] : ""}`} />
        {label && <small className="extra">{label}</small>}
      </div>
    );
  }

  const { shape = "default", label, color } = props;

  return (
    <div className={styles[shape]}>
      <small className="styles.Badge">{label}</small>
    </div>
  );
}