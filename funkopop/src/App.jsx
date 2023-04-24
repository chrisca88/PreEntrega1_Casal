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
            
        </Router>            
    )
}

export default App

