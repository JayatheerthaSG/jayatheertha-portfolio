import { useEffect, useState } from "react";
import NodeMap from "./components/NodeMap";
import Architecture from "./components/Architecture";
import SectionHeading from "./components/SectionHeading";
import { portfolio } from "./data/portfolio";
import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>JSG</span><i />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["01", "PROFILE"],
            ["02", "EXPERIENCE"],
            ["03", "PROJECTS"],
            ["04", "SKILLS"],
            ["05", "EDUCATION"],
            ["06", "CONTACT"]
          ].map(([n, label]) => (
            <a key={label} href={`#${label.toLowerCase()}`} onClick={closeMenu}>
              <span>{n}</span>{label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <div className="status"><span /> AVAILABLE FOR ENGINEERING OPPORTUNITIES</div>
            <p className="hero-overline">ENGINEERING INTELLIGENCE / 2026</p>
            <h1>Jayatheertha<br /><em>S G</em></h1>
            <p className="hero-role">{portfolio.role}</p>
            <p className="hero-summary">{portfolio.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="button ghost" href="/resume/Jayatheertha_SG_Resume.pdf" download>Download resume <span>↓</span></a>
            </div>
          </div>

          <div className="hero-map-wrap">
            <div className="map-caption">INTERACTIVE SYSTEM MAP <span>01—05</span></div>
            <NodeMap />
          </div>

          <div className="hero-footer">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>DATA → SYSTEMS → AUTOMATION → INTELLIGENCE</span>
          </div>
        </section>

        <section className="section-pad profile" id="profile">
          <SectionHeading index="01" eyebrow="PROFILE" title="What I build" text="A cross-disciplinary engineering profile connecting software, data, AI and automation." />
          <div className="build-grid">
            {[
              ["01", "SOFTWARE", "Java · Spring Boot · Hibernate · REST APIs", "From application logic to backend systems."],
              ["02", "DATA", "SQL · Power BI · MySQL · Analysis", "Turning operational data into useful decisions."],
              ["03", "AI / ML", "Python · YOLOv10 · MobileNetV2 · TensorFlow", "Building vision systems around real-world inputs."],
              ["04", "AUTOMATION", "Linux · Ansible · Jenkins · Git", "Reducing repetitive infrastructure work through automation."]
            ].map(([num, title, stack, desc]) => (
              <article className="build-card" key={title}>
                <span className="card-num">{num}</span>
                <h3>{title}</h3>
                <p className="stack">{stack}</p>
                <p>{desc}</p>
                <span className="corner-mark">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad experience" id="experience">
          <SectionHeading index="02" eyebrow="EXPERIENCE" title="Career in motion" text="A timeline of hands-on work across analytics and infrastructure automation." />
          <div className="timeline">
            {portfolio.experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-main">
                  <div className="timeline-meta"><span>{item.dates}</span><span>{item.location}</span></div>
                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                  <div className="tag-row">{item.stack.map(s => <span key={s}>{s}</span>)}</div>
                  <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad projects" id="projects">
          <SectionHeading index="03" eyebrow="PROJECT LABORATORY" title="Systems I've built" text="Projects presented as engineering stories — not just technology lists." />
          <div className="project-list">
            {portfolio.projects.map((project) => (
              <article className={`project-row ${project.id === "elephant" ? "featured" : ""}`} key={project.id}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-topline"><span>{project.subtitle}</span><span>CASE STUDY</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
                </div>
                <button className="project-open" onClick={() => setSelectedProject(project)} aria-label={`Open ${project.title}`}>
                  VIEW <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad skills" id="skills">
          <SectionHeading index="04" eyebrow="TECHNOLOGY CONSTELLATION" title="Tools I work with" />
          <div className="skills-grid">
            {portfolio.skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-kicker">{group.title}</span>
                <div className="skill-cloud">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad education" id="education">
          <SectionHeading index="05" eyebrow="EDUCATION & LEARNING" title="Foundation + continuous learning" />
          <div className="edu-grid">
            <div>
              {portfolio.education.map((edu) => (
                <article className="edu-card" key={edu.degree}>
                  <span className="edu-date">{edu.dates}</span>
                  <h3>{edu.degree}</h3>
                  <p>{edu.field}</p>
                  <strong>{edu.institution}</strong>
                  <small>{edu.detail}</small>
                </article>
              ))}
            </div>
            <div className="learning-panel">
              <div className="eyebrow">PROOF OF LEARNING</div>
              <h3>Curiosity, made tangible.</h3>
              <ul>{portfolio.learning.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section-pad contact" id="contact">
          <div className="contact-inner">
            <div className="eyebrow">06 / CONTACT</div>
            <h2>Let's build<br /><em>something useful.</em></h2>
            <p>Open to opportunities where software, data and engineering can solve meaningful problems.</p>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${portfolio.email}`}>Email me <span>↗</span></a>
              <a className="button ghost" href={portfolio.social.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a className="button ghost" href={portfolio.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} JAYATHEERTHA S G</span>
        <span>BUILT AS AN ENGINEERING PRODUCT</span>
        <span>{portfolio.email}</span>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>CLOSE ×</button>
            <div className="eyebrow">CASE STUDY / {selectedProject.number}</div>
            <h2>{selectedProject.title}</h2>
            <p className="modal-lead">{selectedProject.description}</p>
            {selectedProject.architecture && <Architecture steps={selectedProject.architecture} />}
            <div className="modal-columns">
              <div><span className="skill-kicker">TECHNOLOGY</span><div className="tag-row">{selectedProject.stack.map(s => <span key={s}>{s}</span>)}</div></div>
              <div><span className="skill-kicker">IMPLEMENTATION</span><ul>{selectedProject.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;