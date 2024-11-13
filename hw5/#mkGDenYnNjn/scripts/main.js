const exchange = (sumUAH, currencyValue, exchangeCurrency) => {
    if (sumUAH <= 0) {
        return 'sumUAH must be > 0';
    }
    let exchangeRate = null;
    for (const currency of currencyValue) {
        if (currency.currency === exchangeCurrency) {
            exchangeRate = sumUAH / currency.value;
            return exchangeRate;
        }
    }
    return 'Exchange rate not found'

}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));