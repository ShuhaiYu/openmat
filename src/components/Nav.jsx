import BubbleMenu from './BubbleMenu'

function Nav() {
  const menuItems = [
    { label: 'Home', href: '#home', rotation: -8, hoverStyles: { bgColor: '#1a1a1a', textColor: '#ffffff' } },
    { label: 'About', href: '#about', rotation: 8, hoverStyles: { bgColor: '#BF9950', textColor: '#ffffff' } },
    { label: 'Talent', href: '#talent', rotation: -8, hoverStyles: { bgColor: '#2a2a2a', textColor: '#ffffff' } },
    { label: 'Brand', href: '#brand', rotation: 8, hoverStyles: { bgColor: '#BF9950', textColor: '#ffffff' } },
    { label: 'Intel', href: '#intel', rotation: -8, hoverStyles: { bgColor: '#1a1a1a', textColor: '#ffffff' } }
  ]

  return (
    <BubbleMenu
      logo={<span className="font-bold text-lg">Open Mat</span>}
      items={menuItems}
      useFixedPosition={true}
      menuBg="#ffffff"
      menuContentColor="#111111"
    />
  )
}

export default Nav
