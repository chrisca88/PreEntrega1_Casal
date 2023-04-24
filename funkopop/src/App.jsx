
//import './App.css'
//import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import NavBar from './components/Navbar/navbar'

//import 'bootstrap/dist/css/bootstrap.min.css'



//function App() {

 // return (
//    <div className="App">
//      <NavBar />
//      <ItemListContainer saludo={'Saludos!'} />
//    </div>
//  )
//}

//export default App

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react'

import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'
import ItemDetailContanier from './components/ItemDetailContainer/ItemDetailContainer'


import 'bootstrap/dist/css/bootstrap.min.css'


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
                {/* CartContainer es solo ejemplo no entra en el desafío */}
                <Route 
                    path='/cart' 
                    element={<CartContainer />} 

                />      
                {/* <Route path='/notfound' element={<NotFound404 />} />       */}

                {/* <Route path='*' element={ <Navigate to='/notfound' /> } />             */}
                <Route path='*' element={ <Navigate to='/' /> } />            
            </Routes>
            <ItemCount />
            {/* <Footer /> */}
        </Router>            
    )
}

export default App

