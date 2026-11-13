import { useState } from 'react'
import { cartas } from '../../data/cartas'
import './Biblioteca.css'

function Biblioteca() {
  const [pesquisa, setPesquisa] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  const cartasFiltradas = cartas.filter((carta) => {
    const correspondePesquisa = carta.nome
      .toLocaleLowerCase('pt-BR')
      .includes(pesquisa.toLocaleLowerCase('pt-BR'))

    const correspondeFiltro =
      filtro === 'Todos' || carta.tipo === filtro

    return correspondePesquisa && correspondeFiltro
  })

  return (
    <section className="biblioteca" id="cartas">
      <span className="biblioteca-label">
        ARCANA · BIBLIOTECA
      </span>

      <h2>Os Arcanos</h2>

      <p className="biblioteca-descricao">
        Explore os mistérios e significados das cartas.
      </p>

      <input
        type="search"
        className="biblioteca-pesquisa"
        placeholder="Pesquisar uma carta..."
        aria-label="Pesquisar cartas pelo nome"
        value={pesquisa}
        onChange={(evento) => setPesquisa(evento.target.value)}
      />

      <div className="biblioteca-filtros">
        <button
          type="button"
          className={filtro === 'Todos' ? 'filtro-ativo' : ''}
          onClick={() => setFiltro('Todos')}
        >
          Todas
        </button>

        <button
          type="button"
          className={filtro === 'Arcano Maior' ? 'filtro-ativo' : ''}
          onClick={() => setFiltro('Arcano Maior')}
        >
          Arcanos Maiores
        </button>

        <button
          type="button"
          className={filtro === 'Arcano Menor' ? 'filtro-ativo' : ''}
          onClick={() => setFiltro('Arcano Menor')}
        >
          Arcanos Menores
        </button>
      </div>

      <p className="biblioteca-contador">
        {cartasFiltradas.length} cartas encontradas
      </p>

      <div className="biblioteca-grid">
        {cartasFiltradas.map((carta) => (
          <article className="carta-card" key={carta.id}>
            <div className="carta-ilustracao">
              <span>{carta.numero}</span>
              <span className="carta-simbolo">✦</span>
              <span>{carta.nome}</span>
            </div>

            <h3>{carta.nome}</h3>
            <p className="carta-tipo">{carta.tipo}</p>
            <p>{carta.significado}</p>
          </article>
        ))}
      </div>

      {cartasFiltradas.length === 0 && (
        <p className="biblioteca-vazia">
          Nenhuma carta encontrada.
        </p>
      )}
    </section>
  )
}

export default Biblioteca
