import { useEffect, useState } from "react";
import { db } from "../../firebase/config.js";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Spinner } from "../Loader/Spinner.jsx";
import { doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        const docFirebase = doc(db, 'items', itemId) //referencia

        getDoc( docFirebase )        //llamar a la referencia
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }

                setItem(doc)
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