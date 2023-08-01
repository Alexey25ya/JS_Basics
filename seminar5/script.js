// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// Удалите свойство surname

const weekday = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Восскресенье'
}
console.log(weekday[2]);

const user = {
    name: 'Пётр',
    surname: 'Петров',
    age: 25
}

console.log(`${user.surname} - ${user.name} - ${user.age}`);

//user.patronymic = prompt('Введите ваше отчество:');
console.log(user);

delete user.surname;
console.log(user);

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера (или наоборот)
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
if (arr1.length !== arr2.length) {
    console.log("Длины массивов не совпадают");
} else {
    const week = {};
    for (let i = 0; i < arr2.length; i++) {
        week[arr2[i]] = arr1[i];
    }
    console.log(week);
}

const obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
    obj[key] **= 2;
}
console.log(obj);

// const obj = {
//     key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//     },
//     key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//     },
//     key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//     },
//     }
// Найти сумму элементов объекта

const object = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}

let sum = 0;
for (const key in object) {
    for (const value in object[key]) {
        sum += object[key][value];
    }
}
console.log(sum);
console.log(
    Object.values(object)
        .map(item => Object.values(item).reduce((sum, a) => sum + a, 0))
        .reduce((partialSum, a) => partialSum + a, 0)
);
// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который задает вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
    question:
        "Сидит дет, во сто шуб одет. Кто его раздевает, тот слезы проливает.",
    answer: "Лук",
    count: 0,
    hints: ['Используют в готовке', 'растет на даче'],
    askQuestion: function () {
        userUnswer = prompt(this.question);
        while (this.count < 2) {
            if (this.answer === userUnswer) {
                this.count = 3;
                alert("Верно");
            } else {
                userUnswer = prompt(`Неверно, попробуйте еще. Подсказка ${this.hints[this.count]}`);
                this.count++;
            }
        }
    },
};
riddles.askQuestion();


const riddles2 =
{
    question: 'Зимой и летом одним цветом?',
    answer: 'елка',
    hints: ['в лесу родилась . . .', 'на новый год', 'новая подсказка'],
    askQustion() {
        let userAnswer;

        do {
            userAnswer = prompt(this.question);
            if (this.answer !== userAnswer.toLowerCase()) {
                if (this.hints.length !== 0) {
                    alert(`Подсказка: ${this.hints.pop()}`)
                } else {
                    alert('ПОдсказки закончились, выходим');
                    break;
                }
            } else {
                alert('Молодец');
            }

        } while (this.answer !== userAnswer.toLowerCase());
    }
};


const riddles3 =
{
    question: 'Зимой и летом одним цветом?',
    answer: 'елка',
    askQustion3: function (userAnswer) {
        console.log(
            this.answer != userAnswer.toLowerCase()
                ? 'Вы проиграли'
                : 'Молодец');
    }
};

riddles3.askQustion3(prompt(riddles.question));