const {EventEmitter} = require('events');

class CryptoCurrency extends EventEmitter {
    constructor(name, price) {
        super();
        this._name = name;
        this._price = price;
        this.CHANGE_PRICE_EVENT = 'changePrice'
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        return super.emit(this.CHANGE_PRICE_EVENT, value);
    }
}

module.exports = {CryptoCurrency};