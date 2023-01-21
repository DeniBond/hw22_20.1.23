class Products {
    #id;
    #title;
    #manufacture;
    #price;

    constructor(id, title, manufacture, price) {
        this.#id = (Math.random()*100000).toFixed(0);
        this.#manufacture = manufacture;
        this.#title = title;
        this.#price = price;
    }

    get id() {
        return this.#id;
    }
    set id(value){
        this.#id = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get manufacture() {
        return this.#manufacture;
    }

    set manufacture(value) {
        this.#manufacture = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }
}

class Chocolate extends Products {
    #kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.#kind = kind;
    }

    get kind() {
        return this.#kind;
    }

    set kind(value) {
        this.#kind = value;
    }
}

class Milk extends Products {
    #fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.#fat = fat;
    }

    get fat() {
        return this.#fat;
    }

    set fat(value) {
        this.#fat = value;
    }
}

class Wine extends Products {
    #alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.#alcohol = alcohol;
    }

    get alcohol() {
        return this.#alcohol;
    }

    set alcohol(value) {
        this.#alcohol = value;
    }
}

class Store {
    #products;

    constructor(products) {
        this.#products = [];
    }

    addProduct(product) {
        if (this.#products.find(p => p.id === product.id)) {
            return false;
        } else {
            this.#products.push(product);
            return true;
        }
    }

    getByType(type) {
        return this.#products.filter(value => value.constructor.name === type);
    }

    getAllProducts() {
        return this.#products;
    }
}


