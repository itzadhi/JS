//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
const getCyptoData = async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
    );
    const data = await response.json();
    return displayData(data);
  } catch (error) {
    console.log('error', error);
    console.log('Error');
  }
};

function displayData(data) {
  let mainContainer = document.querySelector('#main-container');
  for (let i = 0; i < 20; i++) {
    let cardWrapper = document.createElement('div');
    cardWrapper.classList.add(
      'col-lg-2',
      'col-md-3',
      'col-sm-6',
      'd-flex',
      'justify-content-center',
      'mb-3'
    );

    cardWrapper.innerHTML = `
    <div class="card card-container shadow">
      <img
        src=${data[i]?.image}
        class="card-img-top p-2"
        alt="..."
      />
      <div class="card-body mt-1 border d-flex flex-column justify-content-between align-items-center">
        <div
          class="w-100 d-inline-flex justify-content-between text-wrap"
        >
          <div class="card-title">${data[i]?.name}(${data[
      i
    ]?.symbol?.toUpperCase()})</div>
          <span class="fs-6">$${data[i]?.current_price}</span>
        </div>
        <div class="card-text">
          24h Change: ${Number(data[i]?.price_change_percentage_24h).toFixed(
            5
          )}%
        </div>
       
      </div>
    </div>`;
    mainContainer.append(cardWrapper);
  }
  document.body.append(mainContainer);
}

// {
//   "id": "bitcoin",
//   "symbol": "btc",
//   "name": "Bitcoin",
//   "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//   "current_price": 69912,
//   "market_cap": 1372438596148,
//   "market_cap_rank": 1,
//   "fully_diluted_valuation": 1466710580596,
//   "total_volume": 30270548536,
//   "high_24h": 70009,
//   "low_24h": 68158,
//   "price_change_24h": 1373.04,
//   "price_change_percentage_24h": 2.00329,
//   "market_cap_change_24h": 24946416928,
//   "market_cap_change_percentage_24h": 1.85132,
//   "circulating_supply": 19650237,
//   "total_supply": 21000000,
//   "max_supply": 21000000,
//   "ath": 70009,
//   "ath_change_percentage": -0.33401,
//   "ath_date": "2024-03-10T10:25:12.902Z",
//   "atl": 67.81,
//   "atl_change_percentage": 102798.89714,
//   "atl_date": "2013-07-06T00:00:00.000Z",
//   "roi": null,
//   "last_updated": "2024-03-10T12:53:04.543Z"
// }

getCyptoData();
