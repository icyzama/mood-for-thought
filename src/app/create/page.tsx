"use client";

import { useState } from "react";

export default function Home() {
  const [brief, setBrief] = useState("");
  const [types, setTypes] = useState(["Branding"]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  function resetBrief() {
    setBrief("");
    setTypes(["Branding"]);
    setNotice("");
    setMenuOpen(false);
    document.getElementById("brief")?.focus();
  }

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-dot" aria-hidden="true" />MOOD FOR THOUGHT</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav id="navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <button type="button" onClick={() => { setNotice("Projects will be available when saving is ready."); setMenuOpen(false); }}>PROJECTS</button>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>HOW IT WORKS</a>
          <button className="new-button" type="button" onClick={resetBrief}>+ NEW</button>
        </nav>
      </header>
      <main id="top" className="paper">
        <div className="page-wrap">
          <section className="hero" aria-labelledby="hero-title">
            <span className="sticker sticker-green">START HERE</span>
            <h1 id="hero-title"><span className="desktop-title">EVERY BIG IDEA</span><span className="mobile-title">BIG IDEAS</span><br /><span className="highlight"><span className="desktop-title">STARTS MESSY.</span><span className="mobile-title">START MESSY.</span></span></h1>
            <span className="sticker sticker-pink hero-sticker">NO PERFECT PROMPT NEEDED</span>
            <p className="hero-copy desktop-title">Drop your rough idea. We’ll find its feeling, shape a direction, and gather the right references.</p>
            <p className="hero-copy mobile-title">Tell us what you’re making. A sentence or a brain dump both work.</p>
            <div className="dots" aria-hidden="true"><i /><i /><i /></div>
          </section>
          <div className="workspace">
            <section className="composer" aria-labelledby="brief-title">
              <span className="sticker composer-sticker"><span className="desktop-title">YOUR CREATIVE BRIEF</span><span className="mobile-title">YOUR BRIEF</span></span>
              <h2 id="brief-title"><span className="desktop-title">Tell us what you’re making</span><span className="mobile-title">What’s the idea?</span></h2>
              <p className="hint"><span className="desktop-title">A sentence or a brain dump both work.</span><span className="mobile-title">No perfect prompt needed.</span></p>
              <form onSubmit={(event) => { event.preventDefault(); setNotice("Your brief is ready. AI direction generation is coming next."); }}>
                <label className="sr-only" htmlFor="brief">Describe your creative idea</label>
                <textarea id="brief" required value={brief} onChange={(event) => { setBrief(event.target.value); setNotice(""); }} placeholder="I’m building a warm, modern brand for a neighborhood bakery. I want it to feel welcoming and handmade, but not too rustic." />
                <fieldset className="project-types"><legend>TYPE OF PROJECT</legend><div>{["Branding", "Packaging"].map((type) => <button key={type} type="button" className={types.includes(type) ? "type-button selected" : "type-button"} aria-pressed={types.includes(type)} onClick={() => setTypes((current) => current.includes(type) ? current.filter((item) => item !== type) : [...current, type])}>{type.toUpperCase()}</button>)}</div></fieldset>
                <div className="form-actions"><button className="submit-button" type="submit">FIND MY DIRECTION <span aria-hidden="true">↗</span></button></div>
              </form>
              {notice && <p className="notice" role="status">{notice}</p>}
            </section>
            <aside className="preview" id="how-it-works" aria-labelledby="preview-title">
              <span className="sticker sticker-pink preview-sticker">A LITTLE PREVIEW</span>
              <h2 id="preview-title">THE CREATIVE<br /><strong>SPARK</strong></h2>
              <p>Your brief becomes multiple ways forward. Pick one, remix it, make it yours.</p>
              <div className="swatches" aria-hidden="true"><i /><i /><i /><i /></div>
              <span className="preview-label">01 &nbsp;/&nbsp; IDEA TO DIRECTION</span>
            </aside>
          </div>
          <p className="footer-note">A CREATIVE SIDEKICK FOR WHEN THE BRIEF IS STILL A BLUR.</p>
          <span className="sticker mobile-bottom">IDEA TO DIRECTION &nbsp;/&nbsp; 01</span>
        </div>
      </main>
    </>
  );
}
