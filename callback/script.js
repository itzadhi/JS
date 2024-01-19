let timer = 10;
let display = document.querySelector('.display');
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
