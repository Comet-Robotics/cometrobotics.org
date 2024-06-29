interface LinkType { name: string, href: string }
type LinkWithIconType = LinkType & { icon: string }
const HOME_LINK: LinkType = { name: 'Home', href: '/' }

const mainNavLinks: LinkType[] = [
  HOME_LINK,
  { name: 'About', href: '/about' },
  // { name: "Projects", href: "#" },
  { name: 'Contact', href: '/links' },
]

const instagramURL = 'https://www.instagram.com/comet_robotics_utd/'

const socialLinks: LinkWithIconType[] = [
  { name: 'GitHub', href: 'https://github.com/Comet-Robotics', icon: '/socials/github.png' },
  { name: 'Instagram', href: instagramURL, icon: '/socials/instagram.png' },
  // { name: "Facebook", href: 'https://www.facebook.com/utdcombatrobotics', icon: '/socials/facebook.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/comet-robotics-utd/', icon: '/socials/linkedin.png' },
  { name: 'YouTube', href: 'https://www.youtube.com/@CometRoboticsUTD', icon: '/socials/youtube.png' },
]

const sponsorLinks: LinkWithIconType[] = [
  {
    name: 'SolidWorks',
    href: 'https://www.solidworks.com/',
    icon: '/sponsors/solidworks.png',
  },
  {
    name: 'BetterCNC',
    href: 'https://www.bettercnc.com/',
    icon: '/sponsors/bettercnc.png',
  },
  // {
  //     name: 'Fingertech Robotics',
  //     href: 'https://www.fingertechrobotics.com/',
  //     icon: '/sponsors/fingertech.png'
  // },
  // {
  //     name: 'SendCutSend',
  //     href: 'https://sendcutsend.com/',
  //     icon: '/sponsors/sendcutsend.png'
  // },
  {
    name: 'Repeat Robotics',
    href: 'https://www.repeat-robotics.com/',
    icon: '/sponsors/repeat-robotics.png',
  },
]

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
    href: '#',
  },
  {
    name: 'Source Code',
    href: websiteRepo,
  },
  {
    name: 'SharePoint',
    href: '#',
  },
  {
    name: 'Sponsorship',
    href: '#',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1200px-NASA_Mars_Rover.jpg',
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
    href: '#',
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

export { mainNavLinks, HOME_LINK, footerLinks, socialLinks, clubEmail, sponsorLinks, discordInvite, makerspaceMap, websiteRepo, linksPageLinks, instagramURL, competitiveTeams, combatTeams }
