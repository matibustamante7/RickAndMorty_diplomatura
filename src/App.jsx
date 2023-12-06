import { Route, Routes } from 'react-router-dom'
import CardsContainer from './components/CardsContainer/CardsContainer'
import Header from './components/Header/Header/Header'
import CardDetail from './components/CardDetail/CardDetail'

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<CardsContainer />} />
        <Route path='/:idCharacter' element={<CardDetail />} />
      </Routes>
    </div>
  )
}

export default App
