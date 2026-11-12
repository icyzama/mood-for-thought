import Link from "next/link";
import { DirectionArt } from "./direction-art";
import type { SampleDirection } from "./sample-directions";
import styles from "./directions.module.css";

export function DirectionCard({ direction }: { direction: SampleDirection }) {
  return (
    <article className={`${styles.card} ${styles[direction.theme]}`}>
      <DirectionArt lines={direction.headline} />
      <div className={styles.cardBody}>
        <span className={`sticker ${styles.mood}`}>{direction.mood}</span>
        <h2>{direction.title}</h2>
        <p className={styles.description}>{direction.description}</p>
        <Link
          href={`/create/directions/${direction.id}`}
          className={styles.explore}
          aria-label={`Explore ${direction.title}`}
        >
          Explore <span className="desktop-title">this </span>direction <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
