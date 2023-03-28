import { getSymbols } from "/modules/request.HTTP";
import axios from 'axios'
let { id } = JSON.parse(localStorage.getItem('user'))
let symbols = JSON.parse(localStorage.getItem('symbols'))
let select = document.querySelector('datalist')
let form = document.forms.addCard


if (!symbols) {
    getSymbols()
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('symbols', JSON.stringify(res.data.currencies))
                createOpt(res.data.currencies)
            }
        })
} else {
    createOpt(symbols)
}

function createOpt(obj) {
    for (let key in obj) {
        let opt = new Option(key, key)
        select.append(opt)
    }
}

form.onsubmit = (e) => {
    e.preventDefault()

    let newCard = {
        user_id: id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        newCard[key] = value
    })
    console.log(newCard);
    if (newCard.card_name && newCard.currency && newCard.total) {
        axios.post(import.meta.env.VITE_BASE_URL + "/cards", newCard)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    location.assign('/pages/wallets.html')
                } else {
                    alert('Что-то пошло не так!!')
                }
            })
    }
}