import { menuArray } from "./data.js"

const mainElement = document.querySelector("main")
const billElement = document.getElementById("bill-element")

let itemCount = {
    pizzaCount: 0,
    hamCount: 0,
    beerCount: 0,
}

document.addEventListener('click',function(e){
    if(e.target.dataset.pizza)
    {
        addPizza()
        renderBill()
    }
    if(e.target.dataset.hamburger){
        addHam()
        renderBill()
    }
    if(e.target.dataset.beer){
        addBeer()
        renderBill()
    }
    if (e.target.dataset.pizzaRemove) {
        if (itemCount.pizzaCount > 0) itemCount.pizzaCount -= 1
    }
    if (e.target.dataset.hamRemove) {
        if (itemCount.hamCount > 0) itemCount.hamCount -= 1
    }
    if (e.target.dataset.beerRemove) {
        if (itemCount.beerCount > 0) itemCount.beerCount -= 1
    }
    if(e.target.dataset.order){
        orderIt()
    }
    
    renderBill()
})

function renderBill(){
    billElement.innerHTML = ``

    if(itemCount.pizzaCount || itemCount.hamCount || itemCount.beerCount){
        document.getElementById("order-summary").style.display = "flex"
        
        if(itemCount.pizzaCount){
            billElement.innerHTML += 
            `
                <div class="food-item">
                    <div class="item-order">
                        <h1>Pizza</h1>
                        <button data-pizza-remove="true">remove</button>
                    </div>
                    <p>${itemCount.pizzaCount}</p>
                </div>
            `
        }
        if(itemCount.hamCount){
            billElement.innerHTML += 
            `
                <div class="food-item">
                    <div class="item-order">
                        <h1>HamBurger</h1>
                        <button data-ham-remove="true">remove</button>
                    </div>
                    <p>${itemCount.hamCount}</p>
                </div>
            `
        }
        if(itemCount.beerCount){
            billElement.innerHTML += 
            `
                <div class="food-item">
                    <div class="item-order">
                        <h1>Beer</h1>
                        <button data-beer-remove="true">remove</button>
                    </div>
                    <p>${itemCount.beerCount}</p>
                </div>
            `
        }

        billElement.innerHTML += `
            <button class="btn-order" data-order="orderIt">Complete Order</button>
        `
    } else {
        document.getElementById("order-summary").style.display = "none"
    }
}

document.getElementById('card-form').addEventListener('submit',function(e){
    e.preventDefault()
    document.getElementById('card-element').style.display = "none"
    
    // Reset cart
    itemCount = {
        pizzaCount: 0,
        hamCount: 0,
        beerCount: 0,
    }

    // Hide order summary
    // document.getElementById('order-summary').style.display = "none"

    // Clear bill
    billElement.innerHTML = ``

    // Show thank you message
    
    const formData = new FormData(document.getElementById('card-form'))
    const name = formData.get('fullName')
    
    mainElement.innerHTML += `<h2 class="thank-you">Thanks, ${name}! Your order is on its way!</h2>`
})

function addPizza(){
    itemCount.pizzaCount += 1
}

function addHam(){
    itemCount.hamCount += 1
}

function addBeer(){
    itemCount.beerCount += 1
}

function orderIt(){
    document.getElementById("card-element").style.display = "inline"
    
}



function getFeedHtml(){
    let renderItem = ``
    menuArray.forEach(function(item){
        renderItem += 
         `
            <div class="food_list">
                <div class="flex-elements">
                    <h1>${item.emoji}</h1>
                    <div class="food-desc">
                        <h1>${item.name}</h1>
                        <p>${item.ingredients}</p>
                        <h2>$${item.price}</h2>
                    </div>
                </div>
                <button class="add-btn" data-${item.name.toLowerCase()}="add-${item.name.toLowerCase()}">+</button>
            </div>
        `
    })
    return renderItem
}

function render(){
    mainElement.innerHTML = getFeedHtml()
}

render()


