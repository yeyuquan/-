const links = [
  ['关于', '#about'],
  ['项目', '#projects'],
  ['能力', '#strengths'],
]

export function Navigation() {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="主导航">
        <a className="brand" href="#top" aria-label="回到顶部">
          <span>YE</span><i />YUQUAN
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-contact" href="#contact"><span>联系合作</span><b>↗</b></a>
      </nav>
    </header>
  )
}
