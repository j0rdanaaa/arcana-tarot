import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Biblioteca from './components/Biblioteca/Biblioteca'
import CartaDoDia from './components/CartaDoDia/CartaDoDia'

import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <CartaDoDia />
        <Biblioteca />
      </main>
    </>
  )
}

export default App
