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
      <div className="inputs-grid-outputs">
        <Inputs />
        <MainGrid />
        <Outputs />
      </div>
      <Footer />
    </div>
  )
}

export default App
