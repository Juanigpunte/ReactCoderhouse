import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { Spinner } from "../Loader/Spinner.jsx";
import ItemList from "./ItemList.jsx";
import FilterContainer from "../Filter/FilterContainer.jsx";

const ItemListContainer = () => {

    const { itemCategory } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        const productos = collection(db, 'items') //armo la referencia a la coleccion de la base de datos
        const q = itemCategory 
                    ? query(productos, where('categoria', '==', itemCategory) )
                    : productos
        
        getDocs( q )
            .then((querySnapshot) => {

                 const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                 })
                 
                 setProducts( docs )
            })
            .finally(() => setLoading(false))

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
                    <ItemList products={products} />
                </div>)}

        </>
    )
}

export default ItemListContainer;
