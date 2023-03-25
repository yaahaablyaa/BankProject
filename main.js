import axios from "axios"
import { getData } from "./modules/request.HTTP"
import { reload } from "/modules/ui"

let h1 = document.querySelector('.welcom')
let card_cont = document.querySelector('.card_cont')

////////////////////////////////////////////////////
let user = JSON.parse(localStorage.getItem('user'))

if(!user) {
    location.assign('/pages/login.html')
}
////////////////////////////////////////////////////
h1.innerHTML = `Welcome ${user.name} ${user.surname}`


// axios.get(import.meta.env.VITE_BASE_URL + "/cards?user_id=")
getData("/cards?user_id=" + user.id)
    .then(res => reload(res.data, card_cont))