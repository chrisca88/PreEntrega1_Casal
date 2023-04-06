
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/navbar'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={'Saludos!'} />
    </div>
  )
}

export default App
