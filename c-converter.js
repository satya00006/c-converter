const exchangeRates = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.79,
    JPY: 157.20,
    CAD: 1.37,
    INR: 83.50,
};

function convertCurrency() {
    const amountInput = document.getElementById('amount').value.trim();
    const fromCurrency = document.getElementById('fromcurrency').value;
    const toCurrency = document.getElementById('tocurrency').value;
    const resultDiv = document.getElementById('result');

    if (!amountInput || isNaN(amountInput) || parseFloat(amountInput) <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        resultDiv.classList.add('error');
        return;
    }

    resultDiv.classList.remove('error');

    const amount = parseFloat(amountInput);
    const usdAmount = amount / exchangeRates[fromCurrency];
    const convertedAmount = usdAmount * exchangeRates[toCurrency];

    resultDiv.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

function swapCurrencies() {
    const fromCurrency = document.getElementById('fromcurrency');
    const toCurrency = document.getElementById('tocurrency');

    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];

    convertCurrency();
}

document.getElementById('convertbutton').addEventListener('click', convertCurrency);
document.getElementById('swapbutton').addEventListener('click', swapCurrencies);
