const {CryptoCurrency} = require('./crypto-currency')

const btc = new CryptoCurrency('BTC', 1200);

btc.on(btc.CHANGE_PRICE_EVENT, value => {
    console.log(value);
})


btc.price = 1180;