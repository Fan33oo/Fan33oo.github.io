import { ArrowUpRight, BookOpen, Layers3, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import TypingCode from "./TypingCode";

type Profile = {
  name: string;
  eyebrow: string;
  intro: string;
  avatarUrl: string;
  links: Array<{
    label: string;
    href: string;
    primary?: boolean;
    icon?: "github";
  }>;
  signals: string[];
};

type CardItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type NoteItem = {
  id: string;
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
      primary: true,
      icon: "github"
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
    id: "focus-1",
    title: "（空）",
    description: "（空）",
    icon: Rocket
  },
  {
    id: "focus-2",
    title: "（空）",
    description: "（空）",
    icon: Layers3
  },
  {
    id: "focus-3",
    title: "（空）",
    description: "（空）",
    icon: BookOpen
  }
];

const notes: NoteItem[] = [
  {
    id: "note-1",
    name: "",
    type: "",
    detail: "",
    accent: "green"
  },
  {
    id: "note-2",
    name: "",
    type: "",
    detail: "",
    accent: "amber"
  },
  {
    id: "note-3",
    name: "",
    type: "",
    detail: "",
    accent: "coral"
  }
];

const stack: string[] = [];
const roadmap: string[] = [];

function getNoteClassName(note: NoteItem) {
  const isEmpty = !note.name && !note.type && !note.detail;
  return `note-card accent-${note.accent} ${isEmpty ? "note-card-empty" : ""}`;
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      focusable="false"
    >
      <path d="M12 0C5.37 0 0 5.5 0 12.28c0 5.43 3.44 10.03 8.2 11.66.6.11.82-.27.82-.59 0-.29-.01-1.06-.02-2.08-3.34.74-4.04-1.65-4.04-1.65-.55-1.42-1.34-1.8-1.34-1.8-1.09-.76.08-.74.08-.74 1.2.09 1.84 1.27 1.84 1.27 1.07 1.88 2.81 1.34 3.5 1.02.11-.79.42-1.34.76-1.65-2.66-.31-5.46-1.36-5.46-6.07 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26A11.2 11.2 0 0 1 12 5.94c1.02.01 2.05.14 3.01.42 2.28-1.59 3.29-1.26 3.29-1.26.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.72-2.8 5.76-5.48 6.06.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.71.83.59A12.29 12.29 0 0 0 24 12.28C24 5.5 18.63 0 12 0Z" />
    </svg>
  );
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
                    {link.icon === "github" ? <GithubIcon /> : null}
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
              <TypingCode />
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
              <article className="focus-card" key={item.id}>
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
                  key={note.id}
                  target={note.href.startsWith("http") ? "_blank" : undefined}
                  rel={note.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <article
                  className={getNoteClassName(note)}
                  key={note.id}
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
