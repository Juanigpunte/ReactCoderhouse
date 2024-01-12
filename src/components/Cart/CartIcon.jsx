import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";



const CartIcon = () => {
    const { itemCount } = useContext(CartContext)


    return (
        <div>
            <Link to={"/cart"} ><button className="cart-icon">🛒</button></Link>
            <span className="contador">{ itemCount() }</span>
        </div>
        
        
    )
}



export default CartIcon