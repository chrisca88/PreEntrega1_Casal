import Item from "../Item/Item"

const ItemList = ({funkos}) => {
  return (
    <div className="container my-3">
             
        {funkos.map ( funko => <Item key={funko.id}  funko = {funko} /> )  }    
            
            
     </div>
  )
}

export default ItemList