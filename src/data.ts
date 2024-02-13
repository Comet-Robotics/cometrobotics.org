type LinkType = { name: string; href: string }
type LinkWithIconType = { name: string; href: string; icon: string }
const HOME_LINK: LinkType = { name: "Home", href: "#" };

const mainNavLinks: LinkType[] = [
  HOME_LINK,
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];


const socialLinks: LinkWithIconType[] = [
    { name: "GitHub", href: 'https://github.com/Comet-Robotics', icon: '/socials/github.png' },
    { name: "Instagram", href: 'https://www.instagram.com/cometrobotics/', icon: '/socials/instagram.png' },
    { name: "Facebook", href: 'https://www.facebook.com/cometrobotics', icon: '/socials/facebook.png' },
    { name: "LinkedIn", href: 'https://www.linkedin.com/company/cometrobotics/', icon: '/socials/linkedin.png' },
    { name: "YouTube", href: 'https://www.youtube.com/channel/UCQ1Jn4e8oZj6QrKtG7ZP7Yg', icon: '/socials/youtube.png' },
]

const clubEmail = "cometrobotics@utdallas.edu"




const footerLinks: LinkType[] = [
    {
        name: 'Discord',
        href: '#'
    },
    {
        name: 'Wiki',
        href: '#'
    },
    {
        name: 'Source Code',
        href: 'https://github.com/Comet-Robotics/website'
    },
    {
        name: 'SharePoint',
        href: '#'
    },
    {
        name: 'Sponsorship',
        href: '#'
    }
]

export { mainNavLinks, HOME_LINK, footerLinks, socialLinks, clubEmail };