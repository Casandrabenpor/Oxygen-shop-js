// GET
// precio en dolares
let basicUsd = 0;
let professionalUsd = 25;
let premiumUsd = 60;

let gbpButton = document.getElementById("gbp");
gbpButton.addEventListener('click', function () {
    let currencyChange = getData("gbp");
    modifyPrice(currencyChange, "£");
});


let eurButton = document.getElementById("eur");
eurButton.addEventListener('click', function () {
    let currencyChange = getData("eur");
    modifyPrice(currencyChange, "€");
});

let usdButton = document.getElementById("usd");
usdButton.addEventListener('click', function (
    ) {
        let price1 = document.getElementById("price1");
        let price2 = document.getElementById("price2");
        let price3 = document.getElementById("price3");
        price1.innerHTML = `$ ${basicUsd} `;
        price2.innerHTML = `$ ${professionalUsd} `;
        price3.innerHTML = `$ ${premiumUsd} `;
    

});



//currencySymbol = € / $ / £
const modifyPrice = async (currencyChangeAsync, currencySymbol) =>{
    let currencyChange = await currencyChangeAsync;

    let basicPrice = Math.round (currencyChange * basicUsd);
    let professionalPrice = Math.round( currencyChange * professionalUsd);
    let premiumPrice =  Math.round(currencyChange * premiumUsd);

    let price1 = document.getElementById("price1");
    let price2 = document.getElementById("price2");
    let price3 = document.getElementById("price3");

    price1.innerHTML = `${currencySymbol} ${basicPrice}`;
    price2.innerHTML = `${currencySymbol} ${professionalPrice}`;
    price3.innerHTML = `${currencySymbol} ${premiumPrice}`;
   
};



const getData = async (currency) => {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
        const responseData = await response.json();


        if (currency === "eur") {
            return responseData.usd.eur;
        } else {
            return responseData.usd.gbp;
        }

        // mostrar los datos
    } catch (error) {
        console.error(error);
    }
}

// getData();
