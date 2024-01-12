import CartIcon from "../Cart/CartIcon.jsx"
import logo from '../../assets/logonny.png'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => { 

    return (
            <header className="header">
                <div className="nav-container">
                    <img className="nav-logo" src={logo} alt="logo" />
                    <nav className="nav-container">
                        <NavLink className="nav-link" to={"/"} >Inicio</NavLink>
                        <NavLink className="nav-link" to={"/nosotros"}>Nosotros</NavLink>
                        <NavLink className="nav-link" to={"/store"}>Tienda</NavLink>
                    </nav>
                    <CartIcon />    
                </div>
            </header>
    )

}

export default Navbar
