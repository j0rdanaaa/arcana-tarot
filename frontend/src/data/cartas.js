import { arcanosMaiores } from './arcanosMaiores'

const arcanosMenores = [
  {
    id: 22,
    nome: 'Ás de Copas',
    numero: 'A',
    tipo: 'Arcano Menor',
    significado: 'Novos sentimentos, amor e abertura emocional.',
    palavrasChave: ['Amor', 'Emoção', 'Começo']
  },
  {
    id: 23,
    nome: 'Dois de Espadas',
    numero: 'II',
    tipo: 'Arcano Menor',
    significado: 'Decisões, equilíbrio e reflexão.',
    palavrasChave: ['Escolhas', 'Equilíbrio', 'Reflexão']
  }
]

export const cartas = [...arcanosMaiores, ...arcanosMenores]
