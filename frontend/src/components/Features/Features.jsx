import './Features.css'

const funcionalidades = [
  {
    id: 1,
    simbolo: '☀',
    titulo: 'Carta do Dia',
    descricao: 'Receba uma carta para inspirar sua reflexão diária.',
    link: '#carta-do-dia'
  },
  {
    id: 2,
    simbolo: '✧',
    titulo: 'Tiragens de Tarot',
    descricao: 'Explore diferentes formas de interpretar as cartas.',
    link: '#tiragens'
  },
  {
    id: 3,
    simbolo: '☾',
    titulo: 'Biblioteca de Cartas',
    descricao: 'Conheça os 78 arcanos e seus significados.',
    link: '#cartas'
  }
]

function Features() {
  return (
    <section className="features" id="explorar">
      <span className="features-label">
        EXPLORE O ARCANA
      </span>

      <h2>Escolha sua jornada</h2>

      <p className="features-description">
        Descubra as possibilidades do universo do Tarot.
      </p>

      <div className="features-grid">
        {funcionalidades.map((item) => (
          <article className="feature-card" key={item.id}>
            <span className="feature-icon" aria-hidden="true">
              {item.simbolo}
            </span>

            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>

            <a href={item.link} className="feature-link">
              Explorar →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
