import { useCartContext } from "../../context/CartContext"

export const CartContainer = ()=> {
    const {cartList,vaciarCarrito} = useCartContext

    return(
        <div>
            {cartList.map (funko => (
                <div className="w-50">
                <img className="w-25 " src={funko.foto} alt="imagen" />
                <label>Precio: {funko.precio} - Cantidad: {funko.cantidad}</label>
                <button>X</button>
                </div>
            ))}
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
        </div>
    )
}