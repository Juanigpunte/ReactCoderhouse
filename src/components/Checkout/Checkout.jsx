

const Checkout = () => {
    return (
        <div className="cart-view">
            <div className="cart-title-container">
                <h2>Checkout</h2>
            </div>
            <span className="separador"></span>
            <div className="column-container">
                <section>
                    <div>
                        <form className="checkout-form" action="">
                            <label htmlFor="fname">Nombre:</label>
                            <input name="fname" type="text" />
                            <label htmlFor="flastname">Apellido:</label>
                            <input name="flastname" type="text" />
                            <label htmlFor="fmail">Correo electronico:</label>
                            <input name="fmail" type="email" />
                            <button className="form-button">Finalizar pedido</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Checkout; 