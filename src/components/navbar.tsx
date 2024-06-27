import {useEffect, useRef} from 'react'
import { HOME_LINK, discordInvite, instagramURL, mainNavLinks } from '../data'
import useMedia from '../utils/useMediaQuery'

const menuBg = 'var(--text-dark)'
const gradBg = 'linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.00) 100%)'
const styles = `
  .menubar {
    background: ${gradBg};
  }
  
  .menubar:has(details[open]) {
    background: ${menuBg};
  }
  
  summary {
    list-style: none;
  }
  
  summary::-webkit-details-marker {
    display: none;
  }`
function Navbar() {
  const mobile = useMedia('(max-width: 800px)', true)
  const detailsRef = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    const listener = () => {
        if (!mobile || !detailsRef.current) {
          return;
        }
        detailsRef.current.open = false;
      }
    document.addEventListener('astro:page-load', listener);
    return () => {
      document.removeEventListener('astro:page-load', listener);
    }
  }, [detailsRef, mobile])
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--primary)',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <p>
          This site is currently in progress! Feel free to browse around, and
          check out our
          <a
            style={{ fontWeight: 700 }}
            href={discordInvite}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Discord
          </a>
          {' '}
          and
          <a
            style={{ fontWeight: 700 }}
            href={instagramURL}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Instagram
          </a>
          {' '}
          for club updates!
        </p>
      </div>
      <style dangerouslySetInnerHTML={{__html: styles}}/>
      <div
        className="menubar"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 4rem',
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
        {mobile
          ? (
            <details ref={detailsRef}>
              {/* TODO: hamburger icon */}
              <summary style={{ cursor: 'pointer' }}>Menu</summary>
              <NavLinks mobile={mobile} />
            </details>
            ) : (
              <NavLinks mobile={mobile} />
            )}
      </div>
    </div>

  )
}

function NavLinks(props: { mobile: boolean }) {
  const { mobile } = props
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        gap: '2rem',
        backgroundColor: mobile ? menuBg : 'transparent',
        position: mobile ? 'absolute' : 'inherit',
        top: mobile ? 200 : 'inherit',
        left: mobile ? 0 : 'inherit',
        zIndex: mobile ? 90 : 'inherit',
        width: mobile ? '100vw' : 'min-content',
        height: mobile ? 'calc(100vh - 200px)' : 'inherit',
        alignItems: 'center',
        fontFamily: '\'Mashine\', sans-serif',
      }}
    >
      {mainNavLinks.map(link => (
        <a key={`nav-${link.name}`} href={link.href}>
          {link.name}
        </a>
      ))}
      <a
        style={{
          backgroundColor: 'var(--primary)',
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          fontFamily: '\'Mashine\', sans-serif',
        }}
        href={discordInvite}
        target="_blank"
      >
        Join
      </a>
    </nav>
  )
}

export default Navbar