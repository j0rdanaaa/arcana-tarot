import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-symbol" aria-hidden="true">
          ☾ ✦
        </span>

        <span className="hero-label">
          DESCUBRA O UNIVERSO DO TAROT
        </span>

        <h1>
          Os mistérios das cartas
          <br />
          esperam por você
        </h1>

        <p>
          Explore os arcanos, descubra novos significados
          e registre sua jornada de autoconhecimento.
        </p>

        <a href="#explorar" className="hero-button">
          Começar minha jornada ✦
        </a>
      </div>
    </section>
  )
}

export default Hero
