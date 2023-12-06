import { Route, Routes } from 'react-router-dom'
import CardsContainer from './components/CardsContainer/CardsContainer'
import Header from './components/Header/Header/Header'
import CardDetail from './components/CardDetail/CardDetail'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<CardsContainer />} />
        <Route path='/:idCharacter' element={<CardDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
