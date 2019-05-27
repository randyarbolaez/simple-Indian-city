let state = document.getElementById('state');
let city = document.getElementById('city');
let district = document.getElementById('district');

function getCity() {
  fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities')
    .then(res => res.json())
    .then(res => {
      let randomCity = res[Math.floor(Math.random() * res.length)];
      state.innerHTML = `
      <a target="_blank" href="https://en.wikipedia.org/wiki/${
        randomCity.State
      }">State | ${randomCity.State} |</a>
      `;
      city.innerHTML = `
      <a target="_blank" href="https://en.wikipedia.org/wiki/${
        randomCity.City
      }"> City | ${randomCity.City} |</a>
     `;
      district.innerHTML = `
      <a target="_blank" href="https://en.wikipedia.org/wiki/${
        randomCity.District
      }"> District | ${randomCity.District} |</a>
     `;
    });
}
