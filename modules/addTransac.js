import axios from 'axios'
import { getData } from './request.HTTP'
let { id } = JSON.parse(localStorage.getItem('user'))
let form = document.forms.addTransac
let select = form.querySelector('select')

////////////////////////////////////////////////////
let user = JSON.parse(localStorage.getItem('user'))

if (!user) {
    location.assign('/pages/login.html')
}
////////////////////////////////////////////////////

getData("/cards?user_id=" + user.id)
    .then(res => createOpt(res.data))


function createOpt(arr) {
    for (let item of arr) {
        let opt = new Option(item.card_name, item.card_name)
        select.append(opt)
    }
}


form.onsubmit = (e) => {
    e.preventDefault()

    let newTransac = {
        user_id: id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        newTransac[key] = value
    })
    console.log(newTransac);
    if (newTransac.tra_name && newTransac.curren && newTransac.category) {
        axios.post(import.meta.env.VITE_BASE_URL + "/transactions", newTransac)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    location.assign('/pages/transactions.html')
                } else {
                    alert('Что-то пошло не так!!')
                }
            })
    }
}