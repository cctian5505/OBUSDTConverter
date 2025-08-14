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

// 57.28 BUY
// 57.17 SELL

// 34.0340 BUY
// 31.9680 SELL

function process() {
  quantityValue = Number(quantityEl.value);
  p2pBuyValue = Number(p2pBuyEl.value);
  p2pSellValue = Number(p2pSellEl.value);

  let totalBuyAmount = (quantityValue * Number(buyRate)) / p2pBuyValue;
  let floorTotalBuyAmount = Math.floor(totalBuyAmount * 100) / 100;
  let totalSellAmount = (quantityValue * Number(sellRate)) / p2pSellValue;
  let ceilSellAmount = Math.ceil(totalSellAmount * 100) / 100;

  console.log(floorTotalBuyAmount);
  console.log(ceilSellAmount);
}

function etopShardsComputation() {
  buyRate = etopShardsBuyRate + etopShardsBuyRate * buyAllowance;
  sellRate = etopShardsSellRate + etopShardsSellRate * sellAllowance;
  process();
}

function vptopShardsComputation() {
  buyRate = vptopShardsBuyRate + vptopShardsBuyRate * buyAllowance;
  sellRate = vptopShardsSellRate + vptopShardsSellRate * sellAllowance;
  process();
}

function csgoEmpireCoinComputation() {
  buyRate = csgoEmpireCoinBuyRate + csgoEmpireCoinBuyRate * buyAllowance;
  sellRate = csgoEmpireCoinSellRate + csgoEmpireCoinSellRate * sellAllowance;
  process();
}

etopShardsBtnEl.addEventListener("click", etopShardsComputation);
vptopShardsBtnEl.addEventListener("click", vptopShardsComputation);
csgoEmpireCoinBtnEl.addEventListener("click", csgoEmpireCoinComputation);

// 11.85963687150838 BUY ---> 11.85
// 12.6066118593668 SELL ---> 11.61
