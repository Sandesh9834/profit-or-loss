var initialPrice = document.querySelector("#stock-price");
var stocksBought = document.querySelector("#stocks-bought");
var currentPrice = document.querySelector("#current-price");
var checkResult = document.querySelector("#btn-check");
var displayMessage = document.querySelector("#output");

function profitloss(priceInitial, totalStocks, priceCurrent)
{
      var initialStockValue = Number(priceInitial*totalStocks);
      var finalStockValue = Number(priceCurrent*totalStocks);

      if(finalStockValue > initialStockValue)
      {
            displayMessage.innerText = "Hey! You are in PROFIT";
      }
      else
      {
            displayMessage.innerText = "Sorry! You are in LOSS";
      }
}

function onClick()
{
      var priceInitial = Number(initialPrice.value);
      var totalStocks = Number(stocksBought.value);
      var priceCurrent = Number(currentPrice.value);
      
      if(priceInitial && totalStocks && priceCurrent)
      {
            profitloss(priceInitial, totalStocks, priceCurrent)
      }
      else
      {
            displayMessage.innerText = "Enter all the needed values";
      }

      // console.log(`Initial Price of stock is ${priceInitial} and type is ` + typeof(priceInitial));
      // console.log(`Bought stock is ${totalStocks} and type is `+ typeof(totalStocks));
      // console.log(`Current Price of stock is ${priceCurrent} and type is ` + typeof(priceCurrent));
}


checkResult.addEventListener("click", onClick)