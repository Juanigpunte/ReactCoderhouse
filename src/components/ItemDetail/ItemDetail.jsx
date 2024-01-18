import { Link } from "react-router-dom";
import Boton from "../Buttons/AddToCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";





const ItemDetail = ({ item }) => {
    const { addToCart, isInCart } = useContext(CartContext);

    const handleAdd = () => {
        const itemToCart = {
            ...item,
        }

        addToCart(itemToCart)

    };


    return (
        <div data-aos="fade-in" data-aos-duration="1000" key={item.id} className="wrapper">
            <div className="product-img">
                <img className="image-detail" src={item.thumbnail} alt={item.name} />
            </div>
            <div className="product-info">
                <div className="flex-end">
                    <button className="button-detail"><Link className="link-detail" to={'/store'}>✖</Link></button>
                </div>
                <div className="product-text">
                    <h1>{item.name} ▪︎ {item.skin}</h1>
                    <h2>{item.wear} - {item.float}</h2>
                    <p>{item.description}</p>
                </div>
                <div className="product-price-btn">
                    {
                        isInCart(item.id)
                            ? <Link to="/cart"><Boton>Terminar mi compra</Boton></Link>
                            : <Boton onClick={handleAdd}>Sumar al carrito</Boton>
                    }

                    <p>$<span>{item.price}</span></p>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;