"use client";

import { Fragment, useRef } from "react";
import type { SampleDirection } from "./sample-directions";
import styles from "./directions.module.css";

export function DirectionCard({ direction }: { direction: SampleDirection }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `${direction.id}-title`;

  return (
    <article className={`${styles.card} ${styles[direction.theme]}`}>
      <div className={styles.art} aria-hidden="true">
        <p>
          {direction.headline.map((line, index) => (
            <Fragment key={line}>{index > 0 && <br />}{line}</Fragment>
          ))}
        </p>
      </div>
      <div className={styles.cardBody}>
        <span className={`sticker ${styles.mood}`}>{direction.mood}</span>
        <h2>{direction.title}</h2>
        <p className={styles.description}>{direction.description}</p>
        <button
          type="button"
          className={styles.explore}
          aria-haspopup="dialog"
          aria-label={`Explore ${direction.title}`}
          onClick={() => dialog.current?.showModal()}
        >
          Explore <span className="desktop-title">this </span>direction <span aria-hidden="true">↗</span>
        </button>
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId}>
        <span className={`sticker ${styles.mood}`}>{direction.mood}</span>
        <h2 id={titleId}>{direction.title}</h2>
        <p>{direction.guidance}</p>
        <form method="dialog">
          <button type="submit" className="submit-button">Back to directions</button>
        </form>
      </dialog>
    </article>
  );
}
