const {CryptoCurrency} = require('./crypto-currency')

const btc = new CryptoCurrency('BTC', 1200);

btc.on(btc.CHANGE_PRICE_EVENT, (currentValue, newValue) => {
    const difference = newValue - currentValue;
    const percentageDiff = difference / currentValue * 100;
    console.log(percentageDiff + '%')
})


btc.price = 1180;

btc.price = 1340;