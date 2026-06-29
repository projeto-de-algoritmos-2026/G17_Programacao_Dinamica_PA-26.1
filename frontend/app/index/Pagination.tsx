import styles from "./Home.module.css";
import { DSIcon } from "../../components/DSIcon/DSIcon";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export function Pagination({ current, total, onChange }: PaginationProps) {
  function getPages(): (number | "...")[] {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 2) return [1, 2, 3, "...", total];
    if (current >= total - 1) return [1, "...", total - 2, total - 1, total];
    return [1, "...", current, "...", total];
  }

  return (
    <nav className={styles.pagination} aria-label="Paginação">
      <button
        className={styles.pageBtn}
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Página anterior"
      >
        <DSIcon name="chevron_left" />
      </button>

      {getPages().map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className={styles.pageEllipsis}>...</span>
        ) : (
          <button
            key={p}
            className={`${styles.pageBtn} ${p === current ? styles.pageBtnActive : ""}`}
            onClick={() => onChange(p as number)}
            aria-current={p === current ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        className={styles.pageBtn}
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Próxima página"
      >
        <DSIcon name="chevron_right" />
      </button>
    </nav>
  );
}