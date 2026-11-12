import { Fragment } from "react";
import styles from "./directions.module.css";

export function DirectionArt({ lines, className }: { lines: readonly string[]; className?: string }) {
  return (
    <div className={className ? `${styles.art} ${className}` : styles.art} aria-hidden="true">
      <p>
        {lines.map((line, index) => (
          <Fragment key={line}>{index > 0 && <br />}{line}</Fragment>
        ))}
      </p>
    </div>
  );
}
