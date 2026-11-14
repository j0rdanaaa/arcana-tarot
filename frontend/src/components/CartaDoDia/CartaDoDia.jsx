import { useState } from 'react'
import { cartas } from '../../data/cartas'
import './CartaDoDia.css'

function CartaDoDia() {
  const [cartaSelecionada, setCartaSelecionada] = useState(() => {
    const dadosSalvos = localStorage.getItem('arcana-carta-do-dia')

    if (!dadosSalvos) return null

    try {
      const dados = JSON.parse(dadosSalvos)
      const hoje = new Date().toLocaleDateString('en-CA')

      if (dados.data === hoje) {
        return cartas.find((carta) => carta.id === dados.cartaId) ?? null
      }
    } catch {
      localStorage.removeItem('arcana-carta-do-dia')
    }

    return null
  })

  function revelarCarta() {
    if (cartaSelecionada || cartas.length === 0) return

    const indiceAleatorio = Math.floor(Math.random() * cartas.length)
    const carta = cartas[indiceAleatorio]

    const hoje = new Date().toLocaleDateString('en-CA')

    localStorage.setItem(
      'arcana-carta-do-dia',
      JSON.stringify({
        data: hoje,
        cartaId: carta.id
      })
    )

    setCartaSelecionada(carta)
  }

  return (
    <section className="carta-do-dia" id="carta-do-dia">
      <div className="carta-do-dia-conteudo">
        <span className="carta-do-dia-simbolo">✦ ☾ ✦</span>

        <h2>Carta do Dia</h2>

        <p>
          Reserve um instante para descobrir qual arcano
          acompanhará sua jornada.
        </p>

        {!cartaSelecionada && (
          <button onClick={revelarCarta}>
            Revelar minha carta ✦
          </button>
        )}

        {cartaSelecionada && (
          <div className="carta-revelada">
            <span>{cartaSelecionada.numero}</span>

            <h3>{cartaSelecionada.nome}</h3>

            <p>{cartaSelecionada.significado}</p>

            <p>✦ Sua carta de hoje foi revelada. Volte amanhã para uma nova descoberta.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartaDoDia
