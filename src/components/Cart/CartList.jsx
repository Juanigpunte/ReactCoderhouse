import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../Buttons/AddToCart";
import trashIcon from "../../assets/trash.svg";
import { Link } from "react-router-dom";

const CartList = () => {
    const { cart, totalPrice, deleteItemCart } = useContext(CartContext)

    return (
        <section className="cart-view">
            <div className="cart-title-container"><h2>Carrito de compras</h2></div>
            <span className="separador"></span>

            {
                cart.length === 0
                    ? (
                        <>  <div className="column-container">
                            <h3>Carrito vacio</h3>
                            <Link to={"/store"}><button className="form-button">Ir a la tienda</button></Link>
                        </div>
                        </>
                    ) 
                    
                    : (
                        <>
                            <div>
                                <ul>

                                    {

                                        cart.map((item) => (

                                            <>
                                                <li key={item.id} className="cart-item">
                                                    <div className="flex-center"><img className="cart-img" src={item.thumbnail} alt={item.name} /></div>
                                                    <div className="flex-center"><h3>{item.name}</h3><h4>{item.skin}</h4><h5>{item.wear} | {item.float} </h5></div>
                                                    <div className="flex-center"><p>${item.price}</p></div>
                                                    <div className="flex-center"><Boton onClick={() => deleteItemCart(item.id)} className="remove"><img className="trashIcon" src={trashIcon} alt="delete-button" />remove</Boton></div>
                                                </li>
                                                <span className="separador"></span>
                                            </>
                                        ))
                                    }
                                </ul>
                                <p className="total-cart">Total:${totalPrice()} </p>
                            </div>


                            <div className="flex-container">
                                <Link to={"/store"}><button className="form-button">Volver a la tienda</button></Link>
                                <Link to={"/Checkout"}><button className="form-button">Confirmar compra</button></Link>
                            </div>




                        </>
                    )
            }
        </section>
    )
}
export default CartList;