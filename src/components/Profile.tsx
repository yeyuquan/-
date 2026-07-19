import { contact } from '../data/portfolio'

const facts = [
  ['2017', '进入灯光技术领域'],
  ['2025-2026', '项目经历'],
  ['04', '核心系统能力'],
]

export function Profile() {
  return (
    <section className="section profile" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span />01 / ABOUT</p>
          <p className="section-index">PERSONAL<br />PROFILE</p>
        </div>
        <div className="profile-layout">
          <div className="portrait-frame">
            <img src="/assets/projects/portrait.webp" alt="舞台灯光设计师叶育铨" />
            <span className="portrait-marker">YQ<br />26</span>
          </div>
          <div className="profile-content">
            <h2 id="about-title">叶育铨<span>YUQUAN YE</span></h2>
            <p className="profile-lead">舞台灯光设计师，以空间、节奏与色彩塑造现场的情绪张力。</p>
            <p className="profile-text">从音乐节、时尚盛典到大型晚会，我专注把技术系统转化为可感知的现场体验。在预演、控台与执行之间，始终为每一次亮灯保留准确的判断与克制的表达。</p>
            <div className="profile-contact">
              <a href={`tel:${contact.phone}`}>T&nbsp;&nbsp;{contact.phone}</a>
              <a href={`mailto:${contact.email}`}>E&nbsp;&nbsp;{contact.email}</a>
            </div>
          </div>
        </div>
        <div className="facts" aria-label="个人数据">
          {facts.map(([value, label]) => (
            <div className="fact" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
          <div className="fact fact-systems"><strong>MA2 · TIGER · BEYOND · MADRIX</strong><span>熟悉的灯光与控制系统</span></div>
        </div>
      </div>
    </section>
  )
}
