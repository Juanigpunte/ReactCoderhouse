import { MOCK_DATA } from "../data/data.js";

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)

    })

}