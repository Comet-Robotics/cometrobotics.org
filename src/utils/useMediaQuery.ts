import { useEffect, useState } from 'react'

function useMedia(query: string, defaultMatches = false) {
  const [matches, setMatches] = useState(defaultMatches)
  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)
    listener()
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])
  return matches
};

export default useMedia
