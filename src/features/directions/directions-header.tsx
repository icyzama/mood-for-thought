"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { emptyBrief, useBriefDraft } from "@/features/briefs/brief-draft";
import styles from "./directions.module.css";

export function DirectionsHeader({ showAllDirections = false }: { showAllDirections?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { setDraft } = useBriefDraft();

  function startNewBrief() {
    setDraft(emptyBrief);
    setMenuOpen(false);
    router.push("/create");
  }

  return (
    <header className="topbar">
      <Link className="brand" href="/">
        <span className="brand-dot" aria-hidden="true" /> MOOD FOR THOUGHT
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="directions-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav
        id="directions-navigation"
        className={menuOpen ? "nav nav-open" : "nav"}
        aria-label="Main navigation"
      >
        <span className={styles.projects}>PROJECTS <small>COMING SOON</small></span>
        <Link
          href={showAllDirections ? "/create/directions" : "/#how-it-works"}
          onClick={() => setMenuOpen(false)}
        >
          {showAllDirections ? "ALL DIRECTIONS" : "HOW IT WORKS"}
        </Link>
        <button type="button" className="new-button" onClick={startNewBrief}>+ NEW</button>
      </nav>
    </header>
  );
}
