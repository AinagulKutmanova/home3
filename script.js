//1- тапшырма


const journey = [
    { distance: 600, speed: 100 },
    { distance: 1000, speed: 60 },
    { distance: 1200, speed: 90 },
    { distance: 800, speed: 80 },
    { distance: 500, speed: 70 }

];

function getTime(distance, speed) {
    if (speed <= 0) {
        return 'ылдамдык 0 болбош керек'
    }

    let time = distance / speed;
    return `Жолдун узундугу ${distance}: ылдамдык : ${speed} убакыт:${time} саат`
}
for (let i = 0; i < journey.length; i++) {
    console.log(getTime(journey[i].distance, journey[i].speed));
}

// 2-тапшырма

const income = 70000;
const categories = [
    { name: 'food', percentage: 0.5 },
    { name:'publicServis', percentage: 0.3 },
    { name: 'clothes', percentage: 0.1 },
    { name:'entertatement', percentage: 0.1 },
];

let totalPercentage = 0;


for (let i = 0; i < categories.length; i++) {
    totalPercentage += categories[i].percentage;
}


if (totalPercentage !== 1) {
    console.log("");
} else {
    console.log('Айлык томонкудой болуштурулду:');
    
    for (let i = 0; i < categories.length; i++) {
        let amount = income * categories[i].percentage
        console.log(`${categories[i].name}: ${amount} сом`);
    }
}

// 3-тапшырма
const products = [
    { name: "Tv", total: 50, sold: 20 },
    { name: "Phone", total: 100, sold: 45 },
    { name: "earphone", total: 30, sold: 10 },
    { name: "laptop", total: 80, sold: 25 }
];


function calculateItems(items) {
    console.log("");

    for (let i = 0; i < items.length; i++) {
        let kalganTovar = items[i].total - items[i].sold;
        if (kalganTovar <= 0) {
            console.log(`${items[i].name}: Товар жок`);
        } else {
            console.log(`${items[i].name} ${items[i].total} даана болчу: ${kalganTovar} даана калды`);
        }
    }
}


calculateItems(products);
