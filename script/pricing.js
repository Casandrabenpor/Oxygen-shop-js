// GET
// precio en dolares
let basicUsd = 0;
let professionalUsd = 25;
let premiumUsd = 60;


let gbpButton = document.getElementById("gbp");
gbpButton.addEventListener('click', function () {
    //devuelve la promesa del factor de cambio de libras
    let currencyChange = getData("gbp");
    //modigica precio
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
        //cambia precio con el valor por defecto de arriba
        price1.innerHTML = `$${basicUsd} `;
        price2.innerHTML = `$${professionalUsd} `;
        price3.innerHTML = `$${premiumUsd} `;
    
  
});



//currencySymbol = € / $ / £
const modifyPrice = async (currencyChangeAsync, currencySymbol) =>{
    // promesa que espera la respuesta de la api
    let currencyChange = await currencyChangeAsync;
//Marh.round es para redondear el precio.
//Variable que multiplica el precio por defecto con el cambio de moneda,currencyChange es el numero que se recoge de la api
    let basicPrice = Math.round (currencyChange * basicUsd);
    let professionalPrice = Math.round( currencyChange * professionalUsd);
    let premiumPrice =  Math.round(currencyChange * premiumUsd);
//obtienes los elementos html de cada uno de los precios
    let price1 = document.getElementById("price1");
    let price2 = document.getElementById("price2");
    let price3 = document.getElementById("price3");
// actualizar los precios, el simbolo y el precio que se ha calculado
    price1.innerHTML = `${currencySymbol}${basicPrice}`;
    price2.innerHTML = `${currencySymbol}${professionalPrice}`;
    price3.innerHTML = `${currencySymbol}${premiumPrice}`;
   
};



const getData = async (currency) => {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
        const responseData = await response.json();

        // si el cambio es igual a eur, devolvemos usd a eur y sino usd a gbp
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
