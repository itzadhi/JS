const restCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return displayData(data);
};

function displayData(data) {
  let mainContainer = document.createElement('div');
  mainContainer.classList.add('container');

  let header = document.createElement('h1');
  header.id = 'title';
  header.classList.add('text-center', 'fs-2');
  header.innerText = 'Rest Countries with Weather Details';

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
          <div id=${data[i].name.common} class="card-text d-flex flex-column ">
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
  }
  mainContainer.append(header, container);
  document.body.append(mainContainer);
}

const weatherApi = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ae271f72ce5677f1897de2c25eb5998`
  );
  const data = await response.json();
  alert(
    'Temperature: ' + data.main.temp + ' and Humidity: ' + data.main.humidity
  );
  return data.main.temp;
};

restCountries();
