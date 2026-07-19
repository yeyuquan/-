import { strengths } from '../data/portfolio'

export function Strengths() {
  return (
    <section className="section strengths" id="strengths" aria-labelledby="strengths-title">
      <div className="container">
        <div className="section-head section-head-wide">
          <p className="eyebrow"><span />03 / CAPABILITIES</p>
          <div><h2 id="strengths-title">让复杂，<br />变得有序。</h2></div>
          <p className="strengths-intro">设计不是堆叠效果。<br />每一个技术选择，都服务于现场感受。</p>
        </div>
        <div className="strength-grid">
          {strengths.map((strength) => (
            <article className="strength-card" key={strength.number}>
              <div className="strength-top"><span>{strength.number}</span><i /></div>
              <div className="strength-image"><img src={strength.image} alt={strength.imageAlt} /></div>
              <div className="strength-content"><p className="strength-english">{strength.english}</p><h3>{strength.title}</h3></div>
              <p className="strength-description">{strength.description}</p>
              <div className="strength-tags">{strength.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
