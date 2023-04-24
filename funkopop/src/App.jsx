
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/navbar'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer />
    </div>
    )
  }
  
  export default App*/
  
  import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
  import NavBar from './components/Navbar/navbar'
  import ItemListContainer from './components/ItemListContainer/ItemListContainer'
  import ItemDetailContanier from './components/ItemDetailContainer/ItemDetailContainer'
  import ItemCount from './components/ItemCount/ItemCount'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import './App.css'



function App() {   
  
    return ( 
        <Router>
            <NavBar />   
            <Routes>
                <Route 
                    path='/' 
                    element={<ItemListContainer />} 
                />
                <Route 
                    path='/categoria/:categoria' 
                    element={<ItemListContainer />} 

                />

                <Route 
                    path='/detail/:pid' 
                    element={<ItemDetailContanier />}
                /> 

                <Route path='*' element={ <Navigate to='/' /> } />            
            </Routes>
            <ItemCount />
            
        </Router>            
    )
}

export default App

