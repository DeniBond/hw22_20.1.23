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

const form = document.querySelector('.form-loader');

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
            <input id="not-default-elm" class="form-control" type="number" name="kind"
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




