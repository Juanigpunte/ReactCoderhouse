import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/utils.js";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Spinner } from "../Loader/Spinner.jsx";



const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((data) => {
                setItem(data.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false))
    }, []);


    return (
        <>

            {loading ? (
                <div className="center">
                    <Spinner />
                </div>
            ) : (<div className="item-detail">
                <ItemDetail item={item} />
            </div>)}

        </>

    )

}
export default ItemDetailContainer