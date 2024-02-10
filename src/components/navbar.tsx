import { Link } from "react-router-dom";

const links: { name: string; href: string }[] = [
  { name: "Home", href: "#" },
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
      <img
        src="/wordmark.png"
        style={{
          width: "150px",
        }}
      />
      <nav
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {links.map((link) => (
          <Link to={link.href}>{link.name}</Link>
        ))}

        <a
          style={{
            backgroundColor: "var(--primary)",
            padding: "0.5rem 1rem",
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
