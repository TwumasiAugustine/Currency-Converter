const converterBtn = document.getElementById('converter')

converterBtn.addEventListener('click', () => {
    let input = document.getElementById('input');
    let cedi = document.getElementById('fromCedi');
    let otherCurrencies = document.getElementById('currency');
    let result = document.getElementById('results');

    switch(otherCurrencies.value){
        case "USD":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.17} USD`;
            break;
        case "EUR":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.15} EUR`;
            break;
        case "GBP":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.13} GBP`;
            break;
        case "CFA":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.23} CFA`;
            break;
        case "YEN":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.22} YEN`;
            break;
        case "NGN":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.16} NGN`;
            break;
        case "INR":
            result.innerHTML = `The equivalent of ${input.value} Ghana Cedis is ${input.value * 0.22} INR`;
            break;
        default:
            result.innerHTML = `Select currency to convert!`;
    }
});


