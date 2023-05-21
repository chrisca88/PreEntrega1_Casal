import { useCartContext } from "../../context/CartContext"

const CartWidget = () =>{

    const {cantidadTotal} = useCartContext()
    return (
        <div>
            {cantidadTotal() !== 0 && cantidadTotal()}<img src='basket-01_generated-removebg-preview.png' alt="carrito" />
        </div>
    )
}

export default CartWidget