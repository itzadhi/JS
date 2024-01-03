let api = fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  //Get all the countries from Asia continent /region using Filter function
  let countries = data.filter((d) => d.region === 'Asia').map((x) => x.name.common);
  console.log('All the countries from Asia continent ',countries.length)
  return data;
})
.then(data => {
  //Get all the countries with a population of less than 2 lakhs using Filter function
  let countriesPopulation = data.filter((d) => d.population < 200000).map((x) => x.name.common);
  console.log('All the countries with population of less than 2 lakhs ', countriesPopulation.length)
  return data;
})
.then(data => {
  //Print the following details name, capital, flag, using forEach function
  // let countriesPopulation = data.forEach(e => 
  //   console.log('Name: ' + e.name.common + ' Capital: ' + e.capital + ' Flag: ' + e.flag)
  // );
  return data;
})
.then(data => {
  //Print the total population of countries using reduce function
  let countriesPopulation = data.reduce(function(sum,curr){
    return sum += curr.population
  }, 0);
  console.log('Total population of countries ', countriesPopulation)
  return data;
})
.then(data => {
  //Print the country that uses US dollars as currency.
  let countriesPopulation = data.filter(d => d.currencies && d.currencies.hasOwnProperty('USD')).map((x) => x.name.common);
  console.log('Countries that uses US dollars as currency ', countriesPopulation.length)
  return data;
})
.catch(error => console.log('Error', error))

