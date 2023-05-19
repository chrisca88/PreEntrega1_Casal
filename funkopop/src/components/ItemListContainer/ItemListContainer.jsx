
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import mFetch from "../../utils/mFetch"
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import Loading from "../Loading/Loading"

const ItemListContainer = ({saludo}) =>{

    const [ funkos, setFunkos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { categoria } = useParams()

    useEffect ( () => {
        if (!categoria){
            mFetch()
            .then( result => {
                setFunkos(result)
            })
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))          
        }else{
            mFetch()
            .then( result => {
                setFunkos(result.filter(funko => funko.categoria === categoria))
            })
            .catch(err => console.log(err))
            .finally( () =>setLoading(false))
    }

    },[categoria])

    return (
        loading ?
            <Loading/>
             :
        <ItemList funkos ={funkos}/>
    )
}

export default ItemListContainer
