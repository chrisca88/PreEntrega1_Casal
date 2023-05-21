import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

export const CartContainer = ()=> {
    const {cartList,vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()
    const [id,setId] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        email2:''

    })

   
    const datos ={
            name:'',
            phone:'',
            email:'',
            email2:''
        }


    const generarOrden = (even)=>{
        even.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items  = cartList.map(({name,id,price,cantidad})=> ({name,id,price,cantidad}))
        order.total  = precioTotal()

        const dbFirestore = getFirestore()
        const odersCollection = collection(dbFirestore, 'ordenes')
        
        addDoc(odersCollection, order)
            .then(resp => alert(`El id de su compra es: ${resp.id}`))
            .catch(err => console.log(err))
            .finally(()=>{
                vaciarCarrito()
                setDataForm(datos)
            })

    }

    const handleOnChange = (even)=>{
        setDataForm({
            ...dataForm, [even.target.name]: even.target.value
        })

    }


    return(
        <div>
            { cartList.length !== 0 ?
            <>
            {cartList.map (funko => (
                <div className="w-50">
                <img className="w-25 " src={funko.foto} alt="imagen" />
                <label>Precio: ${funko.price} - Cantidad: {funko.cantidad}</label>
                <button className="btn btn-outline-danger" onClick={()=>eliminarProducto(funko.id)}>X</button>
                </div>
            ))}
            <p>Total: ${precioTotal()}</p>
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
            <form className="contactForm" onSubmit={generarOrden}>
                        <div class="row">
                            <div class="col-md-3">
                              <div class="formgroup">
                                <input type="text" className="formcontrol" name="name" value={dataForm.name} placeholder="ingrese su nombre" required onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div class="col-md-3"> 
                              <div class="formgroup">
                                <input type="text" className="formcontrol" name="phone" value={dataForm.phone} placeholder="ingrese su telefono" required onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div class="col-md-3"> 
                              <div class="formgroup">
                                <input type="email" className="formcontrol" name="email" value={dataForm.email} placeholder="ingrese su e-mail" required onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div class="col-md-3"> 
                              <div class="formgroup">
                                <input type="email" className="formcontrol" name="email2" value={dataForm.email2} placeholder="Reingrese su e-mail" required onChange={handleOnChange}/>
                                </div>
                            </div>
                            <div class="col-md-12"> 
                              <div class="formgroup">
                                <button className="btn btn-outline-success">Generar orden</button>
                                </div>
                            </div>
                        </div>
            </form>
            </>
            :
            <div>
                <h2>El carrito se encuentra vacio</h2>
                <Link to='/'>Continuar comprando</Link>
            </div>
            }
        </div>
    )
}