


//const ItemListContainer = ({saludo}) =>{
//
//
//    return (
//        <div>
//            <h1>Bienvenidos a la pagina de la segunda Preentrega</h1>
//            <p>{saludo}</p>
//        </div>
//    )
//}
//
//export default ItemListContainer

import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        mFetch()
        // .then(res => res.json())
        .then( resultado=> { 
            setProductos(resultado)
        })
        // .then(resul => console.log(resul))
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    }, [])

    return (
        <div style={{
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
            <h1>{greeting}</h1>
            { isLoading ?
                    <h2>Cargando...</h2>
                : 
                    productos.map( ({id, foto, name, price, categoria}) =>  <div key={id} className="card w-25">
                                                        <img src={foto} className="card-img-top" alt="imagen-card" />
                                                        <div className="card-body">
                                                            <h6>Nombre: {name}</h6>
                                                            <label>Precio: {price}</label>
                                                            <label>Categoria: {categoria}</label>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button className="btn btn-outline-dark">Detalle</button>
                                                        </div>
                                                    </div>
                    ) 
            }
            
        </div>
    )
}

export default ItemListContainer
