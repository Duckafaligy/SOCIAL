import { links, profile } from "@/profile";
import { Arrow, Icon } from "./icons";

export default function Home() {
  return (
    <main className="page">
      <header className="intro">
        <div className="avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
      </header>

      <ul className="links">
        {links.map((link, i) => {
          const external = link.href.startsWith("http");
          return (
            <li key={link.kind} style={{ "--i": i } as React.CSSProperties}>
              <a
                href={link.href}
                className="link"
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className="icon">
                  <Icon kind={link.kind} />
                </span>
                <span className="text">
                  <span className="label">{link.label}</span>
                  <span className="display">{link.display}</span>
                </span>
                <span className="arrow">
                  <Arrow />
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}
