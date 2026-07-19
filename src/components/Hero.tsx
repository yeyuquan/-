import { contact } from '../data/portfolio'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-image" src="/assets/projects/hero-stage.jpg" alt="舞台灯光现场" />
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/projects/hero-stage.jpg"
        onError={(event) => event.currentTarget.classList.add('is-unavailable')}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-scanlines" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content container">
        <p className="eyebrow hero-kicker"><span />STAGE LIGHTING DESIGNER / 2017 - ∞</p>
        <h1 id="hero-title">让光，<br /><em>成为现场的语言。</em></h1>
        <div className="hero-bottom">
          <p className="hero-copy">舞台灯光设计师<br />叶育铨 <span>/ YUQUAN YE</span></p>
          <a className="round-link" href={`mailto:${contact.email}`} aria-label="发送合作邮件">
            <span>CONTACT<br />ME</span><b>↗</b>
          </a>
        </div>
      </div>
      <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
    </section>
  )
}
