import { Link } from "react-router-dom";

const ItemList = ({products}) => {

    return (
        <div className="item-container">
            {products.map((item) => (
                <Link to={`/${item.id}`}>  
                    <article key={item.id} className="card">
                        <img className="image" src={item.thumbnail} alt={item.name} />
                        <h3 className="title">{item.name} ▪︎ {item.skin} ▪︎ {item.abbreviation}</h3>
                        <p className="price">${item.price}</p>
                    </article>
                </Link>
                

            ))}
        </div>
    )
}

export default ItemList;