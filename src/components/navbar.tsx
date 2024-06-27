---
import { HOME_LINK, discordInvite, mainNavLinks, instagramURL } from '../data'
---

<style>
  a:any-link {
    color: var(--text);
  }
</style>

<div transition:persist style={{ position: 'fixed', top: '0', left: '0', width: '100%',zIndex: 100, }}>
  
  <div
    style={{
      backgroundColor: 'var(--primary)',
      textAlign: 'center',
      padding: '1rem',
    }}
  >
    <p>This site is currently in progress! Feel free to browse around,
    and check out our <a style={{fontWeight:700}} href={discordInvite} target="_blank" rel="noreferrer"> Discord</a> and <a style={{fontWeight:700}} href={instagramURL} target="_blank" rel="noreferrer"> Instagram</a> for club updates!</p>
  </div>
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 4rem',
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.00) 100%)',
    }}
  >
    <a href={HOME_LINK.href}>
      <img
        src="/wordmark.png"
        style={{
          width: '150px',
        }}
      />
    </a>
    <nav
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        fontFamily: "'Mashine', sans-serif",
      }}
    >
      {mainNavLinks.map((link) => <a href={link.href}>{link.name}</a>)}
      <a
        style={{
          backgroundColor: 'var(--primary)',
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          fontFamily: "'Mashine', sans-serif",
        }}
        href={discordInvite}
        target="_blank"
      >
        Join
      </a>
    </nav>
  </div>
</div>
