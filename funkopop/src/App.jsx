  import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
  import NavBar from './components/Navbar/navbar'
  import ItemListContainer from './components/ItemListContainer/ItemListContainer'
  import ItemDetailContanier from './components/ItemDetailContainer/ItemDetailContainer'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import './App.css'

  import { CartContextProvider } from './context/CartContext'
import { CartContainer } from './components/CartContainer/CartContainer'



function App() {   
  
    return ( 
        <CartContextProvider>

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
                <Route 
                    path='/cart' 
                    element={<CartContainer />} 

                /> 

                <Route path='*' element={ <Navigate to='/' /> } />            
            </Routes>
            
        </Router>            

        </CartContextProvider>
    )
}

export default App

