import { Link } from "react-router-dom"


const Item = ({funko : {id,name,price,foto,stock}}) => {
  return (
    <div className="container">
                    
                    <div key={id} className="card">
                        <h2>{name}</h2>
                        <Link to={`/detail/${id}`}>
                            <img src={foto} alt="funko" />
                        </Link>
                        <p>Precio: ${price}</p>
                        <p>Stock: {stock}</p>
                    </div>
                </div>)
  
}

export default Item