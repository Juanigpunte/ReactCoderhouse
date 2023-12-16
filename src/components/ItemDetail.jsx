import { Link } from "react-router-dom";



const ItemDetail = ({ item }) => {

    return (
<div key={item.id} className="wrapper">
    <div className="product-img">
        <img className="image-detail" src={item.thumbnail} alt={item.name} />
    </div>
    <div className="product-info">
        <button className="button-detail"><Link className="link-detail" to={'/store'}>Volver</Link></button>
         <div className="product-text">
            <h1>{item.name} ▪︎ {item.skin}</h1>
            <h2>{item.wear} - {item.float}</h2>
            <p>{item.description}</p>
         </div>
            <div className="product-price-btn">
            <p>$<span>{item.price}</span></p>
            <button type="button">Sumar al carrito</button>
            </div>
    </div>
</div>

    )
}

export default ItemDetail;