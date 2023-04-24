import { useState } from 'react'

 const ItemCount = () => {
    
    const [ counter, setCounter ] = useState(0)

    let handleCount = () =>{
        setCounter(counter+1)
    }


  return (
    <div>
        <p>Clicks: {counter}</p>
        <button onClick={handleCount}>+1</button>
    </div>
  )
}

export default ItemCount
