// TODO: consider migrating these constants into keystatic so they can easily be managed by non-developers

import GitHubIcon from './assets/socials/github.png'
import InstagramIcon from './assets/socials/instagram.png'
import LinkedInIcon from './assets/socials/linkedin.png'
import YouTubeIcon from './assets/socials/youtube.png'
import BetterCNCLogo from './assets/sponsors/bettercnc.png'
import ElegooLogo from './assets/sponsors/elegoo.png'

import IgusLogo from './assets/sponsors/igus.png'
import PolymakerLogo from './assets/sponsors/polymaker.png'
import RepeatRoboticsLogo from './assets/sponsors/repeat-robotics.png'
import SolidworksLogo from './assets/sponsors/solidworks.png'

interface LinkType { name: string, href: string }
type LinkWithIconType = LinkType & { icon: ImageMetadata }
const HOME_LINK: LinkType = { name: 'Home', href: '/' }

const mainNavLinks: LinkType[] = [
  HOME_LINK,
  { name: 'About', href: '/about' },
  // { name: "Projects", href: "/projects" },
  { name: 'Contact', href: '/links' },
]

const instagramURL = 'https://www.instagram.com/comet_robotics_utd/'

const socialLinks: LinkWithIconType[] = [
  { name: 'GitHub', href: 'https://github.com/Comet-Robotics', icon: GitHubIcon },
  { name: 'Instagram', href: instagramURL, icon: InstagramIcon },
  // { name: "Facebook", href: 'https://www.facebook.com/utdcombatrobotics', icon: '/socials/facebook.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/comet-robotics-utd/', icon: LinkedInIcon },
  { name: 'YouTube', href: 'https://www.youtube.com/@CometRoboticsUTD', icon: YouTubeIcon },
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
]

interface Person {
  name: string
  role: string
}

const leadership: Record<string, Person[]> = {
  'General Officers': [
    {
      name: 'Om Davra',
      role: 'President',
    },
    {
      name: 'Colin Wong',
      role: 'Vice President',
    },
    {
      name: 'Tian Wang',
      role: 'Director of Marketing',
    },
    {
      name: 'Nathan Wignall',
      role: 'Director of Events',
    },
    {
      name: 'Jason Antwi-Appah',
      role: 'Director of Finance',
    },
    {
      name: 'Ana Wise',
      role: 'Director of Outreach',
    },
  ],
  'Project Officers': [
    {
      name: 'Deklen Nates',
      role: 'Director of Combat Robotics',
    },
    {
      name: 'Neil Blatzheim',
      role: 'Director of Combat Robotics',
    },
    {
      name: 'Lucas Igl',
      role: 'Director of Competitive Robotics',
    },
    {
      name: 'Mudit Upadhyay',
      role: 'Director of Competitive Robotics',
    },
  ],
  'Project Managers': [
    {
      name: 'David Dale',
      role: 'SumoBots',
    },
    {
      name: 'Pablo Strickland Jaramillo',
      role: 'Solis Rover Project',
    },
    {
      name: 'Jess Huffine',
      role: 'VEX U',
    },
    {
      name: 'Dylan Brose',
      role: 'ChessBots',
    },
  ],
}

const clubEmail = 'cometrobotics@utdallas.edu'
const discordInvite = 'https://discord.gg/dTGwav3PVM'

const makerspaceMap = 'https://g.page/utdesign-makerspace?share'
const websiteRepo = 'https://github.com/Comet-Robotics/cometrobotics.org'
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
    image: 'https://www.sparkchess.com/cms/media/articles/air-hockey-and-chess-5.jpg',
  },
  {
    name: 'Solis Rover Project',
    href: '#',
    image: 'https://cdn.discordapp.com/attachments/1153482298579238935/1409599441706418268/thumbnail.png?ex=68adf747&is=68aca5c7&hm=2c85f62e8add622d3aecb79bfddb5161757844f77d3d155e5f86fd518d8ba1a4&',
  },
  {
    name: 'VexU',
    href: '#',
    image: 'https://cdn.rit.edu/images/news/2021-04/MMET-RIT.jpg',

  },
  {
    name: 'SumoBots',
    href: '#',
    image: 'https://miro.medium.com/v2/resize:fit:1142/1*2K3r7ymva8yJDwkvtU1LLg.png',

  },
]

const combatTeams = [
  {
    name: 'Blender',
    href: '/projects/blender',
    image: 'https://www.sparkchess.com/cms/media/articles/air-hockey-and-chess-5.jpg',

  },
  {
    name: '3lb Impulse',
    href: '#',
    image: 'https://www.sparkchess.com/cms/media/articles/air-hockey-and-chess-5.jpg',

  },
  {
    name: 'Blended Donut',
    href: '#',
    image: 'https://www.sparkchess.com/cms/media/articles/air-hockey-and-chess-5.jpg',

  },
  {
    name: 'Proxima Centauri',
    href: '#',
    image: 'https://www.sparkchess.com/cms/media/articles/air-hockey-and-chess-5.jpg',

  },
]

export { clubEmail, combatTeams, competitiveTeams, discordInvite, footerLinks, HOME_LINK, instagramURL, leadership, linksPageLinks, mainNavLinks, makerspaceMap, socialLinks, sponsorLinks, websiteRepo }
