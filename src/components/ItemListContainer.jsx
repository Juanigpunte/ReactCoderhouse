import { useState, useEffect } from "react"
import { pedirDatos } from "../utils/utils.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import FilterContainer from "./FilterContainer.jsx";

const ItemListContainer = () => {

    const { itemCategory } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((data) => {
                const items = itemCategory
                    ? data.filter(prod => prod.categoria === itemCategory)
                    : data
                setProducts(items)
            })

    }, [itemCategory])


    return (
        <div className="grid">
        <FilterContainer />
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;
