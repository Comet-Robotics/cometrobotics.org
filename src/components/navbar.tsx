import { Link as RouterLink } from "react-router-dom";

type LinkType = { name: string; href: string }
const HOME_LINK: LinkType = { name: "Home", href: "#" };
const links: LinkType[] = [
  HOME_LINK,
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        color: "var(--text)",
        padding: "2rem 4rem",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.00) 100%)",
      }}
    >
      <RouterLink to={HOME_LINK.href}>
        <img
          src="/wordmark.png"
          style={{
            width: "150px",
          }}
        />
      </RouterLink>
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <RouterLink key={`link-${link.name}`} to={link.href}>{link.name}</RouterLink>
        ))}

        <a
          style={{
            backgroundColor: "var(--primary)",
            padding: "0.5rem 1rem",
            color: 'white',
            borderRadius: "999px",
          }}
          href="https://discord.gg/dTGwav3PVM"
        >
          Join
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
