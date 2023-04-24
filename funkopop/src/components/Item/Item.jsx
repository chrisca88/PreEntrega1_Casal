import { Link } from "react-router-dom"


const Item = ({funko : {id,name,price,foto,stock}}) => {
  return (
    
            <div className="row justify-content-arround">
                    <div key={id} className="card col-lg-3 col-md-6 col-sm-12 imagen">
                        <h2>{name}</h2>
                        <Link to={`/detail/${id}`}>
                            <img src={foto} alt="funko" />
                        </Link>
                        <p>Precio: ${price}</p>
                        <p>Stock: {stock}</p>
                    </div>
            </div>       
    

    
    
    )
  
}

export default Item