
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import mFetch from "../../utils/mFetch"
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import Loading from "../Loading/Loading"

const ItemListContainer = ({saludo}) =>{

    const [ funkos, setFunkos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { categoria } = useParams()

    
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore,'funkos')
    useEffect ( () => {
        if (!categoria){
            getDocs(queryCollection)
                .then( resp => setFunkos( resp.docs.map(funkos =>({id: funkos.id, ...funkos.data()}))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))         
        }else{
           const queryCollectionFiltered = query(
            queryCollection,
            where('categoria','==',categoria)
           )
           getDocs(queryCollectionFiltered)
                .then( resp => setFunkos( resp.docs.map(funkos =>({id: funkos.id, ...funkos.data()}))))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
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
