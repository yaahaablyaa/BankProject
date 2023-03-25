let tbody = document.querySelector('tbody')

function reload(arr, place) {
    for (let i=0 ; i<=7; i++) {
        let tRow = document.createElement('tr')
        let no = document.createElement('td')
        let sending = document.createElement('td')
        let categories = document.createElement('td')
        let transaction_sum = document.createElement('td')
        let when = document.createElement('td')

        no.innerHTML = "123212"
        sending.innerHTML = "VISA"
        categories.innerHTML = "Автомобиль"
        transaction_sum.innerHTML = "414,000,000"
        when.innerHTML = "4 дня назад"

        tRow.append(no, sending, categories, transaction_sum, when)
        place.append(tRow)
    }
}

reload()