const alphabet = "A/BCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetContainer = document.getElementById("alphabetButtons");

for (const letter of alphabet) {
    const button = document.createElement("button");
    button.innerText = letter;
    button.classList.add("alphabet-btn");
    button.onclick = () => filterMealsByLetter(letter);
    alphabetContainer.appendChild(button);
}

function getRandomMeal() {
    const imageUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(imageUrl)
    .then(response => response.json())
    .then(data => {
        const meal = data.meals[0];
        const mealName = meal.strMeal;
        const mealImage = meal.strMealThumb;
        const mealId = meal.idMeal;

        const card = document.createElement('div');
        card.className = 'meal-card';
        card.innerHTML = `
            <img src='${mealImage}' alt='${mealName}' />
            <h3>${mealName}</h3>
        `;

        document.getElementById('mealContainer').appendChild(card);
    })
    .catch(error => {
        console.error('error', error);
    });
}

function filterMealsByLetter(letter) {
    const imageUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter.toLowerCase();

    fetch(imageUrl)
    .then(response => response.json())
    .then(data => {
        const meals = data.meals;

        const mealContainer = document.getElementById("mealContainer");
        mealContainer.innerHTML = "";

        if (meals) {
            for (const meal of meals) {
                const mealName = meal.strMeal;
                const mealImage = meal.strMealThumb;

                const card = document.createElement('div');
                card.className = 'meal-card';
                card.innerHTML = `
                    <img src='${mealImage}' alt='${mealName}' />
                    <h3>${mealName}</h3>
                `;

                mealContainer.appendChild(card);
            }
        } else {
            mealContainer.innerHTML = "";
        }
    })
    .catch(error => {
        console.error('error', error);
    });
}

window.onload = function() {
    for (const _ of Array(6)) {
        getRandomMeal();
    }
};
