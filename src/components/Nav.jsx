import BubbleMenu from './BubbleMenu'

function Nav() {
  const menuItems = [
    { label: 'Home', href: '#home', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
    { label: 'Services', href: '#services', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
    { label: 'Intel', href: '#intel', rotation: -8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
    { label: 'About', href: '#founder', rotation: 8, hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' } },
    { label: 'Contact', href: '#contact', rotation: -8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } }
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
