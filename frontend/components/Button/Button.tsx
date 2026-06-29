import type { ReactNode } from "react";
import DSIcon from "../DSIcon";
import styles from "./Button.module.css";

type Shape = "default" | "circle";
type Hierarchy = "primary" | "secondary" | "tertiary";
type Color = "main" | "alt";

interface ButtonProps {
  icon?: string;
  shape?: Shape;
  label?: string;
  hierarchy?: Hierarchy;
  color?: Color;
  onClick?: () => void;
}

export default function Button({
  label,
  icon,
  shape = "default",
  onClick,
  hierarchy = "primary",
  color = "main",
}: ButtonProps) {
  return (
    <button
        type="button"
        onClick={onClick}
        className={`${styles[shape]} ${styles[hierarchy]} ${hierarchy === "primary" && styles[color]}`}
    >
        {icon && <DSIcon name={icon} />}
        {shape != "circle" && label}
    </button>
  );
}