const ul = document.querySelector('ul')
const but = document.querySelector('button')
const getText = document.querySelector('input')
const parent = document.querySelector('div.grid')

const getData = async (item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    const recipies = data.hits
    recipies.forEach(item => {
        console.log(item.recipe)
        const template = ` 
                        <img class="card__image" src="$(image)" />
                        <div class="card__data">
                            <div class="card__info">
                                <h2>Nombre Comida</h2>
                                <p>Descripcion de la comida, con ingredientes</p>
                            </div>
                            <h3 class="card__price">$7.50</h3>
                            <button class="card__add">+</button>
                        </div>
                    `
        const newCard = document.createElement('article')
        newCard.setAttribute('class', 'card')
        newCard.setAttribute('style','margin:10px')
        newCard.innerHTML = template
        console.log(newCard)
        parent.appendChild(newCard)
    })

}

//  add event listener to the button
but.addEventListener('click', (e) => {
    getData(getText.value)
})

const person = ({
    name:"prem",
    age:19,
    country:"INDIA"
})

const {name, age, country} = person

console.log(name,country,age)