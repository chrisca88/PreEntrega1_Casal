import { useParams } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"

 const ItemDetailContanier = () => {
    // Estado para guardar un product
    const { pid } = useParams() // pid
    // UseEffect -> traer un proudcto por pid -> guardar en el estado

    console.log(pid)
    return (
        <div>
            {pid}
            <ItemDetail 
                // product = {product}                
            />
        </div>
    )
}

export default ItemDetailContanier