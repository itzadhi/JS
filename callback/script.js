let timer = 10;
let display = document.getElementById('display');
console.log('hello timeout');
setTimeout(() => {
  console.log('1');
  display.innerText = timer--;
  setTimeout(() => {
    console.log('2');
    display.innerText = timer--;
    setTimeout(() => {
      display.innerText = timer--;
      setTimeout(() => {
        display.innerText = timer--;
        setTimeout(() => {
          display.innerText = timer--;
          setTimeout(() => {
            display.innerText = timer--;
            setTimeout(() => {
              display.innerText = timer--;
              setTimeout(() => {
                display.innerText = timer--;
                setTimeout(() => {
                  display.innerText = timer--;
                  setTimeout(() => {
                    display.innerText = timer--;
                    setTimeout(() => {
                      display.innerText = 'Happy Independence Day!';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
