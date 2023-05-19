import { Link } from "react-router-dom"


const Item = ({funko : {id,name,price,foto,stock}}) => {
  return (
    
            <div className="row justify-content-arround">
                    <div key={id} className="card col-lg-3 col-md-6 col-sm-12 imagen">
                        <h2>{name}</h2>
                        <Link to={`/detail/${id}`}>
                            <img src={foto} alt="funko" />
                        </Link>
                        <div>
                        <br />
                        <p className="fw-bolder">Precio: ${price}</p>
                        <p>Stock: {stock}</p> 
                        </div>
                        
                    </div>
            </div>       
    

    
    
    )
  
}

export default Item