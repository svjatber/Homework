/*
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
let objDog = {
    sex: 'man',
    species: 'Labrador',
     color: 'white',
    coloreyes: 'black',
    tail: true
}
let objPerson = {
    isMan: 'man',
    age: 28,
    work: 'programmer',
    coloreyes: 'green',
    isMarried: true
}
let objCar = {
    isNew: true,
    age: 0,
    model: 'hatchback',
    fromPoland: false,
    color: 'green',
}
let objApartment = {
    isNew: true,
    block: 'downtown',
    square: 45,
    isPoland: false,
    floor: 4
}
let objBook = {
    isNew: true,
    pages: 342,
    about: 'history',
    isInterest: false,
    recom: false
}


//-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let arrDog = ['labrador','shepherd','other','other','other']
let arrPeople = ['ukrainian','russian','american','chinese','english']
let arrCars = ['BMW','TOYOTA','LADA','MERC','TESLA']
console.log(arrDog);
console.log(arrPeople);
console.log(arrCars);

-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка



// Дан массив:
 let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users[7]['status']);
// - статус Максима
console.log(users[4]['status']);
// - ім'я передостаннього об'єкту
console.log(users[9]['name']);
// - ім'я третього об'єкта
console.log(users[2]['name']);
// - вік Олега
console.log(users[6]['age']);
// - вік Олі
console.log(users[3]['age']);
// - вік + ім'я 5го об'єкта
console.log(users[4]['age'] + ' '+ users[4]['name']);
// - вік + сатус Анни
console.log(users[5]['age'] + ' '+users[5]['status']);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

*/

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let content = document.getElementById('content')
let body = document.getElementsByTagName('body')

content.innerHTML = content.id
// - отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
rules.innerHTML = rules.id
// - замініть текст параграфа з id 'content' на будь-який інший
content.innerHTML = 'lorem'
// - замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = 'lorem'
// - змініть кожному елементу колір фону на червоний
for(let elem of body){
    elem.style.backgroundColor= 'red'
}

// - змініть кожному елементу колір тексту на синій
for(let elem of body){
    elem.style.color= 'blue'
}
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.className)
// - отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName('fc_rules')
// - поміняти колір тексту у всіх елементів fc_rules на червоний
for(let elem1 of fcRules){
    elem1.style.color = 'red'
}
// */