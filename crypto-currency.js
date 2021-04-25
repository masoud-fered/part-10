const {EventEmitter} = require('events');

class CryptoCurrency extends EventEmitter {
    CHANGE_PRICE_EVENT = 'changePrice'

    constructor(name, price) {
        super();
        this._name = name;
        this._price = price;
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
        super.emit(this.CHANGE_PRICE_EVENT, this._price, value);
        this._price = value;
    }
}

module.exports = {CryptoCurrency};