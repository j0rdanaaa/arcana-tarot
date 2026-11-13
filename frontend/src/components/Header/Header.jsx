import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-simbolo">✦</span>
        <span>ARCANA</span>
      </div>

      <nav className="header-nav" aria-label="Navegação principal">
        <a href="#inicio">Início</a>
        <a href="#cartas">Cartas</a>
        <a href="#tiragens">Tiragens</a>
        <a href="#diario">Diário</a>
      </nav>
    </header>
  )
}

export default Header
