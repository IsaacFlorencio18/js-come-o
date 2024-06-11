const convertButton = document.querySelector(`.convert-Button`)

function convertValue() {
    const inputCurrencyValue = document.querySelector(`.input-currency`).value
    const currencyValueDeConvert = document.querySelector(`.currency-value-to-convert`)

    const currencyValueConvert = document.querySelector(`.currency-value`)



    const dolarPoda = 5.2

    const convertedValue = inputCurrencyValue / dolarPoda

    currencyValueDeConvert.innerHTML = new Intl.NumberFormat(`pt-BR`, {
        style: `currency`,
        currency: `BRL`
    }) .format(inputCurrencyValue)
currencyValueConvert.innerHTML = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`
}) .format(convertedValue)

}

convertButton.addEventListener(`click`, convertValue)  