import { ArrowUpRight, BookOpen, Layers3, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Profile = {
  name: string;
  eyebrow: string;
  intro: string;
  avatarUrl: string;
  links: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
  signals: string[];
};

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type NoteItem = {
  name: string;
  type: string;
  detail: string;
  href?: string;
  accent: "green" | "amber" | "coral";
};

const profile: Profile = {
  name: "Dfan",
  eyebrow: "Personal Homepage / 2026",
  intro:
    "building...",
  avatarUrl: "https://github.com/Fan33oo.png",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Fan33oo",
      primary: true
    },
    {
      label: "查看笔记",
      href: "#notes"
    }
  ],
  signals: ["Available for building", "Remote first"]
};

const aboutParagraphs = [""];

const focusItems: CardItem[] = [
  {
    title: "（空）",
    description: "（空）",
    icon: Rocket
  },
  {
    title: "（空）",
    description: "（空）",
    icon: Layers3
  },
  {
    title: "（空）",
    description: "（空）",
    icon: BookOpen
  }
];

const notes: NoteItem[] = [
  {
    name: "",
    type: "",
    detail: "",
    accent: "green"
  },
  {
    name: "",
    type: "",
    detail: "",
    accent: "amber"
  },
  {
    name: "",
    type: "",
    detail: "",
    accent: "coral"
  }
];

const stack: string[] = [];
const roadmap: string[] = [];
const pythonSnippet = [
  'notes = ["build, ship, repeat"]',
  "print(notes[-1].title())"
].join("\n");

function getNoteClassName(note: NoteItem) {
  const isEmpty = !note.name && !note.type && !note.detail;
  return `note-card accent-${note.accent} ${isEmpty ? "note-card-empty" : ""}`;
}

export default function Home() {
  const hasHeroCopy =
    Boolean(profile.name || profile.eyebrow || profile.intro) ||
    profile.links.length > 0 ||
    profile.signals.length > 0;
  const hasAbout = aboutParagraphs.length > 0;
  const hasFocus = focusItems.length > 0;
  const hasNotes = notes.length > 0;
  const hasStack = stack.length > 0;
  const hasRoadmap = roadmap.length > 0;
  const hasNavigation = hasAbout || hasNotes || hasStack;

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="主导航">
        <a
          className="brand"
          href="#home"
          aria-label={profile.name ? `${profile.name} 首页` : "首页"}
        >
          <span className="brand-mark" aria-hidden="true">
            {profile.name.slice(0, 1).toUpperCase()}
          </span>
          {profile.name ? <span>{profile.name}</span> : null}
        </a>
        {hasNavigation ? (
          <nav className="nav-links" aria-label="页面导航">
            {hasAbout ? <a href="#about">简介</a> : null}
            {hasNotes ? <a href="#notes">笔记</a> : null}
            {hasStack ? <a href="#stack">技术栈</a> : null}
          </nav>
        ) : null}
      </header>

      <section
        className={`hero-section ${hasHeroCopy ? "" : "hero-section-empty"}`}
        id="home"
        aria-labelledby={profile.name ? "hero-title" : undefined}
      >
        {hasHeroCopy ? (
          <div className="hero-copy">
            {profile.eyebrow ? <p className="eyebrow">{profile.eyebrow}</p> : null}
            {profile.name ? <h1 id="hero-title">{profile.name}</h1> : null}
            {profile.intro ? <p className="hero-lead">{profile.intro}</p> : null}
            {profile.links.length > 0 ? (
              <div className="hero-actions" aria-label="快捷操作">
                {profile.links.map((link) => (
                  <a
                    className={`action-button ${link.primary ? "primary" : ""}`}
                    href={link.href}
                    key={`${link.label}-${link.href}`}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span>{link.label}</span>
                    {link.href.startsWith("http") ? (
                      <ArrowUpRight aria-hidden="true" size={16} />
                    ) : null}
                  </a>
                ))}
              </div>
            ) : null}
            {profile.signals.length > 0 ? (
              <div className="signal-strip" aria-label="当前状态">
                {profile.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="hero-visual" aria-label="视觉名片">
          <div className={`identity-stage ${profile.avatarUrl ? "" : "empty-stage"}`}>
            <div className="scan-grid" aria-hidden="true" />
            <div className="orbit-ring ring-one" aria-hidden="true" />
            <div className="orbit-ring ring-two" aria-hidden="true" />
            {profile.avatarUrl ? (
              <img
                className="avatar"
                src={profile.avatarUrl}
                alt={profile.name ? `${profile.name} avatar` : "Avatar"}
                width="220"
                height="220"
              />
            ) : (
              <div className="avatar-placeholder" aria-hidden="true" />
            )}
          </div>
          <div className="console-panel" aria-label="Python 代码片段">
            <div className="console-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>{pythonSnippet}</code>
            </pre>
          </div>
        </div>
      </section>

      {hasAbout ? (
        <section className="section intro-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>简介</h2>
          </div>
          <div className="intro-copy">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={paragraph || `empty-about-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      ) : null}

      {hasFocus ? (
        <section className="section cards-section">
          {focusItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="focus-card" key={item.title}>
                <Icon aria-hidden="true" size={24} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </section>
      ) : null}

      {hasNotes ? (
        <section className="section notes-section" id="notes">
          <div className="section-heading">
            <p className="section-kicker">Notes</p>
            <h2>笔记</h2>
          </div>
          <div className="note-list">
            {notes.map((note) => {
              const content = (
                <>
                  <div>
                    {note.type ? <p className="note-type">{note.type}</p> : null}
                    {note.name ? <h3>{note.name}</h3> : null}
                    {note.detail ? <p>{note.detail}</p> : null}
                  </div>
                  {note.href ? <ArrowUpRight aria-hidden="true" size={20} /> : null}
                </>
              );

              return note.href ? (
                <a
                  className={getNoteClassName(note)}
                  href={note.href}
                  key={note.name}
                  target={note.href.startsWith("http") ? "_blank" : undefined}
                  rel={note.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <article
                  className={getNoteClassName(note)}
                  key={note.name}
                >
                  {content}
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {hasStack ? (
        <section className="section stack-section" id="stack">
          <div className="section-heading">
            <p className="section-kicker">Stack</p>
            <h2>技术栈</h2>
          </div>
          <div className="stack-grid">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      ) : null}

      {hasRoadmap ? (
        <section className="section timeline-section">
          <div className="section-heading">
            <p className="section-kicker">Roadmap</p>
            <h2>下一步</h2>
          </div>
          <div className="timeline">
            {roadmap.map((item) => (
              <div key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
