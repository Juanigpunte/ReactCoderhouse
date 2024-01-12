const Boton = ({onClick, children, className}) => {
    return (
        <button className={className} onClick={onClick} type="button">{children}</button>
    )
}


export default Boton