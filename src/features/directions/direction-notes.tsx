"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import styles from "./direction-detail.module.css";

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readNote(key: string) {
  try {
    return window.sessionStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

export function DirectionNotes({ directionId, guidance }: { directionId: string; guidance: string }) {
  const storageKey = `mood-for-thought:refinement:${directionId}`;
  const savedNote = useSyncExternalStore(subscribeToStorage, () => readNote(storageKey), () => "");
  const [draft, setDraft] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("");
  const note = draft ?? savedNote;

  function saveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      window.sessionStorage.setItem(storageKey, note.trim());
      setStatus(note.trim() ? "Note saved for this tab." : "Note cleared.");
    } catch {
      setStatus("This browser couldn’t save your note.");
    }
  }

  return (
    <section className={`${styles.panel} ${styles.notes}`} aria-labelledby="design-notes-heading">
      <h2 id="design-notes-heading" className={`sticker ${styles.panelLabel}`}>DESIGN NOTES</h2>
      <button
        className={styles.notesToggle}
        type="button"
        aria-expanded={expanded}
        aria-controls="design-notes-content"
        onClick={() => setExpanded(!expanded)}
      >
        <span className={styles.mono}>MAKE IT YOURS</span>
        <span>Refine this direction <span aria-hidden="true">↗</span></span>
      </button>
      <div id="design-notes-content" className={styles.notesContent} data-expanded={expanded}>
        <h3>Why this works</h3>
        <p>{guidance}</p>
        <form className={styles.noteForm} onSubmit={saveNote}>
          <label className={styles.mono} htmlFor="refinement-note">MAKE IT YOURS</label>
          <textarea
            id="refinement-note"
            value={note}
            onChange={(event) => {
              setDraft(event.target.value);
              setStatus("");
            }}
            placeholder="Make it a little bolder, but keep the warmth."
            aria-describedby="refinement-note-help"
            maxLength={1000}
          />
          <button type="submit" className="submit-button">SAVE REFINEMENT NOTE <span aria-hidden="true">↗</span></button>
          <p id="refinement-note-help" className={styles.noteHelp}>Notes stay in this tab. AI refinement is coming soon.</p>
          <p className={styles.noteStatus} role="status">{status}</p>
        </form>
        <p className={styles.references}>NEXT: FIND FONTS, IMAGERY &amp; REAL REFERENCES THAT MATCH.</p>
      </div>
    </section>
  );
}
