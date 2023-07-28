// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {

    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else {
        if (i % 2 === 1) {
            console.log(`${i} - нечетное число`);
        } else {
            console.log(`${i} - четное число`)
        }
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrTask2 = [1, 2, 3, 4, 5, 6, 7];
arrTask2.splice(3, 2);
console.log(arrTask2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arrTask3 = [];

for (let i = 0; i < 5; i++) {
    arrTask3[i] = getRandomInt(0, 9)
}
console.log(arrTask3);

sum = 0;
for (let i = 0; i < arrTask3.length; i++) {
    sum += arrTask3[i];
}


function isElement(array, element) {
    let flag = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            console.log(`В этом массиве ЕСТЬ число ${element}`);
            flag = array[i];
            break;
        }
    }
    if (flag !== element) {
        console.log(`В этом массиве НЕТ числа ${element}`);
    }
}

console.log('Сумма элементов массива равна ' + sum);
console.log('Минимальное число в массиве: ' + Math.min.apply(null, arrTask3));
isElement(arrTask3, 3)

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

const rows = 20;
let str = "x";
console.log(str)
for (let i = 0; i < rows; i++) {
    console.log(str += "x");
}