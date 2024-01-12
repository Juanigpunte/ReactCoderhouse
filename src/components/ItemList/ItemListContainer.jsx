import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import FilterContainer from "../Filter/FilterContainer.jsx";
import { Spinner } from "../Loader/Spinner.jsx";

const ItemListContainer = () => {

    const { itemCategory } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                const items = itemCategory
                    ? data.filter(prod => prod.categoria === itemCategory)
                    : data
                setProducts(items)
            })
            .finally(() => setLoading( false))

    }, [itemCategory])


    return (
        <>

        {loading ? (
            <div className="grid">
            <FilterContainer />
            <Spinner />
            </div>
            ) : (
            
            <div className="grid">
            <FilterContainer />
            <ItemList products={products}/>
            </div>)}

        </>  
    )
}

export default ItemListContainer;
