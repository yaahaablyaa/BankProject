export let reload = (data, pl) => {
    pl.innerHTML = ""
    
    for (let item of data) {
        // createElement
        let block_cart = document.createElement('div')
        let nameCard = document.createElement('h2')
        let val = document.createElement('span')

        let tr = document.createElement('tr')
        let tdID = document.createElement('td')
        let tdSend = document.createElement('td')
        let tdCategory = document.createElement('td')
        let tdSumTransac = document.createElement('td')
        let tdWhen = document.createElement('td')
        //classList
        block_cart.classList.add('block_cart')
        val.classList.add('valuta')
        //innerHTML
        nameCard.innerHTML = item.nameCard
        val.innerHTML = item.count + " " + item.valet
        welcom.innerHTML = 'Добро Пожаловать,' + ' ' + item.name + " " + item.surname + '!'
        email.innerHTML = item.email
        usermail.innerHTML = item.email

        tdID.innerHTML = item.id
        tdSend.innerHTML = item.nameCard
        tdCategory.innerHTML = item.Category
        tdSumTransac.innerHTML = item.Transaction
        tdWhen.innerHTML = item.When
        //append
        block_cart.append(nameCard, val)
        pl.append(block_cart)
        tr.append(tdID, tdSend, tdCategory, tdSumTransac, tdWhen)
        tbody.append(tr)
    }
}