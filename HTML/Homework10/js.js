
// -  Створити функцію конструктор для об'єкту який описує теги

// Властивості

//  -назва тегу

//  - опис його дій

//  - масив з атрибутами (2-3 атрибути максимум)

//  Кожен атрибут описати як окремий який буде містити

//  -назву атрибуту

//  -опис дії атрибуту
//  -a
// let a = new Tag('a','предназначен для создания ссылок','accesskey','Активация ссылки с помощью комбинации клавиш','href','Задает адрес документа, на который следует перейти.')
// console.log(a);
// //  -div
// let div = new Tag('div','редназначен для выделения фрагмента документа с целью изменения вида содержимого.','align','Задает выравнивание содержимого тега','title','Добавляет всплывающую подсказку к содержимому')
// console.log(div);
// //  -h1
// let h1 = new Tag('h1','представляет собой наиболее важный заголовок первого уровня','align','Определяет выравнивание заголовка')
// console.log(h1);
// //  -span
// let span = new Tag('span','предназначен для определения строчных элементов документа')
// console.log(span);
// //  -input
// let input = new Tag('input','позволяет создавать разные элементы интерфейса','accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов','accesskey','Переход к элементу с помощью комбинации клавиш')
// console.log(input);
// //  -form
// let form = new Tag('form','устанавливает форму на веб-странице','accept-charset','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные','action','Адрес программы или документа, который обрабатывает данные формы')
// console.log(form);
// //  -option
// let option = new Tag('option','определяет отдельные пункты списка','disabled','Заблокировать для доступа элемент списка')
// console.log(option);
// //  -select
// let select = new Tag('select','позволяет создать элемент интерфейса в виде раскрывающегося списка','tabindex','Определяет последовательность перехода между элементами при нажатии на клавишу','size','Количество отображаемых строк списка')
// console.log(select);


// function Tag(name,action,nameAttr0,actionAtrr0,nameAttr = null,actionAtrr =null){
//  this.titleOfTag = name
//  this.action = action
//  this.attrs = [{titleOfAttr: nameAttr0, actAttr: actionAtrr0},
//     {titleOfAttr: nameAttr, actAttr: actionAtrr}]
// }

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

// class TagClass{
//     constructor(name,action,nameAttr0,actionAtrr0,nameAttr = null,actionAtrr =null){
//         this.titleOfTag = name
//         this.action = action
//         this.attrs = [{titleOfAttr: nameAttr0, actAttr: actionAtrr0},
//         {titleOfAttr: nameAttr, actAttr: actionAtrr}]
//     }
// }
// //  Таким чином описати теги
// //  -a
// let a = new TagClass('a','предназначен для создания ссылок','accesskey','Активация ссылки с помощью комбинации клавиш','href','Задает адрес документа, на который следует перейти.')
// console.log(a);
// //  -div
// let div = new TagClass('div','редназначен для выделения фрагмента документа с целью изменения вида содержимого.','align','Задает выравнивание содержимого тега','title','Добавляет всплывающую подсказку к содержимому')
// console.log(div);
// //  -h1
// let h1 = new TagClass('h1','представляет собой наиболее важный заголовок первого уровня','align','Определяет выравнивание заголовка')
// console.log(h1);
// //  -span
// let span = new TagClass('span','предназначен для определения строчных элементов документа')
// console.log(span);
// //  -input
// let input = new TagClass('input','позволяет создавать разные элементы интерфейса','accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов','accesskey','Переход к элементу с помощью комбинации клавиш')
// console.log(input);
// //  -form
// let form = new TagClass('form','устанавливает форму на веб-странице','accept-charset','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные','action','Адрес программы или документа, который обрабатывает данные формы')
// console.log(form);
// //  -option
// let option = new TagClass('option','определяет отдельные пункты списка','disabled','Заблокировать для доступа элемент списка')
// console.log(option);
// //  -select
// let select = new TagClass('select','позволяет создать элемент интерфейса в виде раскрывающегося списка','tabindex','Определяет последовательность перехода между элементами при нажатии на клавишу','size','Количество отображаемых строк списка')
// console.log(select);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model,manufac,year,maxSpeed,volume){
//     this.model = model
//     this.manufac = manufac
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.volume = volume

//     this.drive = ()=>{
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }

//     this.info = ()=>{
//         console.log(this)
//     }
//     this.increaseMaxSpeed =(newSpeed)=>{
//         newSpeed += Number(this.maxSpeed)
//         this.maxSpeed = newSpeed
//         console.log(newSpeed);
//     }
//     this.changeYear = (newValue)=>{
//         this.year = +newValue
//         console.log(this.year);
//     }
//     this.addDriver=(driver)=>{
//         this.driver = driver
//         console.log(this.driver)
//     }
//     this.i = () =>{
//         console.log(i)
//     }
// }

// let Suzuki = new Car('GrandVitara','Japan',2,220,3)
// console.log(Suzuki)
// Suzuki.drive()
// Suzuki.info()
// Suzuki.increaseMaxSpeed(20)
// Suzuki.increaseMaxSpeed(20)
// Suzuki.changeYear(5)
// console.log(Suzuki.year);
// Suzuki.addDriver('Me')
// Suzuki.i()

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом



class Prin{
    constructor(name,age,size){
        this.name = name;
        this.age = age 
        this.findSize = size
    }
    }

let prince = new Prin ('Andriy',26,7)

class Princess{
    constructor(name,age,size){
        this.name = name;
        this.age = age 
        this.sizeFoot = size
    }
    married(){
        this.sizeFoot === prince.findSize ? console.log(this) : console.log('Luck next time')
            
        }
    }


let princess1 = new Princess('Alina',56,9)
princess1.married()
let princess2 = new Princess('Sveta',11,8)
princess2.married()
let princess3 = new Princess('Sola',18,7)
princess3.married()
let princess4 = new Princess('Paraska',45,6)
princess4.married()
let princess5 = new Princess('Jukia',23,7)
princess5.married()
let princess6 = new Princess('Evgenia',32,6)
princess6.married()
let princess7 = new Princess('Waraska',27,5)
princess7.married()
let princess8 = new Princess('Masha',18,7)
princess8.married()
let princess9 = new Princess('Yana',35,6)
princess9.married()
let princess10 = new Princess('Sonya',41,7)
princess10.married()

