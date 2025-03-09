fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        let html = '';

        for (const user of users) {
            html += `
                <h4 class='user'>${user.name}</h4>
                <p><strong>Company: </strong>${user.company.name}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Phone number:</strong> ${user.phone}</p>
                <hr>`;
        }

        
        const rootElement = document.querySelector('.root');
        rootElement.innerHTML = html;
    })
    .catch((err) => {
        console.error(err);
        
    })
    .finally(() => {
        console.log("Бул дайым иштейт");
    });



