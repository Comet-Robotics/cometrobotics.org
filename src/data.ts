// TODO: consider migrating these constants into keystatic so they can easily be managed by non-developers

import GitHubIcon from './assets/socials/github.png'
import InstagramIcon from './assets/socials/instagram.png'
import LinkedInIcon from './assets/socials/linkedin.png'
import YouTubeIcon from './assets/socials/youtube.png'
import AltiumLogo from './assets/sponsors/altium.png'
import BetterCNCLogo from './assets/sponsors/bettercnc.png'
import ElegooLogo from './assets/sponsors/elegoo.png'
import GHFLogo from './assets/sponsors/genehaas.png'
import IgusLogo from './assets/sponsors/igus.png'
import PolymakerLogo from './assets/sponsors/polymaker.png'
import RepeatRoboticsLogo from './assets/sponsors/repeat-robotics.png'
import SolidworksLogo from './assets/sponsors/solidworks.png'
import SurfacePrepLogo from './assets/sponsors/surfaceprep.png'

interface LinkType {
  name: string
  href: string
}
type LinkWithIconType = LinkType & { icon: ImageMetadata }
const HOME_LINK: LinkType = { name: 'Home', href: '/' }

const mainNavLinks: LinkType[] = [
  HOME_LINK,
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/links' },
]

const instagramURL = 'https://www.instagram.com/comet_robotics_utd/'

const socialLinks: LinkWithIconType[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Comet-Robotics',
    icon: GitHubIcon,
  },
  { name: 'Instagram', href: instagramURL, icon: InstagramIcon },
  // { name: "Facebook", href: 'https://www.facebook.com/utdcombatrobotics', icon: '/socials/facebook.png' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/comet-robotics-utd/',
    icon: LinkedInIcon,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@CometRoboticsUTD',
    icon: YouTubeIcon,
  },
]

const sponsorLinks: LinkWithIconType[] = [
  {
    name: 'SolidWorks',
    href: 'https://www.solidworks.com/',
    icon: SolidworksLogo,
  },
  {
    name: 'BetterCNC',
    href: 'https://www.bettercnc.com/',
    icon: BetterCNCLogo,
  },
  {
    name: 'Repeat Robotics',
    href: 'https://www.repeat-robotics.com/',
    icon: RepeatRoboticsLogo,
  },
  {
    name: 'Gene Haas Foundation',
    href: 'https://www.ghaasfoundation.org',
    icon: GHFLogo,
  },
  {
    name: 'Igus',
    href: 'https://www.igus.com',
    icon: IgusLogo,
  },
  {
    name: 'Polymaker',
    href: 'https://www.polymaker.com',
    icon: PolymakerLogo,
  },
  {
    name: 'Elegoo',
    href: 'https://www.elegoo.com',
    icon: ElegooLogo,
  },
  {
    name: 'Altium',
    href: 'https://www.altium.com',
    icon: AltiumLogo,
  },
  {
    name: 'SurfacePrep',
    href: 'https://www.surfaceprep.com',
    icon: SurfacePrepLogo,
  },
]

interface Person {
  name: string
  role: string
}

const leadership: Record<string, Person[]> = {
  'General Officers': [
    {
      name: 'Colin Wong',
      role: 'President',
    },
    {
      name: 'Nathan Wignall',
      role: 'Vice President',
    },
    {
      name: 'CJ Terrell',
      role: 'Director of Marketing',
    },
    {
      name: 'Joshua Hernandez',
      role: 'Director of Finance',
    },
    {
      name: 'Riya Dhuri',
      role: 'Director of Outreach',
    },
    {
      name: 'VACANT',
      role: 'Director of Events',
    },
  ],
  'Project Officers': [
    {
      name: 'Diego Zaragoza',
      role: 'Director of Combat Robotics',
    },
    {
      name: 'VACANT',
      role: 'Director of Combat Robotics',
    },
    {
      name: 'Surjaditya Sarkar',
      role: 'Director of Competitive Robotics',
    },
    {
      name: 'Peder Johnson',
      role: 'Director of Competitive Robotics',
    },
    {
      name: 'Lucas Igl',
      role: 'Director of Corporate Robotics',
    },
  ],
  'Project Managers': [
    {
      name: 'David Dale',
      role: 'SumoBots',
    },
    {
      name: 'Jakob Aleman',
      role: 'Solis Rover Project',
    },
    {
      name: 'Jess Huffine',
      role: 'VEX U',
    },
    {
      name: 'Tommy Reitz',
      role: 'ChessBots',
    },
  ],
}

const clubEmail = 'cometrobotics@utdallas.edu'
const discordInvite = 'https://discord.gg/dTGwav3PVM'

const makerspaceMap = 'https://g.page/utdesign-makerspace?share'
const websiteRepo = 'https://github.com/Comet-Robotics/cometrobotics.org'
const constitutionPublicLink
  = 'https://docs.google.com/document/d/e/2PACX-1vTnugaSTI1ftvgj72tR-4c3_JOzP_SK8mW1a-gr2stc27UVFPIi82_uNJ31FEJyQnBIS_CgcaQpyRDh/pub'
const codeOfConductLink = 'https://docs.google.com/document/d/e/2PACX-1vSVK-LMaXAeaiDAj1h3ikxQ9BKTOwbAsus4sPU_DHbWtYwNI7_PmEe4L4jXoRNeRXJBFlK3yKzLBQ6f/pub'
const nonprofitEIN = '93-3183820'

const footerLinks: LinkType[] = [
  {
    name: 'Discord',
    href: discordInvite,
  },
  {
    name: 'Wiki',
    href: 'https://wiki.cometrobotics.org',
  },
  {
    name: 'Source Code',
    href: websiteRepo,
  },
  {
    name: 'Sponsorship',
    href: '/sponsor',
  },
  {
    name: 'Constitution',
    href: constitutionPublicLink,
  },
  {
    name: 'Code of Conduct',
    href: codeOfConductLink,
  },
]

const linksPageLinks: LinkType[] = [
  {
    name: 'Discord',
    href: discordInvite,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/comet_robotics_utd/',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/comet-robotics-utd/',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@CometRoboticsUTD',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Comet-Robotics/',
  },
]

const competitiveTeams = [
  {
    name: 'ChessBots',
    href: '#',
    image:
      '/projects/chessbots/chessplaza.jpg',
  },
  {
    name: 'Solis Rover Project',
    href: '#',
    image:
      '/projects/srp/laprincesa.jpg',
  },
  {
    name: 'VEX U',
    href: '/projects/vex',
    image: '/projects/vex/cover.png',
  },
]

const combatTeams = [
  {
    name: '1lb Plastic Antweights',
    href: '#',
    image: '/projects/plants/nhrl_oct26_assembly.JPG',
  },
  {
    name: 'Full Combat',
    href: '#',
    image: '/projects/fullcombat/nhrl_apr25_sparks.jpg',
  },
  {
    name: 'SumoBots',
    href: '#',
    image:
      '/projects/sumo/kickoff_s26_sumocloseup.jpeg',
  },
  {
    name: 'Blender',
    href: '#',
    image:
      '/projects/blender/mainImage/src.webp',
  },
]

export {
  clubEmail,
  combatTeams,
  competitiveTeams,
  constitutionPublicLink,
  discordInvite,
  footerLinks,
  HOME_LINK,
  instagramURL,
  leadership,
  linksPageLinks,
  mainNavLinks,
  makerspaceMap,
  nonprofitEIN,
  socialLinks,
  sponsorLinks,
  websiteRepo,
}
