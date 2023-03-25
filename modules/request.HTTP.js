import axios from "axios"


export const getData = async (path) => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + path)

    return res
}