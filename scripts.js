const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

// const dolarToday = 4.8
// const euroToday = 5.2
// const libraToday = 6.0



const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())


    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    


    if (currencySelect.value == "dolar") { //Se o select estiver selecionado o valor dolar,
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
 
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    convertValues()
}

    

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)
