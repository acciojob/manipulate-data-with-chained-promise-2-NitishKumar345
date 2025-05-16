//your JS code here. If required.
function transformArray() {
      
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      })
    
      .then((arr) => {
        return new Promise((resolve) => {
          const evens = arr.filter(num => num % 2 === 0);
          setTimeout(() => {
            document.getElementById("output").textContent = evens.toString();
            resolve(evens);
          }, 1000);
        });
      })
      
      .then((evens) => {
        return new Promise((resolve) => {
          const multiplied = evens.map(num => num * 2);
          setTimeout(() => {
            document.getElementById("output").textContent = multiplied.toString();
            resolve();
          }, 2000);
        });
      });
    }

    transformArray();