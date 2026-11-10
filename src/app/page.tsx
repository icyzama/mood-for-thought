import Image from "next/image";
import Link from "next/link";

const steps = [
  { number: "01", title: "DUMP THE IDEA", description: "Tell us what you’re making. A sentence or a brain dump both work.", color: "green" },
  { number: "02", title: "FIND YOUR DIRECTION", description: "Explore three distinct creative directions shaped around your brief.", color: "yellow" },
  { number: "03", title: "MAKE IT YOURS", description: "Refine your favorite and collect references for your moodboard.", color: "pink" },
];

function StartButton({ children, yellow = false }: { children: React.ReactNode; yellow?: boolean }) {
  return <Link className={yellow ? "landing-button landing-button-yellow" : "landing-button"} href="/create">{children} <span aria-hidden="true">↗</span></Link>;
}

export default function Home() {
  return (
    <div className="landing" id="top">
      <header className="landing-nav">
        <Link className="landing-brand" href="/">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/logo-mobile.svg" />
            <Image src="/images/logo-desktop.svg" alt="" width={26} height={26} />
          </picture>
          MOOD FOR THOUGHT
        </Link>
        <nav className="landing-links" aria-label="Main navigation">
          <a href="#how-it-works">HOW IT WORKS</a>
          <span className="coming-soon">PROJECTS <span>COMING SOON</span></span>
          <StartButton yellow>START CREATING</StartButton>
        </nav>
        <details className="landing-menu">
          <summary aria-label="Open navigation">☰</summary>
          <nav aria-label="Mobile navigation"><a href="#how-it-works">HOW IT WORKS</a><span>PROJECTS — COMING SOON</span><StartButton yellow>START CREATING</StartButton></nav>
        </details>
      </header>
      <main className="landing-content">
        <section className="landing-hero" aria-labelledby="landing-title">
          <div className="landing-hero-copy">
            <span className="landing-sticker green">YOUR CREATIVE SIDEKICK</span>
            <h1 id="landing-title">GOOD IDEAS<br />START WITH A<br /><span>LITTLE MESS.</span></h1>
            <p>Turn a rough idea into a creative direction. Explore the mood, colors, and visual world behind your next brand.</p>
            <StartButton>LET’S FIND YOUR DIRECTION</StartButton>
            <small>NO ACCOUNT NEEDED TO EXPLORE</small>
          </div>
          <div className="landing-preview-wrap">
            <span className="landing-sticker pink prompt-sticker">NO PERFECT PROMPT NEEDED</span>
            <aside className="landing-preview" aria-label="Creative direction preview">
              <span className="landing-sticker pink preview-tag">A LITTLE PREVIEW</span>
              <h2>THE CREATIVE<br /><strong>SPARK</strong></h2>
              <p>From a brain dump to a brand world worth exploring.</p>
              <div className="landing-swatches" aria-hidden="true"><i /><i /><i /><i /></div>
              <small>01 &nbsp;/&nbsp; IDEA TO DIRECTION</small>
            </aside>
          </div>
        </section>
        <section className="landing-how" id="how-it-works" aria-labelledby="how-title">
          <span className="landing-sticker yellow">HOW IT WORKS</span>
          <h2 id="how-title">FROM MESSY TO MEANINGFUL.</h2>
          <p>A little structure for your next big idea.</p>
          <div className="landing-steps">
            {steps.map((step) => <article className="landing-step" key={step.number}>
              <span className={`landing-sticker ${step.color}`}>{step.number}</span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </article>)}
          </div>
        </section>
        <section className="landing-closing">
          <div><h2>READY WHEN YOU ARE.</h2><p>Your next idea doesn’t have to start perfect.</p></div>
          <StartButton yellow>START A NEW BRIEF</StartButton>
        </section>
      </main>
      <footer className="landing-footer">© 2026 icyzama. All rights reserved.</footer>
    </div>
  );
}
