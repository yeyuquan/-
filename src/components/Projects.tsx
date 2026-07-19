import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head section-head-wide">
          <p className="eyebrow"><span />02 / SELECTED WORKS</p>
          <div><h2 id="projects-title">案例</h2><p>从一束光开始，完成一场现场的叙事。</p></div>
          <span className="project-count">06 / 06</span>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.title}>
              <img src={project.image} alt={`${project.title}舞台现场`} />
              <div className="project-shade" />
              <div className="project-meta"><span>{project.year}</span><span>0{index + 1}</span></div>
              <div className="project-info">
                <p>{project.tone}</p>
                <h3>{project.title}</h3>
                <span>{project.role}<b>↗</b></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
