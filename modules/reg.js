let form = document.forms.reg
form.onsubmit = (event) => {
    event.preventDefault();

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    localStorage.setItem('user', JSON.stringify(user))
}