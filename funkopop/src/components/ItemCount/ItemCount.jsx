import { useState } from "react"


 const ItemCount = () => {
    
    const [ counter, setCounter ] = useState(0)

    let handleCount = () =>{
        setCounter(counter+1)
    }


  return (
    <div>
        <p>Agregar al carrito: {counter} items</p>
        <button onClick={handleCount}>+1</button>
    </div>
  )
}

export default ItemCount
