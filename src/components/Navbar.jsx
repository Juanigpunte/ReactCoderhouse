import CartIcon from "./CartIcon"
import logo from '../assets/logonny.png'

const Navbar = () => { 

    return (
            <header className="header">
                <div className="nav-container">
                    <img className="nav-logo" src={logo} alt="logo" />
                    <nav className="nav-container">
                        <a className="nav-link" href="">Inicio</a>
                        <a className="nav-link" href="">Nosotros</a>
                        <a className="nav-link" href="">Tienda</a>
                    </nav>
                    <CartIcon />    
                </div>
            </header>
    )

}

export default Navbar
