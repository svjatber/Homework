
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте
/*
let objDog = {
    name: 'Barsik',
    sex: 'man',
    species: 'Labrador'
}
let objPerson = {
    name: 'Akakiy',
    isMan: 'man',
    age: 28,
    
}
let objCar = {
    name: 'Lastochka',
    age: 0,
    model: 'hatchback',
}
let objApartment = {
    isNew: true,
    name: 'dvyshka',
    floor: 4
}
let objBook = {
    isNew: true,
    pages: 342,
    recom: false
}
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let objDog2 = {
    name: 'Barsik',
    sex: ['man','gender'],
    species: {
        gene1: true,
        gene2: false,
        mother: 'Labrador'
    },
}
let objPerson2 = {
    name: 'Akakiy',
    isMan: {
        man: true,
        girl: false
    },
    age: [0,1,2,3,4,5,6,7,8,9,10,11,12],
    
}
let objCar2 = {
    name: 'Lastochka',
    age: [0,1,2,3,4],
    model: { mod1: 'hatchback',
        mod2: 'universal'

    }
}
let objApartment2 = {
    isNew: ['maybe','noy'],
    name: 'dvyshka',
    floor: {
        1: false,
        2:false,
        3:true

    }
}
let objBook2 = {
    isNew: true,
    pages: [1,2,3,4,5,6,7,8,9],
    recom: {
        you: false,
        me: true
    }
}
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for(let elem in objDog){
    console.log(elem)
}
for(let elem1 in objPerson){
    console.log(elem1)
}
for(let elem2 in objCar){
    console.log(elem2)
}
for(let elem3 in objApartment){
    console.log(elem3)
}
for(let elem4 in objBook){
    console.log(elem4)
}
for(let elem11 in objDog2){
    console.log(elem11)
}
for(let elem12 in objPerson2){
    console.log(elem12)
}
for(let elem13 in objCar2){
    console.log(elem13)
}
for(let elem14 in objApartment2){
    console.log(elem14)
}
for(let elem15 in objBook2){
    console.log(elem15)
}

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log( Object.keys(objDog))
console.log( Object.keys(objPerson))
console.log( Object.keys(objCar))
console.log( Object.keys(objApartment))
console.log( Object.keys(objBook))
console.log( Object.keys(objDog2))
console.log( Object.keys(objPerson2))
console.log( Object.keys(objCar2))
console.log(Object.keys(objApartment2))
console.log( Object.keys(objBook2))
*
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
   {
         name: 'mersedes',
        old: 5,
        model: 'E-class',
         color: 'white',
         comfortable: true,
     },
     {
         name: 'BMW',
         old: 10,
         model: '5-sereis',
        color: 'black',
        comfortable: true,
    },
    {
        name: 'Audi',
        old: 3,
        model: 'A8-long',
        color: 'blue',
        comfortable: true,
    },
    {
        name: 'Renault',
        old: 15,        
        model: 'Megane',        
        color: 'white',
        comfortable: false,
    },
    {
        name: 'Suzuki',
        old: 2,
        model: 'Grant vitara',
        color: 'white',
        comfortable: true,
    },
]
console.log(cars);
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let town = [
    {
        name: 'Lviv',
        people: 800000,
        country: 'Ukraine',
        comfortable: true
    },
    {
        name: 'Kyiv',
        people: 2000000,
        country: 'Ukraine',
        comfortable: true
    },
    {
        name: 'California',
        people: 3000000,
        country: 'USA',
        comfortable: true
    },
    {
        name: 'Berlin',
        people: 2500000,
        country: 'Germany',
        comfortable: true
    },
    {
        name: 'Madrid',
        people: 1800000,
        country: 'Spain',
        comfortable: true
    },
]
console.log(town)

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars2 = [
    {
        name: 'mersedes',
        old: 5,
        model: 'E-class',
        color: 'white',
        comfortable: true,
        driver: {
            name: 'oleksii',
            old: 20,
            sex: 'man',
            experience: '2 years',
        }
    },
    {
        name: 'BMW',
        old: 10,
        model: '5-sereis',
        color: 'black',
        comfortable: true,
        driver: {
            name: 'vasya',
            old: 35,
            sex: 'man',
            experience: '10 years',
        }
    },
    {
        name: 'Audi',
        old: 3,
        model: 'A8-long',
        color: 'blue',
        comfortable: true,
        driver: {
            name: 'ira',
            old: 25,
            sex: 'woman',
            experience: '5 years',
        }
    },
    {
        name: 'Renault',
        old: 15,
        model: 'Megane',
        color: 'white',
        comfortable: false,
        driver: {
            name: 'andrii',
            old: 40,
            sex: 'man',
            experience: '20 years',
        }
    },
    {
        name: 'Suzuki',
        old: 2,
        model: 'Grant vitara',
        color: 'white',
        comfortable: true,
        driver: {
            name: 'Petro',
            old: 60,
            sex: 'man',
            experience: '35 years',
        }
    },
]
console.log(cars2);
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let a = 0;
while(a<cars.length){
    console.log(cars[a])
    a++
}
let b = 0
while(b<town.length){
    console.log(town[b])
    b++
}
let c = 0
while(c<cars2.length){
    console.log(cars2[c])
    c++
}
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for(let i =0; i<cars.length;i++){
    console.log(cars[i])
}
for(let i =0; i<town.length;i++){
    console.log(town[i])
}
for(let i =0; i<cars2.length;i++){
    console.log(cars2[i])
}
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for(let elem of cars){
    console.log(elem)
}
for(let elem of town){
    console.log(elem)
}
for(let elem of cars){
    console.log(elem)
}
*
// - взять объекты из задания 1 и превратить каждый в json.
let objDog = {
    name: 'Barsik',
    sex: 'man',
    species: 'Labrador'
}
let objJSON0 = JSON.stringify(objDog)
console.log(objJSON0)
let objPerson = {
    name: 'Akakiy',
    isMan: 'man',
    age: 28,
    
}
let objJSON1 = JSON.stringify(objPerson)
console.log(objJSON1)
let objCar = {
    name: 'Lastochka',
    age: 0,
    model: 'hatchback',
}
let objJSON2 = JSON.stringify(objCar)
console.log(objJSON2)
let objApartment = {
    isNew: true,
    name: 'dvyshka',
    floor: 4
}
let objJSON3 = JSON.stringify(objApartment)
console.log(objJSON3)
let objBook = {
    isNew: true,
    pages: 342,
    recom: false
}
let objJSON4 = JSON.stringify(objBook)
console.log(objJSON4)
// - взять json из задания 11 и превратить их обратно в объекты.
let JSON0 = JSON.parse(objJSON0)
let JSON1 = JSON.parse(objJSON1)
let JSON2 = JSON.parse(objJSON2)
let JSON3 = JSON.parse(objJSON3)
let JSON4 = JSON.parse(objJSON4)
console.log(JSON0)
console.log(JSON1)
console.log(JSON2)
console.log(JSON3)
console.log(JSON4)
*
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
let arr = [
    {
        name: 'mersedes',
        old: 5,
        model: 'E-class',
        color: 'white',
        comfortable: true,
    },
    {
        name: 'BMW',
        old: 10,
        model: '5-sereis',
        color: 'black',
        comfortable: true,
    },
    {
        name: 'Audi',
        old: 3,
        model: 'A8-long',
        color: 'blue',
        comfortable: true,
    },
    {
        name: 'Renault',
        old: 15,
        model: 'Megane',
        color: 'white',
        comfortable: false,
    },
    {
        name: 'Suzuki',
        old: 2,
        model: 'Grant vitara',
        color: 'white',
        comfortable: true,
    },
]

for(let i = 0; i < arr.length; i++){
    let s = JSON.stringify(arr[i])
    console.log(s);
}
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
let town = [
    {
        name: 'Lviv',
        people: 800000,
        country: 'Ukraine',
        comfortable: true
    },
    {
        name: 'Kyiv',
        people: 2000000,
        country: 'Ukraine',
        comfortable: true
    },
    {
        name: 'California',
        people: 3000000,
        country: 'USA',
        comfortable: true
    },
    {
        name: 'Berlin',
        people: 2500000,
        country: 'Germany',
        comfortable: true
    },
    {
        name: 'Madrid',
        people: 1800000,
        country: 'Spain',
        comfortable: true
    },
]

for(let elem of town){
    let i = JSON.stringify(elem)
    console.log(i);
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let cars2 = [
    {
        name: 'mersedes',
        old: 5,
        model: 'E-class',
        color: 'white',
        comfortable: true,
        driver: {
            name: 'oleksii',
            old: 20,
            sex: 'man',
            experience: '2 years',
        }
    },
    {
        name: 'BMW',
        old: 10,
        model: '5-sereis',
        color: 'black',
        comfortable: true,
        driver: {
            name: 'vasya',
            old: 35,
            sex: 'man',
            experience: '10 years',
        }
    },
    {
        name: 'Audi',
        old: 3,
        model: 'A8-long',
        color: 'blue',
        comfortable: true,
        driver: {
            name: 'ira',
            old: 25,
            sex: 'woman',
            experience: '5 years',
        }
    },
    {
        name: 'Renault',
        old: 15,
        model: 'Megane',
        color: 'white',
        comfortable: false,
        driver: {
            name: 'andrii',
            old: 40,
            sex: 'man',
            experience: '20 years',
        }
    },
    {
        name: 'Suzuki',
        old: 2,
        model: 'Grant vitara',
        color: 'white',
        comfortable: true,
        driver: {
            name: 'Petro',
            old: 60,
            sex: 'man',
            experience: '35 years',
        }
    },
]
for(let elem of cars2){
    let y = JSON.stringify(elem)
    console.log(y);
}
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users = [
    {
        name: 'name1',
        age: 31,
        skills: ['java', 'python', 'c++'],
    },
    {
        name: 'name2',
        age: 32,
        skills: ['java', 'javascript'],
    },
    {
        name: 'name3',
        age: 33,
        skills: ['java', 'c-sharp'],
    },
];
for(let elem0 of users){
    for(let elem1 in elem0){
        console.log(elem0[elem1])
    }
}

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
let users1 = [
    {
        name: 'name1',
        age: 31,
        skills: ['java', 'python', 'c++'],
    },
    {
        name: 'name2',
        age: 32,
        skills: ['java', 'javascript'],
    },
    {
        name: 'name3',
        age: 33,
        skills: ['java', 'c-sharp'],
    },
];
for(let user of users1){
    for(let us in user){
        console.log(user[us])
    }
}
*/
//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for(let user of users){
//     for(let us in user){
//         console.log(user[us])
//     }
// }



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

            			let user = [{
            				name: 'vasya',
            				age: 31,
            				status: false,
            				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			}, {
            				name: 'petya',
            				age: 30,
            				status: true,
            				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			}, {
            				name: 'kolya',
            				age: 29,
            				status: true,
            				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			}, {
            				name: 'olya',
            				age: 28,
            				status: false,
            				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			}, {
            				name: 'max',
            				age: 30,
            				status: true,
            				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			}, {
            				name: 'anya',
            				age: 31,
            				status: false,
            				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			}, {
            				name: 'oleg',
            				age: 28,
            				status: false,
            				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			}, {
            				name: 'andrey',
            				age: 29,
            				status: true,
            				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			}, {
            				name: 'masha',
            				age: 30,
            				status: true,
            				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			}, {
            				name: 'olya',
            				age: 31,
            				status: false,
            				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			}, {
            				name: 'max',
            				age: 31,
            				status: true,
            				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
            			}]

// let arr=[];
// for(let user of users2){
//     arr.push(user['address']);
// }
// console.log(arr)
//- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for(let elem of user){
//     let divka = document.createElement('div')
//     divka = elem
//     console.log(divka)
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let abc =[]
for(let elem of user){
    for(let el in elem){
        if(el == 'name'){
            abc[el] = {}
            abc[el] = elem[el]
            abc.push(abc[el])
        }

    }

}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
/*

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
for(let elem of usersWithId){
    elem['adress']={}
    for(let elem1 of citiesWithId){
        if(elem1['user_id'] == elem['id']){
        elem['adress'] = elem1
        }
    }
}
console.log(usersWithId[0]);
console.log(usersWithId[1]);
console.log(usersWithId[2]);
console.log(usersWithId[3]);



// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
/*
let block = document.querySelector('#block');
let classe = document.querySelector('.dfd');
console.log(classe.innerHTML)
console.log(block.innerHTML)
*
 //- змінити цей текст використовуючи селектори id, class,  tag
 let block = document.querySelector('#block');
 let classe = document.querySelector('.dfd');
 let tag = document.getElementsByTagName('div')
//  block.innerHTML = 'dssdsdsd'
//  classe.innerHTML = 'dsfdsdfdfsfd'
for (let elem of tag) {
	elem.innerHTML = '!!!';
}
*/
// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let block = document.querySelector('#block');
//  let classe = document.querySelector('.dfd');
//  let tag = document.getElementsByTagName('div')
// //   block.style.width = '20px'
// //   block.style.height = '100px'

    // classe.style.width = '20px'
    // classe.style.height = '100px'
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let main = document.createElement('div')
// for(let i = 0;i<3;i++){
// let divk = document.createElement('div')
// divk.style.width = '300px'
// divk.style.height = '300px'
// divk.style.border = '1px solid black'
// divk.style.backgroundColor = 'red'

// }
// let body = document.querySelector('body')
// let main = document.createElement('div')
// main.style.boxSizing = 'border-box'
// body.appendChild(main);
// for(let i = 0;i<3;i++){
//     let divk = document.createElement('div')
//     divk.style.width = '100px'
//     divk.style.height = '50px'
//     divk.style.backgroundColor = 'red'
//     divk.style.display = 'inline-block'
//     divk.style.border = '1px solid #000'
//     main.appendChild(divk)
    
// }

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// for(let i = 0;i<10;i++){
//     let divk = document.createElement('div')
//     divk.style.padding = '0'
//     divk.style.margin = '0'
//     main.appendChild(divk)
//     for(let k =0; k<3;k++){
//         let di = document.createElement('div')
//         di.style.padding = '0'
//         di.style.margin = '0'
//         di.style.display = 'inline-block'
//         di.style.width = '100px'
//         di.style.height = '50px'
//         di.style.border = '1px solid black'
//         di.style.backgroundColor = 'red'
//         divk.appendChild(di)
//     }
    
// }
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// for(let i = 0;i<10;i++){
//     let divk = document.createElement('div')
//     divk.style.padding = '0'
//     divk.style.margin = '0'
//     main.appendChild(divk)
//     for(let k =0; k<5;k++){
//         let di = document.createElement('div')
//         di.style.padding = '0'
//         di.style.margin = '0'
//         di.style.display = 'inline-block'
//         di.style.width = '100px'
//         di.style.height = '50px'
//         di.style.border = '1px solid black'
//         di.style.backgroundColor = 'red'
//         divk.appendChild(di)
//     }
    
// }
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = +prompt('width')
// let m = +prompt('height')
// for(let i = 0;i<m;i++){
//     let divk = document.createElement('div')
//     divk.style.padding = '0'
//     divk.style.margin = '0'
//     main.appendChild(divk)
//     for(let k =0; k<n;k++){
//         let di = document.createElement('div')
//         di.style.padding = '0'
//         di.style.margin = '0'
//         di.style.display = 'inline-block'
//         di.style.width = '100px'
//         di.style.height = '50px'
//         di.style.border = '1px solid black'
//         di.style.backgroundColor = 'red'
//         divk.appendChild(di)
//     }
    
// }


