import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])
    

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const deleteItemCart = (id) => {
        setCart( cart.filter(item => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)

    }

    const emptyCart = () => {
        setCart([])
    }

    const itemCount = () => {
        return cart.reduce((acc, item) => acc + 1 , 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price) , 0)
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            emptyCart,
            itemCount,
            totalPrice,
            deleteItemCart
          }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider; 