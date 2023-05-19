import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"


const ItemDetail = ({funko}) => {
  
    const [isCant, setIsCant] = useState(false)
    const {addToCart} = useCartContext()

    const onAdd = (cantidad) =>{
        addToCart({...funko, cantidad})
        setIsCant(true)
    }

    return (
      <>
        <div className="row">
            <div className="col">
                <img src={funko.foto} alt="funko" />
                <h3>Nombre: {funko.name}</h3>
                <h3>Precio: ${funko.price}</h3>
                <h3>Stock: {funko.stock}</h3>
            </div>
            <div className="col">
                {
                    !isCant ?
                    <ItemCount onAdd={onAdd} />
                    :
                        <>
                        <Link to='/cart' className="btn btn-outlane-danger">Finalizar compra</Link>
                        <Link to='/' className="btn btn-outlane-success">Continuar comprando</Link>
                        </>

                }

            </div>
        </div>
      </>
    )
  }
  
  export default ItemDetail
  