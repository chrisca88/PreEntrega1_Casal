import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import mFetch from "../../utils/mFetch"
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

 const ItemDetailContanier = () => {
    
    const { pid } = useParams()
    const [funko,setFunko] = useState({})
    const [loading,setLoading] = useState(true)
    

    useEffect(() =>{
       mFetch(pid)
       .then(respuesta => setFunko(respuesta))
       .catch(err => console.log(err))
       .finally(()=> setLoading(false) )

    },[])

    return (
        <div>
            {
            loading ?
            <Loading />
            :
            <ItemDetail funko={funko} />
            }
        </div>
    )
}

export default ItemDetailContanier