import { createContext, useContext, useState } from "react"

 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct)=>{

        const indice = cartList.findIndex( prod => newProduct.id === prod.id)

        if (indice === -1){
            setCartList([ ...cartList, newProduct ])

        }else{
            cartList[indice].cantidad += newProduct.cantidad
            setCartList([...cartList])
        }
    }

    const precioTotal = ()=> cartList.reduce((total, objProducto)=> total += (objProducto.cantidad * objProducto.price), 0)

    const cantidadTotal = ()=> cartList.reduce((total, objProducto)=> total += objProducto.cantidad,0)

    const eliminarProducto = (pid)=>{
        setCartList(cartList.filter(funko => funko.id !== pid ))
    }
    
    const vaciarCarrito = ()=> {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}

        </CartContext.Provider>
    )
}