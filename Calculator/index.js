//My Rates
const etopShardsBuyRate = 32;
const etopShardsSellRate = 34;
const vptopShardsBuyRate = 0.5;
const vptopShardsSellRate = 0.55;
const csgoEmpireCoinBuyRate = 34;
const csgoEmpireCoinSellRate = 36;

// Allowance
const buyAllowance = -0.001;
const sellAllowance = 0.001;

//
const p2pBuyEl = document.getElementById("p2p-buy-el");
const p2pSellEl = document.getElementById("p2p-sell-el");
const quantityEl = document.getElementById("quantity-el");
const etopShardsBtnEl = document.getElementById("etop-shards-btn-el");
const vptopShardsBtnEl = document.getElementById("vptop-shards-btn-el");
const csgoEmpireCoinBtnEl = document.getElementById("csgo-empire-coin-btn-el");
const resultEL = document.getElementById("result-el");

function dateNow() {
  let now = new Date();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let formattedDate = `${months[now.getMonth()]}/${String(
    now.getDate()
  ).padStart(2, "0")}/${String(now.getFullYear()).slice(-2)} ${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  return formattedDate;
}

function process() {
  quantityValue = Number(quantityEl.value);
  p2pBuyValue = Number(p2pBuyEl.value);
  p2pSellValue = Number(p2pSellEl.value);

  let totalBuyAmount = (quantityValue * Number(buyRate)) / p2pBuyValue;
  let floorTotalBuyAmount = Math.floor(totalBuyAmount * 100) / 100;
  let totalSellAmount = (quantityValue * Number(sellRate)) / p2pSellValue;
  let ceilSellAmount = Math.ceil(totalSellAmount * 100) / 100;

  result = `
    <div id="buy-result">
      <p>${site} BUYING RATE AS OF ${dateNow()}</p>
      <p>Total</p>
      <p>${quantityValue} ${site} = ${floorTotalBuyAmount} USDT</p>
    </div>
    <div id="sell-result">
      <p>${site} SELLING RATE AS OF ${dateNow()}</p>
      <p>Total</p>
      <p>${quantityValue} ${site} = ${ceilSellAmount} USDT</p>
    </div>
    <div id="rate-summary">
      <p><strong>CURRENT BUY RATE : ${currentBuyRate}</strong></p>
      <p><strong>CURRENT SELL RATE : ${currentSellRate}</strong></p>
    </div>
      `;

  resultEL.innerHTML = result;
}

function etopShardsComputation() {
  buyRate = etopShardsBuyRate + etopShardsBuyRate * buyAllowance;
  sellRate = etopShardsSellRate + etopShardsSellRate * sellAllowance;
  site = "ETOP FUN SHARDS";
  currentBuyRate = etopShardsBuyRate;
  currentSellRate = etopShardsSellRate;
  process();
}

function vptopShardsComputation() {
  buyRate = vptopShardsBuyRate + vptopShardsBuyRate * buyAllowance;
  sellRate = vptopShardsSellRate + vptopShardsSellRate * sellAllowance;
  site = "VPTOP SHARDS";
  currentBuyRate = vptopShardsBuyRate;
  currentSellRate = vptopShardsSellRate;
  process();
}

function csgoEmpireCoinComputation() {
  buyRate = csgoEmpireCoinBuyRate + csgoEmpireCoinBuyRate * buyAllowance;
  sellRate = csgoEmpireCoinSellRate + csgoEmpireCoinSellRate * sellAllowance;
  site = "CSGO EMPIRE COINS";
  currentBuyRate = csgoEmpireCoinBuyRate;
  currentSellRate = csgoEmpireCoinSellRate;
  process();
}

etopShardsBtnEl.addEventListener("click", etopShardsComputation);
vptopShardsBtnEl.addEventListener("click", vptopShardsComputation);
csgoEmpireCoinBtnEl.addEventListener("click", csgoEmpireCoinComputation);
