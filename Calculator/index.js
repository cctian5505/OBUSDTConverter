//My Rates
const etopShardsSellRate = 34;
const etopShardsBuyRate = 32;
const vptopShardsSellRate = 0.55;
const vptopShardsBuyRate = 0.5;
const csgoEmpireCoinSellRate = 36;
const csgoEmpireCoinBuyRate = 34;

// Allowance
const buyAllowance = -0.001;
const sellAllowance = 0.001;

//
const p2pBuyEl = document.getElementById("p2p-buy-el");
const p2pSellEl = document.getElementById("p2p-sell-el");
const quantityEl = document.getElementById("quantity-el");
const etopShardsBtnEl = document.getElementById("etop-shards-btn-el");

function compute() {
  console.log(p2pBuyValue);
}

// 57.28
// 57.17

// 34.0340 BUY
// 31.9680 SELL

function getInputValue() {
  quantityValue = Number(quantityEl.value);
  p2pBuyValue = Number(p2pBuyEl.value);
  p2pSellValue = Number(p2pSellEl.value);
}

function etopShardsComputation() {
  getInputValue();
  // p2pBuyValue = Number(p2pBuyEl.value);
  // p2pSellValue = Number(p2pSellEl.value);
  const totalBuyRate = etopShardsBuyRate + etopShardsBuyRate * buyAllowance;
  const totalSellRate = etopShardsSellRate + etopShardsSellRate * sellAllowance;

  console.log(p2pBuyValue);
  console.log(totalSellRate);
  console.log(`Total Buy Rate ${(quantityValue * totalBuyRate) / p2pBuyValue}`);
}

etopShardsBtnEl.addEventListener("click", etopShardsComputation);
