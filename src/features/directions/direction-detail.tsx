import { DirectionArt } from "./direction-art";
import { DirectionNotes } from "./direction-notes";
import type { SampleDirection } from "./sample-directions";
import styles from "./direction-detail.module.css";
import directionStyles from "./directions.module.css";

type Props = {
  direction: SampleDirection;
  position: number;
  total: number;
};

export function DirectionDetail({ direction, position, total }: Props) {
  return (
    <main className="paper">
      <div className={`${styles.content} ${directionStyles[direction.theme]}`}>
        <div className={styles.intro}>
          <span className={`sticker sticker-green ${styles.counter}`}>
            SAMPLE DIRECTION {String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <h1 className={styles.title}>
            <span className="desktop-title">{direction.title}</span>
            <span className="mobile-title">{direction.titleLines[0]} <span>{direction.titleLines[1]}</span></span>
          </h1>
          <p className={styles.subtitle}>
            <span className="desktop-title">{direction.subtitle}</span>
            <span className="mobile-title">{direction.mobileSubtitle}</span>
          </p>
          <button className={styles.save} type="button" disabled aria-label="Save project, coming soon">
            SAVE <span className="desktop-title">PROJECT </span><span>· SOON</span>
          </button>
        </div>

        <div className={styles.workspace}>
          <section className={`${styles.panel} ${styles.board}`} aria-labelledby="moodboard-heading">
            <h2 id="moodboard-heading" className={`sticker sticker-pink ${styles.panelLabel}`}>THE MOODBOARD</h2>
            <DirectionArt lines={direction.headline} className={styles.heroArt} />
            <div className={styles.palette}>
              <h3 className="desktop-title">{direction.paletteMood}</h3>
              <ul className={styles.swatches} aria-label="Color palette">
                {direction.palette.map(({ name, hex }) => (
                  <li key={hex} style={{ backgroundColor: hex }} title={`${name} ${hex.toUpperCase()}`}>
                    <span className="sr-only">{name}, {hex.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.typography}>
              <span aria-hidden="true">Aa</span>
              <div>
                <h3>{direction.typeTitle}</h3>
                <p>{direction.typeDescription}</p>
              </div>
            </div>
            <div className={styles.feeling}>
              <h3 className={styles.mono}>THE FEELING</h3>
              <p>
                <span className="desktop-title">{direction.feeling}</span>
                <span className="mobile-title">{direction.shortFeeling}</span>
              </p>
            </div>
          </section>
          <DirectionNotes key={direction.id} directionId={direction.id} guidance={direction.guidance} />
        </div>
      </div>
    </main>
  );
}
