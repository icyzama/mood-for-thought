import type { Metadata } from "next";
import Link from "next/link";
import { DirectionCard } from "@/features/directions/direction-card";
import { DirectionsHeader } from "@/features/directions/directions-header";
import { sampleDirections } from "@/features/directions/sample-directions";
import styles from "@/features/directions/directions.module.css";

export const metadata: Metadata = { title: "Creative Directions | Mood for Thought" };

export default function CreativeDirectionsPage() {
  return (
    <>
      <DirectionsHeader />
      <main className="paper">
        <div className={styles.content}>
          <section className={styles.intro} aria-labelledby="directions-title">
            <span className={`sticker sticker-green ${styles.status}`}>SAMPLE DIRECTIONS</span>
            <span className={`sticker sticker-pink ${styles.project}`}>EXAMPLE: BAKERY BRAND</span>
            <h1 id="directions-title" className={styles.heading}>
              <span className="desktop-title">THREE WAYS TO</span>
              <span className="mobile-title">3 WAYS TO</span>
              {" "}
              <span className={styles.highlight}>MAKE IT FEEL.</span>
            </h1>
            <p className={styles.summary}>
              Explore three creative directions for a neighborhood bakery.
            </p>
          </section>
          <div className={styles.grid}>
            {sampleDirections.map((direction) => (
              <DirectionCard key={direction.id} direction={direction} />
            ))}
          </div>
          <Link className={styles.edit} href="/create">← EDIT YOUR BRIEF</Link>
        </div>
      </main>
    </>
  );
}
