fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    return process(data);
  });

let temperature = null;

function process(data) {
  let mainContainer = document.createElement('div');
  mainContainer.classList.add('container');

  let container = document.createElement('div');
  container.id = 'card';
  container.classList.add('row');

  for (let i = 0; i < data.length; i++) {
    let cardWrapper = document.createElement('div'); //'card', 'bg-dark', 'm-3',
    cardWrapper.classList.add(
      'col-xl-4',
      'col-lg-4',
      'col-md-4',
      'col-sm-6',
      'd-flex',
      'justify-content-center',
      'mb-1'
    );

    cardWrapper.innerHTML = `
      <div class='card h-100 bg-dark card-container'>
        <div class="card-header">
          <div class="text-center bg-black fs-5 p-3 text-truncate text-light rounded-2">
            ${data[i].name.common}
          </div>
        </div>
        <div class="card-body">
          <img src=${data[i].flags.png} class="card-img-top my-brand-image">
          <div class="card-text d-flex flex-column ">
            <p class="card-subtitle text-center text-light pb-2 mt-2">Capital :${data[i].capital}</p>
            <p class="card-subtitle text-center text-light pb-2">Region :${data[i].region}</p>
            <p class="card-subtitle text-center text-light pb-2">Country Code :${data[i].cca3}</p>
            <p class="card-subtitle text-center text-light pb-2">Lat Lon:${data[i].latlng}</p>
            <button class="btn btn-primary align-self-center" onclick="weatherApi(${data[i].latlng[0]},${data[i].latlng[1]})">Click for Weather</button>   
          </div>
        </div>
      </div>
    `;

    container.append(cardWrapper);

    // let cardHeader = document.createElement('div');
    // cardHeader.classList.add(
    //   'card-title',
    //   'text-center',
    //   'bg-black',
    //   'fs-5',
    //   'p-3',
    //   'text-truncate',
    //   'text-light'
    // );

    // cardHeader.classList.add('card-header');

    // let cardHeaderTitle = document.createElement('h4');
    // cardHeaderTitle.classList.add(
    //   'card-title',
    //   'd-flex',
    //   'justify-content-center'
    // );

    // cardHeaderTitle.innerHTML = data[i].name.common;

    // cardHeader.append(cardHeaderTitle);

    // let cardImage = document.createElement('img');
    // cardImage.classList.add('card-img', 'p-2', 'my-brand-image');
    // cardImage.src = data[i].flags.png;

    // let capital = document.createElement('div');
    // capital.classList.add('card-subtitle', 'text-center', 'text-light', 'pb-1');
    // capital.innerHTML = `Capital : ${data[i].capital}`;

    // let region = document.createElement('div');
    // region.classList.add(
    //   'card-body',
    //   'card-text',
    //   'card-subtitle',
    //   'text-center',
    //   'text-light',
    //   'pb-1'
    // );
    // region.innerHTML = `Region : ${data[i].region}`;

    // let countryCode = document.createElement('div');
    // countryCode.classList.add(
    //   'card-text',
    //   'card-subtitle',
    //   'text-center',
    //   'text-light',
    //   'pb-1'
    // );
    // countryCode.innerHTML = `Country Code  : ${data[i].cca3}`;

    // let button = document.createElement('btn');
    // button.classList.add('btn', 'btn-primary', 'align-self-center', 'mb-4');
    // button.innerText = 'Click for Weather';

    // card.append(cardHeader, cardImage, capital, region, countryCode, button);

    // cardWrapper.append(card);
  }
  mainContainer.append(container);
  document.body.append(mainContainer);
}

if (temperature != null) {
  let btn = document.getElementsByClassName('btn');
  console.log('11', btn);
}

async function weatherApi(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ae271f72ce5677f1897de2c25eb5998`
  );
  const data = await response.json();
  alert('Temperature: ' + data.main.temp);
  return data.main.temp;
}
