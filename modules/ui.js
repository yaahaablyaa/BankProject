export let reload = (data, pl) => {
    pl.innerHTML = ""

    for (let item of data) {
        // createElement
        let block_cart = document.createElement('div')
        let nameCard = document.createElement('h2')
        let val = document.createElement('span')
        //classList
        block_cart.classList.add('block_cart')
        val.classList.add('valuta')
        //innerHTML
        nameCard.innerHTML = item.card_name
        val.innerHTML = item.total + " " + item.currency
        //append
        block_cart.append(nameCard, val)
        pl.append(block_cart)
    }
}

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export let rel = (obj, place) => {
    place.innerHTML = ""
    for (let item of obj) {
        // createElement
        let tr = document.createElement('tr')
        let tdID = document.createElement('td')
        let tdSend = document.createElement('td')
        let tdCategory = document.createElement('td')
        let tdSumTransac = document.createElement('td')
        let tdWhen = document.createElement('td')
        //innerHTML
        tdID.innerHTML = item.id
        tdSend.innerHTML = item.tra_name
        tdCategory.innerHTML = item.category
        tdSumTransac.innerHTML = item.curren
        tdWhen.innerHTML = new Date().getDate() + " " + monthNames[new Date().getMonth()]
        //append
        tr.append(tdID, tdSend, tdCategory, tdSumTransac, tdWhen)
        place.append(tr)
    }
}