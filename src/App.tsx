import { BrowserRouter } from 'react-router-dom'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { OurCoffees } from './components/OurCoffees'
import './index.css'
import { Router } from './Router'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
}

export default App