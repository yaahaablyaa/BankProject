import {locData, card_cont, tbody, welcom, email, usermail} from "/modules/queryes.js"

welcom.innerHTML = 'Добро Пожаловать,' + ' ' + locData.name + " " + locData.surname + '!'
email.innerHTML = locData.email
usermail.innerHTML = locData.email

// let reload = (data, pl) => {
//     pl.innerHTML = ""
//     for (let item of data) {
//         // createElement
//         let block_cart = document.createElement('div')
//         let nameCard = document.createElement('h2')
//         let val = document.createElement('span')

//         //classList
//         block_cart.classList.add('block_cart')
//         val.classList.add('valuta')
//         //innerHTML
//         nameCard.innerHTML = item.nameCard
//         val.innerHTML = item.count + " " + item.valet
//         welcom.innerHTML = 'Добро Пожаловать,' + ' ' + locData.name + " " + locData.surname + '!'
//         email.innerHTML = item.email
//         usermail.innerHTML = item.email
//         //append
//         block_cart.append(nameCard, val)
//         pl.append(block_cart)
//     }
// }