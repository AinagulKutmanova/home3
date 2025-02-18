const text = document.getElementById('text');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const coffeeInputDiv = document.getElementById('coffeeInputDiv');
const coffeeInput = document.getElementById('coffeeInput');
const submitCoffee = document.getElementById('submitCoffee');

yesBtn.addEventListener('click', function () {
text.innerHTML = "Кандай кофе ичесиз?";
  
coffeeInputDiv.style.display = "block";
      
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    submitCoffee.addEventListener('click', function () {
        const coffee = coffeeInput.value.trim();

        if (coffee) {
         
          text.innerHTML = `Бул сиздин <span style="color: red; text-transform: italic;">${coffee}</span> кофеңиз`;


        } else {
            text.innerHTML = "Сиз кофе тандаган жоксуз!";
        }

        coffeeInputDiv.style.display = "none";
    });

     noBtn.addEventListener('click', function () {
        text.innerHTML = "Бизде кофе гана бар";
      
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });