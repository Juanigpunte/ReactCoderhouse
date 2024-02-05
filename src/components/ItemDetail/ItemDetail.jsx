import { Link } from "react-router-dom";
import Boton from "../Buttons/AddToCart";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";





const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart, isInCart } = useContext(CartContext);

    const handleAdd = () => {
        const itemToCart = {
            ...item,
            cantidad: cantidad
        }

        addToCart(itemToCart)

    };

    const handleSumarUno = () => {
        setCantidad(cantidad + 1)
    }

    const handleRestarUno = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }


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
                            : <>
                               <Boton onClick={handleAdd}>Sumar al carrito</Boton>
                               <div className="quantity">
                                    <Boton onClick={handleRestarUno}>➖</Boton> 
                                    <span>{cantidad}</span>
                                    <Boton onClick={handleSumarUno}>➕</Boton>
                               </div>
                             </>
                    }

                    <p>$<span>{item.price}</span></p>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;