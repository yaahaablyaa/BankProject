import axios from 'axios'
let { id } = JSON.parse(localStorage.getItem('user'))
let form = document.forms.addTransac


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