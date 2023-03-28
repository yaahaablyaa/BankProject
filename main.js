import axios from "axios"
import { getData } from "./modules/request.HTTP"
import { reload, rel } from "/modules/ui"

let email = document.querySelector('.email')
let usermail = document.querySelector('.usermail')
let card_cont = document.querySelector('.card_cont')
let tbody = document.querySelector('.tbody')
let logout_btn = document.querySelector('.logout_btn')

////////////////////////////////////////////////////
let user = JSON.parse(localStorage.getItem('user'))

if (!user) {
    location.assign('/pages/login.html')
}
////////////////////////////////////////////////////
email.innerHTML = user.email
usermail.innerHTML = user.email


// axios.get(import.meta.env.VITE_BASE_URL + "/cards?user_id=")
getData("/cards?user_id=" + user.id)
    .then(res => reload(res.data, card_cont))

getData("/transactions?user_id=" + user.id)
    .then(res => rel(res.data, tbody))

logout_btn.onclick = () => {
    window.localStorage.removeItem('user')
    window.location.href = '/pages/login.html'
}