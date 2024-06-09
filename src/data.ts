interface LinkType { name: string, href: string }
type LinkWithIconType = LinkType & { icon: string }
const HOME_LINK: LinkType = { name: 'Home', href: '/' }

const mainNavLinks: LinkType[] = [
  HOME_LINK,
//   { name: "About", href: "#" },
//   { name: "Projects", href: "#" },
//   { name: "Contact", href: "#" },
]

const socialLinks: LinkWithIconType[] = [
  { name: 'GitHub', href: 'https://github.com/Comet-Robotics', icon: '/socials/github.png' },
  { name: 'Instagram', href: 'https://www.instagram.com/comet_robotics_utd/', icon: '/socials/instagram.png' },
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
    name: 'Github',
    href: 'https://github.com/Comet-Robotics/',
  },
]

export { mainNavLinks, HOME_LINK, footerLinks, socialLinks, clubEmail, sponsorLinks, discordInvite, makerspaceMap, websiteRepo, linksPageLinks }
