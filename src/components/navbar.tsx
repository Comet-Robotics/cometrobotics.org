const links: {name: string, href: string}[] = [
  {name: 'Home', href: '#'},
  {name: 'About', href: '#'},
  {name: 'Projects', href: '#'},
  {name: 'Contact', href: '#'},
]

function Navbar() {

    return (

        <div style={{
          position: 'fixed',
          width: '100%',
          top: '0',
          left: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 100,
          padding: '2rem 4rem',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.00) 100%)'
        }}>
          <img src="/wordmark.png" style={{
            width: '150px',
          }}/>
              <div id="nav" style={{ display: 'flex', gap: '2rem',alignItems: 'center', color: 'white'}}>
                
                {links.map((link) => (
                  <div ><a style={{
                    
                    color: 'white',
                  }} href={link.href
                  }>{link.name}</a></div>
                )
                )}
                <div style={{
                  backgroundColor: 'var(--primary)',
                  
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                }}><a style={{
                    
                  color: 'white',
                }} href="#">Join</a></div>
              </div>
            </div>

    )
  }
  
  export default Navbar
  