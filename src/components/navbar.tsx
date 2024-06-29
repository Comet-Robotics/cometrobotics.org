import { Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useRef } from 'react'
import { HOME_LINK, discordInvite, mainNavLinks } from '../data'
import useMedia from '../utils/useMediaQuery'

const menuBg = 'var(--text-dark)'
const gradBg = 'linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.00) 100%)'
const styles = `
  .nav-links > a:any-link {
    color: var(--text);
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.3)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.4));
  }
  
  .menubar {
    background: ${gradBg};
  }
  
  .menubar:has(details[open]) {
    background: ${menuBg};
  }
  
  .menubar > details > summary > svg {
    width: 32px;
    height: 32px;
  }
  
  .menubar > details > summary {
    list-style: none;
  }
  
  .menubar > details > summary::-webkit-details-marker {
    display: none;
  }`
function Navbar() {
  const mobile = useMedia('(max-width: 900px)', true)
  const detailsRef = useRef<HTMLDetailsElement>(null)

  // this effect handles closing the navbar overlay when switching between pages
  useEffect(() => {
    const listener = () => {
      if (!mobile || !detailsRef.current) {
        return
      }
      detailsRef.current.open = false
    }
    document.addEventListener('astro:page-load', listener)
    return () => {
      document.removeEventListener('astro:page-load', listener)
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
        <a href={HOME_LINK.href} className="no-decoration">
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
                <summary style={{ cursor: 'pointer' }}>
                  <Bars3Icon />
                </summary>
                <NavLinks mobile={mobile} />
              </details>
            )
          : (
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
      className="nav-links"
      style={{
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        gap: '2rem',
        backgroundColor: mobile ? menuBg : 'transparent',
        position: mobile ? 'absolute' : 'inherit',
        top: mobile ? 100 : 'inherit',
        left: mobile ? 0 : 'inherit',
        zIndex: mobile ? 90 : 'inherit',
        width: mobile ? '100vw' : 'min-content',
        height: mobile ? 'calc(100vh - 100px)' : 'inherit',
        alignItems: 'center',
        fontFamily: '\'Mashine\', sans-serif',
      }}
    >
      {mainNavLinks.map(link => (
        <a className="no-decoration" key={`nav-${link.name}`} href={link.href}>
          {link.name}
        </a>
      ))}
      <a
        className="no-decoration"
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
