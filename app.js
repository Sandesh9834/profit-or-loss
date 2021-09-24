var initialPrice = document.querySelector("#stock-price");
var stocksBought = document.querySelector("#stocks-bought");
var currentPrice = document.querySelector("#current-price");
var checkResult = document.querySelector("#btn-check");
var displayMessage = document.querySelector("#output");

function profitloss(priceInitial, totalStocks, priceCurrent)
{
      var initialStockValue = Number(priceInitial*totalStocks);
      var finalStockValue = Number(priceCurrent*totalStocks);
      var stockPercent = Number(Math.abs((finalStockValue/initialStockValue)*100-100)).toFixed(2);
      var absoluteValue = Number(Math.abs(finalStockValue-initialStockValue));
      
      if(finalStockValue > initialStockValue)
      {
            displayMessage.innerText = `🥳🤑Hey! You are in PROFIT by ${stockPercent}% and absolute profit is ${absoluteValue} 📈`;
      }
      else if(finalStockValue === initialStockValue)
      {
            displayMessage.innerText = `😑Stock Price is same. No profit no loss `;
      }
      else
      {
            displayMessage.innerText = `😞Sorry! You are in LOSS by ${stockPercent}% and absolute loss is ${absoluteValue} 📉`;
      }
}

function onClick()
{
      var priceInitial = Number(initialPrice.value);
      var totalStocks = Number(stocksBought.value);
      var priceCurrent = Number(currentPrice.value);
      
      if(priceInitial && totalStocks && priceCurrent && priceInitial> 0 && totalStocks>0 && priceCurrent>0 )
      {
            profitloss(priceInitial, totalStocks, priceCurrent)
      }
      else
      {
            displayMessage.innerText = "Enter all the needed and valid values ⚠️";
      }
}

checkResult.addEventListener("click", onClick)