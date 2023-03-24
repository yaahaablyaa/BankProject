import {locData, ema, pass, button} from "/modules/queryes.js"
ema.value = locData.email

button.onclick = () => {
    if (pass.value === locData.password && ema.value === locData.email) {
        window.location.href = "./index.html"
    } else {
        alert('Зарегистрируйтесь пожалуйста!')
    }
}