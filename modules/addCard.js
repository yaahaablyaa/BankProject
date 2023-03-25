import { getSymbols } from "/modules/request.HTTP";
let symbols = JSON.parse(localStorage.getItem('symbols'))
let select = document.querySelector('datalist')


if(!symbols) {
    getSymbols()
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                localStorage.setItem('symbols', JSON.stringify(res.data.currencies))
                createOpt(res.data.currencies)
            }
        })
} else {
    createOpt(symbols)
}
    
function createOpt(obj) {
    for(let key in obj) {
        let opt = new Option(key, key)
        select.append(opt)
    }
}