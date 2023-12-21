import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Inputs from './components/Inputs'
import MainGrid from './components/MainGrid'
import Outputs from './components/Outputs'

function App() {

  return (
    <div className="App">
      <Header />
      <Inputs />
      <MainGrid />
      <Outputs />
      <Footer />
    </div>
  )
}

export default App
