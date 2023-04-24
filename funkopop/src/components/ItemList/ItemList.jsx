
const ItemList = ({funkos}) => {
  return (
    <div>
             
        {funkos.map ( funko => <Item key={funko.id}  funko = {funko} /> )  }    
            
            
     </div>
  )
}

export default ItemList