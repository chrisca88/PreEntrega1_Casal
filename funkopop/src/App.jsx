
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/navbar'



function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={'Saludos!'} />
    </div>
  )
}

export default App
