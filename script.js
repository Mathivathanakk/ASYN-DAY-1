const span1 = document.getElementById("container");

setTimeout(() => {
  span1.innerHTML = "10";
  setTimeout(() => {
    span1.innerHTML = "9";
    setTimeout(() => {
      span1.innerHTML = "8";
      setTimeout(() => {
        span1.innerHTML = "7";
        setTimeout(() => {
          span1.innerHTML = "6";
          setTimeout(() => {
            span1.innerHTML = "5";
            setTimeout(() => {
              span1.innerHTML = "4";
              setTimeout(() => {
                span1.innerHTML = "3";
                setTimeout(() => {
                  span1.innerHTML = "2";
                  setTimeout(() => {
                    span1.innerHTML = "1";
                    setTimeout(() => {
                      span1.innerHTML = "HAPPY INDEPENDENCE DAY";
                    });
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
