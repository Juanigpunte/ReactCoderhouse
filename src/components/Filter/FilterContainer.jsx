import { Link } from "react-router-dom";


const FilterContainer = () => {
    
    
    return (
        <section data-aos="fade-right" data-aos-duration="900" className="filter">
            <div className="inputs">
                <h3 className="category-title">Categorias</h3>
                <li><Link className="category-filter" to={"/store/"}>Todo</Link></li>
                <li><Link className="category-filter" to={"/store/cuchillos"}>Cuchillos</Link></li>
                <li><Link className="category-filter" to={"/store/guantes"}>Guantes</Link></li>
                <li><Link className="category-filter" to={"/store/rifles"}>Rifles</Link></li>
                <li><Link className="category-filter" to={"/store/snipers"}>Snipers</Link></li>
                <li><Link className="category-filter" to={"/store/pistolas"}>Pistolas</Link></li>
            </div>
        </section>


    );
}

export default FilterContainer;