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
        nameCard.innerHTML = item.name
        val.innerHTML = item.currency
        //append
        block_cart.append(nameCard, val)
        pl.append(block_cart)
    }
}