 import { collection , addDoc} from "firebase/firestore";
 import { db } from "../../firebase/config.js";

import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../context/CartContext";

const Checkout = () => {

    const {cart, totalPrice, emptyCart} = useContext(CartContext);

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        mail: ''
    })

    const [orderId, setOrderId] = useState(null)
 

    const handleSubmit = (e) => {
        e.preventDefault() 
        
        const order = {
            cliente: values,
            items: cart,
            total: totalPrice(),
        }

        const orderRef = collection(db, 'orders')
        addDoc(orderRef, order)
        .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
        
        });

        
    }

    const handleInputs = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }

    if (orderId) {

        return (
        <section className="cart-view">
            <div className="cart-title-container"> 
                <h2>¡Muchas gracias por su compra!</h2>
            </div>
            <div className="center gap">
                <p className="order-text">El ID de su pedido es: {orderId}</p>
            </div>
        </section>


        )
        
    }


    return (
        <div className="cart-view">
            <div className="cart-title-container">
                <h2>Checkout</h2>
            </div>
            <span className="separador"></span>
            <div className="column-container">
                <section>
                    <div>
                        <form onSubmit={handleSubmit} className="checkout-form" action="">
                            <label htmlFor="name">Nombre:</label>
                            <input value={values.name} onChange={handleInputs} name="name" type="text" />
                            <label htmlFor="lastname">Apellido:</label>
                            <input value={values.lastname} onChange={handleInputs} name="lastname" type="text" />
                            <label htmlFor="mail">Correo electronico:</label>
                            <input value={values.email} onChange={handleInputs} name="mail" type="email" />
                            <button type="submit" className="form-button">Finalizar pedido</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}



export default Checkout; 