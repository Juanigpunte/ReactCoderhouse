


const ItemDetail = ({ item }) => {

    return (
<div class="wrapper">
    <div class="product-img">
        <img className="image-detail" src={item.thumbnail} alt={item.name} />
    </div>
    <div class="product-info">
         <div class="product-text">
            <h1>{item.name} ▪︎ {item.skin}</h1>
            <h2>{item.wear} - {item.float}</h2>
            <p>{item.description}</p>
         </div>
            <div class="product-price-btn">
            <p>$<span>{item.price}</span></p>
            <button type="button">Sumar al carrito</button>
            </div>
    </div>
</div>

    )
}

export default ItemDetail;