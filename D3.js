//1.Compare two objects without any order
let obj1 = {
  name: 'Person1',
  age: 5,
};
let obj2 = {
  age: 5,
  name: 'Person1',
};

function check(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(check(obj1, obj2));

//2 & 3.Display all country flags and name, region, sub region and population
let api = fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    //Display all country flags in console
    data.map((e) => console.log('Flag: ' + e.flag));
    return data;
  })
  .then((data) => {
    //Print the following details name, region, sub region and population
    data.map((e) =>
      console.log(
        'Name: ' +
          e.name.common +
          ' Region: ' +
          e.region +
          ' Sub-Region: ' +
          e.subregion +
          ' Population: ' +
          e.population
      )
    );
    return data;
  });
