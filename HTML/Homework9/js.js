/*
// - створити функцію яка виводить масив
function arrFunc(){
    let arr = []
    for(let i = 0;i<10;i++){
        arr[i] = i
    }
    return arr
}
console.log(arrFunc());
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function arrRandom(){
    let arr = []
    for(let i = 0;i<10;i++){
        arr[i] = Math.round(Math.random()*(9-0)+0)
    }
    return arr
}
console.log(arrRandom());

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function min(num1,num2,num3){
    console.log(Math.min(num1,num2,num3))
}
min(4,5,6)
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function max(num1,num2,num3){
    console.log(Math.max(num1,num2,num3))
}
max(4,5,6)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function maxMin(){
    let max = Math.max.apply(null,arguments)
    console.log(max)
    let min = Math.min.apply(null,arguments)
    return min 
}
// maxMin(6,4,32,6,78,4,22)
console.log(maxMin(6,4,32,6,78,4,22))
// - створити функцію яка виводить масив
function arrFunc(){
    let arr = []
    for(let i = 0;i<10;i++){
        arr[i] = i
    }
    return arr
}
console.log(arrFunc());
// - створити функцію яка повертає найбільше число з масиву
function maxM(){
    let max = Math.max.apply(null,arguments)
    return max
}
console.log(maxM(5,4,6,7,8));
// - створити функцію яка повертає найменьше число з масиву
function minM(){
    let min = Math.min.apply(null,arguments)
    return min
}
console.log(minM(5,4,6,7,8));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumArr(arr){
    let sum = 0
    for(let elem of arr){
        sum += elem
    }
    return sum
}
let sum = sumArr([4,5,3,2,6,8,4,3])
console.log(sum)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function sumDiv(arr){
    let sum = 0;
    for(let i =0;i<arr.length; i++){
        sum += arr[i]
    }
    return (sum / arr.length)
}
console.log(sumDiv([4,5,3,2,6,8,4,3]))
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let arrObj = (arr) => arr.length;
console.log(arrObj([{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}]))
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function arrObject(arr){
    let sum = 0;
    for(let elem of arr){
        sum += Object.keys(elem).length
    }
    return sum
}
console.log(arrObject([{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}]))

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function arrGo(arr1,arr2){
    let sum = [];
    for(let i=0;i<arr1.length;i++){
        for(let k=0;k<arr2.length;k++){
            if(i == k){
                let sum0 = Number(arr1[i])+Number(arr2[k])
                sum.push(sum0)
            }
        }
    }
    return  console.log(sum);
}
arrGo([3,4],[5,6])

//   Приклад

//   [1,2,3,4]

//   [2,3,4,5]

//   результат

//   [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function arrNum(arr,num){
    let def = arr[num]
    arr[num]= arr[num+1]
    arr[num+1] = def
    return console.log(arr)
}
arrNum([0,1,2],1)
*/
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// function arrNull(arr){
//     let arr0 = []
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] === 0){
//             let b = arr[i]
//             arr0.push(b)
//             let def = arr.splice(i,1)
//         }
//     }
//     arr.push(...arr0)
//     return arr
// }
// console.log(arrNull([0,1,0,2,0,5,0]))

// Створити функцію яка :

// - Додає в боді блок з текстом "Hello owu"
// // let elem = document.querySelector('#elem')
// function divOwu(){
//     // let elem = document.createElement('div')
//     let elem = document.getElementById('elem')

//     console.log(elem)

//     let p = document.createElement('p')
//     p.innerText = 'Hello ow'

//     elem.appendChild(p)
//     // document.body.appendChild(elem)
// }
// divOwu()
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let elem = document.getElementById('elem')
// function divOwu(){
//     let div = document.createElement('div')
//     let p = document.createElement('p')
//     p.innerHTML = 'Hello owu'
//     div.appendChild(p)
//     elem.appendChild(div)
// }
// divOwu()
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = [
//     {
//           name: 'mersedes',
//          old: 5,
//          model: 'E-class',
//           color: 'white',
//           comfortable: true,
//       },
//       {
//           name: 'BMW',
//           old: 10,
//           model: '5-sereis',
//          color: 'black',
//          comfortable: true,
//      },
//      {
//          name: 'Audi',
//          old: 3,
//          model: 'A8-long',
//          color: 'blue',
//          comfortable: true,
//      },
//      {
//          name: 'Renault',
//          old: 15,        
//          model: 'Megane',        
//          color: 'white',
//          comfortable: false,
//      },
//      {
//          name: 'Suzuki',
//          old: 2,
//          model: 'Grant vitara',
//          color: 'white',
//          comfortable: true,
//      },
//  ]

// function func(arr,id){
//     let elem = document.querySelector('#'+ id)
//     for(let el of arr){
//     let p = document.createElement('p')
//     p.innerHTML = el.name + ' '+ el.old + ' ' +el.model + ' '+el.color + ' '+el.comfortable;
//     elem.appendChild(p)
//     }
// }
// func(cars,'elem')


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let cars = [
//     {
//         name: 'mersedes',
//         old: 5,
//         model: 'E-class',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'oleksii',
//             old: 20,
//             sex: 'man',
//             experience: '2 years',
//         }
//     },
//     {
//         name: 'BMW',
//         old: 10,
//         model: '5-sereis',
//         color: 'black',
//         comfortable: true,
//         driver: {
//             name: 'vasya',
//             old: 35,
//             sex: 'man',
//             experience: '10 years',
//         }
//     },
//     {
//         name: 'Audi',
//         old: 3,
//         model: 'A8-long',
//         color: 'blue',
//         comfortable: true,
//         driver: {
//             name: 'ira',
//             old: 25,
//             sex: 'woman',
//             experience: '5 years',
//         }
//     },
//     {
//         name: 'Renault',
//         old: 15,
//         model: 'Megane',
//         color: 'white',
//         comfortable: false,
//         driver: {
//             name: 'andrii',
//             old: 40,
//             sex: 'man',
//             experience: '20 years',
//         }
//     },
//     {
//         name: 'Suzuki',
//         old: 2,
//         model: 'Grant vitara',
//         color: 'white',
//         comfortable: true,
//         driver: {
//             name: 'Petro',
//             old: 60,
//             sex: 'man',
//             experience: '35 years',
//         }
//     },
// ]

// function func(arr,id){
//     let elem = document.querySelector('#'+ id)
//     for(let el of arr){
//     let p = document.createElement('p')
//     p.innerHTML = el.name + ' '+ el.old + ' ' +el.model + ' '+el.color + ' '+el.comfortable;
//     for(let e in el){
//         if(typeof(e)==='object'){
//             let p0 = document.createElement('p')
//             p0.innerHTML = e.name +' ' +e.old+' ' + e.sex+' ' + e.experience;
//             p.appendChild(p0)
//         }
//         }
//     elem.appendChild(p)
//     }
// }
// func(cars,'elem')
// function func(arr,id){
//     let elem = document.querySelector('#'+ id)
//     for(let el of arr){
//         for(let e0 in el){
//             let div = document.createElement('div')
//             div.innerHTML = el[e0]
//             elem.appendChild(div)
//         }
//     // let p = document.createElement('p')
//     // p.innerHTML = el.name + ' '+ el.old + ' ' +el.model + ' '+el.color + ' '+el.comfortable;
//     // elem.appendChild(p)
//     // }
//     }
// }
// func(cars,'elem')
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.

// Для кожної властивості створити всередені блока автомоблія свій блок



// (на основі минулого ДЗ)

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",

// та повертає масив цих з'єднаних об'єктів.

// Приклад масивів:

            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];

            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

// function arrTwo(arr1,arr2){
//     for(let elem1 of arr1){
//         for(let elem2 of arr2){
//             if(elem2['user_id']==elem1['id']){
//                let b = Object.assign(elem1,elem2)
//                arr1.push(b)
//             }
//         }
//         return arr1
//     }
// }
// console.log(arrTwo(usersWithId,citiesWithId))

// function arrTwo(arr1,arr2){
//     for(let elem of arr1){
//         for(let value of arr2){
//            if( elem.id === value.user_id) {
//                 elem.city = { country: value.country, city: value.city}
//            }
//         }
//     }
//     return arr1;
// }
// console.log(arrTwo(usersWithId,citiesWithId))



let rules = [

    {

        title: 'Первое правило Бойцовского клуба.',

        body: 'Никому не рассказывать о Бойцовском клубе.'

    },

    {

        title: 'Второе правило Бойцовского клуба.',

        body: 'Никогда никому не рассказывать о Бойцовском клубе.'

    },

    {

        title: 'Третье правило Бойцовского клуба.',

        body: 'В схватке участвуют только двое.'

    },

    {

        title: 'Четвертое правило Бойцовского клуба.',

        body: 'Не более одного поединка за один раз.'

    },

    {

        title: 'Пятое правило Бойцовского клуба.',

        body: 'Бойцы сражаются без обуви и голые по пояс.'

    },

    {

        title: 'Шестое правило Бойцовского клуба.',

        body: 'Поединок продолжается столько, сколько потребуется.'

    },

    {

        title: 'Седьмое правило Бойцовского клуба.',

        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'

    },

    {

        title: 'Восьмое и последнее правило Бойцовского клуба.',

        body: 'Новичок обязан принять бой.'

    },



];
let elem = document.querySelector('#elem')
function func(arr){
    for(let elem1 of arr){
        if(elem1.title){
            let h = document.createElement('h2')
            h.innerHTML = elem1.title
            elem.appendChild(h)
        }
        if(elem1.body){
            let body = document.createElement('p')
            body.innerHTML = elem1.body
            elem.appendChild(body)
        }
    }
}
func(rules)

