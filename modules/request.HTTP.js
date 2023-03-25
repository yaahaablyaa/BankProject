import axios from "axios"


export const getData = async (path) => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + path)

    return res
}

export const getSymbols = async () => {

    const res = await axios.get("https://api.apilayer.com/currency_data/list", {
        headers: {
            apikey: import.meta.env.VITE_API_KEY
        }
    })


    return res
}