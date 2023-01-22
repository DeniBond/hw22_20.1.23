//Creating store
const myStore = new Store();


// Products to add
const jpchenet = new Wine('79053', 'JP.Chenet White Dry', 'France', 34.90, 12.5);
const pouillyFume = new Wine('26793', 'POUILLY FUME', 'France', 125.00, 12.0);
const milk = new Milk('62972', 'Milk', 'Israel', 5.90, 3);
const WhiteKing = new Milk('68972', 'White king', 'USA', 8.90, 1);
const milka = new Chocolate('76406', 'Milka', 'Italy', 11.20, ':)');
const darkChocolate = new Chocolate('347296', 'Dark chocolate ', 'Germany', 16.00, ':(');

myStore.addProduct(pouillyFume);
myStore.addProduct(jpchenet);
myStore.addProduct(WhiteKing);
myStore.addProduct(milka);
myStore.addProduct(darkChocolate);
myStore.addProduct(milk);



console.log(myStore.getByType('Wine'))



const form = document.querySelector('.form-loader');
const content = document.querySelector('.content');
const addProductTab = document.querySelector('#addLink');
const showProductTab = document.querySelector('#productsLink');
const sideNav = document.querySelector('.side-nav');
const listNav = document.querySelector('.changeable-list');
renderCards(myStore.getAllProducts())

form.addEventListener('change', e => {
    console.log(e.target.value)
    switch (e.target.value) {
        case 'milk': {
            form.querySelector('.not-default-elm').innerHTML = `
            <input id="not-default-elm" class="form-control" type="number" name="fat"
                         placeholder="Type fat">`;
            break;
        }
        case 'chocolate':
            form.querySelector('.not-default-elm').innerHTML = `
            <input id="not-default-elm" class="form-control" type="text" name="kind"
                         placeholder="Type kind">`;
            break;
        case 'wine':
            form.querySelector('.not-default-elm').innerHTML = `
            <input id="not-default-elm" class="form-control" type="number" name="alcohol"
                         placeholder="Type alcohol"> `;
            break;
    }
})

form.onsubmit = e => {
    e.preventDefault();
    let newProduct = {};
    switch (e.target.type.value) {
        case 'milk': {
            newProduct = new Milk(
                e.target.p_id.value,
                e.target.title.value,
                e.target.manufc.value,
                e.target.price.value,
                e.target.fat.value);
            break;
        }
        case 'chocolate': {
            newProduct = new Chocolate(
                e.target.p_id.value,
                e.target.title.value,
                e.target.manufc.value,
                e.target.price.value,
                e.target.kind.value);
            break;
        }
        case 'wine': {
            newProduct = new Wine(
                e.target.p_id.value,
                e.target.title.value,
                e.target.manufc.value,
                e.target.price.value,
                e.target.alcohol.value);
            break;
        }
    }
    myStore.addProduct(newProduct);
    console.log(myStore.getAllProducts());
    form.reset();
}

addProductTab.onclick = e => {
    form.style.display = 'block';
    sideNav.style.display = 'none';
    content.style.display = 'none';
    document.querySelector('#section').style.justifyContent = 'center';
    addProductTab.classList.add('active');
    showProductTab.classList.remove('active');
}

showProductTab.onclick = e => {
    form.style.display = 'none';
    content.style.display = 'flex';
    sideNav.style.display = 'block';
    addProductTab.classList.remove('active');
    showProductTab.classList.add('active');
}

function renderCards(products) {

    function getNotDefaultProperty(productOfNewArray) {
        if (productOfNewArray.fat) return `Fat: ${productOfNewArray.fat}`;
        else if(productOfNewArray.kind) return `Kind: ${productOfNewArray.kind}`;
        else if (productOfNewArray.alcohol) return `Alcohol: ${productOfNewArray.alcohol} %`;
    }

    function card(productOfNewArray) { //array created with map
        return `<div class="card">
<h2>Type: ${productOfNewArray.constructor.name}</h2>
<h3>Title: ${productOfNewArray.title}</h3>
<h3>Id: ${productOfNewArray.id}</h3>
<h3>Manufacture: ${productOfNewArray.manufacture}</h3>
<h3>Price: ${productOfNewArray.price}</h3>
<h3>${getNotDefaultProperty(productOfNewArray)}</h3>
</div>`
    }

    content.innerHTML = products.map(card).join('\n');
}

listNav.onclick = e =>{
    document.querySelectorAll('.changeable-list li').forEach(value =>
        value.classList.remove('active')
    )
    if (e.target.dataset.name){
        renderCards(myStore.getByType(e.target.dataset.name));
        e.target.classList.add('active');
    }
    else {
        renderCards(myStore.getAllProducts())
        e.target.classList.add('active');
    }

}


