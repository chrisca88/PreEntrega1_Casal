import { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () =>{
    const [ counter, setCounter ] = useState(0)
    let sumarContador = () =>{
        setCounter (counter + 1)
    }

    let restarContador = () =>{
        if (counter > 0){
            setCounter (counter - 1)
        }
        
    }
    return (
    <nav className='navbar'>
            <img src="./src/assets/rsz_funko_brand.png" />
            <div>
                <a href='#'>Dragon Ball </a>
                <a href='#'>Pokemon </a>
                <a href='#'>One Piece </a>
            </div>
            <p>{counter} </p><CartWidget /> 
            <button onClick={sumarContador}>+</button>
            <button onClick={restarContador}>-</button>
            
            
    </nav>
    )
}

export default Navbar