const typesOfLaptops = document.querySelector('.laptops-cards');
const form = document.querySelector('.form');
const buttons = document.querySelectorAll('.btns button');
const createButton = document.querySelector('.create-button');

let laptops = [
    { brand: 'Lenovo', marka: 'ThinkPad', price: 25000, ram: 16, img: 'https://enter.kg/images/stories/virtuemart/product/1_3203_7524.jpg', id: 1, favorite: false },

    { brand: 'Lenovo', marka: 'ThinkPad', price: 30000, ram: 8, img: 'https://enter.kg/images/stories/virtuemart/product/1_1338_3538.jpg', id: 1, favorite: false },
    { brand: 'Acer', marka: 'Aspire', price: 35000, ram: 16, img: 'https://enter.kg/images/stories/virtuemart/product/717_6182.jpeg', id: 3, favorite: false },
    { brand: 'Acer', marka: 'Aspire', price: 42000, ram: 8, img: 'https://enter.kg/images/stories/virtuemart/product/1_8288.jpg', id: 4, favorite: false },
    { brand: 'Asus', marka: 'Asuspro', price: 57000, ram: 16, img: 'https://enter.kg/images/stories/virtuemart/product/1)%20x515_3131.png', id: 5, favorite: false },
    { brand: 'Asus', marka: 'Asuspro', price: 47000, ram: 16, img: 'https://enter.kg/images/stories/virtuemart/product/1_3672_5886.jpg', id: 6, favorite: false },
    { brand: 'Apple', marka: 'iBook', price: 70000, ram: 8, img: 'https://enter.kg/images/stories/virtuemart/product/2_2632.jpg', id: 7, favorite: false },
    { brand: 'Apple', marka: 'iBook', price: 70000, ram: 8, img: 'https://intermedia.kg/upload/resize_cache/iblock/ad1/ekuo4toc8bb3i4x03jho2q2r9ge5f2t1/500_500_1ac738a02c084a5a36e7f75ada4336ade/Apple%20MacBook%20Pro%2016%20FK1E3LL.jpg', id: 9, favorite: false },
];

function showLaptops(arr) {
           
    typesOfLaptops.innerHTML = '';
    for (const laptop of arr) {
  
    let favorClass;
    let colorStyle;
   if (laptop.favorite) {
    favorClass = "bi-heart-fill";
    colorStyle = "color: red;";
    } else {
    favorClass = "bi-heart";
    colorStyle = "color: black;";
           }

    typesOfLaptops.innerHTML += `
        <div class='laptop-card'>
          <img width='200px' src="${laptop.img}" alt="${laptop.marka}"/>
          <h3 class='brand'>${laptop.brand}</h3>
          <h4>${laptop.marka} - RAM: ${laptop.ram}GB</h4>
          <h2 class='price'>${laptop.price} сом</h2>
          <button class='del' onclick='delBtn(${laptop.id})'>Delete</button>

          <button class='heart' onclick='favorite(${laptop.id})'>
          <i class="${favorClass}" style="${colorStyle}"></i>
           </button>
        </div>
        `;
    }
}

function delBtn(id) {
   laptops = laptops.filter(laptop => laptop.id !== id);
    showLaptops(laptops);
}

function favorite(id) {
 const laptop = laptops.find(laptop => laptop.id === id);
    if (laptop) {
        laptop.favorite = !laptop.favorite; 
        showLaptops(laptops); 
    }
}

createButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const brand = document.getElementById('brand').value.trim();
    const marka = document.getElementById('marka').value.trim();
    const ram = Number(document.getElementById('ram').value.trim());
    const price = Number(document.getElementById('price').value.trim());
    const imageUrl = document.getElementById('imageUrl').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!brand || !marka || !ram || !price || !imageUrl) {
         errorMessage.innerText = "*Please complete all fields";
       return;
    }

    if (isNaN(ram) || isNaN(price)) {
        return;
    }

    errorMessage.innerText = "";

    const newLaptop = {
        brand,
        marka,
        ram,
        price,
        img: imageUrl,
        id: laptops.length + 1,
        favorite: false
    };

    laptops.push(newLaptop);
    showLaptops(laptops);
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const brand = this.textContent;
        if (brand === "All") {
            showLaptops(laptops);
        } else {
            const filteredLaptops = laptops.filter(laptop => laptop.brand === brand);
            showLaptops(filteredLaptops);
        }
    });
});

showLaptops(laptops);