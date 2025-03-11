const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const countryInfo = document.createElement('div'); 
document.body.appendChild(countryInfo); 

btn.addEventListener('click', () => {
    const countryName = input.value.trim();
    

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
    
        .then(data => {
        const country = data[0]; 

            countryInfo.innerHTML = `
                <div style="border: 1px solid #ddd; padding: 20px; margin-top:  20px; text-align: center;">

                 <img src="${country.flags.png}" alt="Flag" style="width: 150px;  height: 100px;">
                
                 <h2>${country.name.official}</h2>
                
                 <h2>${country.name.common}</h2>

                 <p><strong>Population:</strong> ${country.population}</p>

                 <p><strong>Capital:</strong> ${country.capital}</p>

                 
                 <p><strong>Independence :</strong> ${country.independent ?  "Independent" : "Dependent"}</p>

                 <p><strong>Capital :</strong>${country.capital}</p>

                 <p><strong>Area :</strong>${country.area} (km)2</p>
                
                 <p><strong>Continent: </strong>${country.continents}</p>
                 
                 <p><strong>Calling code: </strong>${country.idd.root}</p>

                      <p><strong>Car Singns: </strong>${country.car.signs}</p>
                  <p><strong>Timezone : </strong>${country.timezones}</p>
                        

                </div>
            `;
        })
        
});