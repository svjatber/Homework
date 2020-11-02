
//--створити масив та вивести його в консоль:
let arr = [4,5,2,'gdfgf',true,false]
console.log(arr);
//- з 5 числових значень
let arrNumber = [5,6,4,3,2,6]
console.log(arrNumber);
//- з 5 стічкових значень
let arrString = ['fsfd','4','dffd','sdfd']
console.log(arrString);
//- з 5 значень стрічкового, числового та булевого типу
let arrAll = [true,456,'orten','top']
console.log(arrAll);
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrEmpty = [];
arrEmpty[0]=10;
arrEmpty[1]=true;
arrEmpty[2]='fdsfd';
arrEmpty[3]=56;
console.log(arrEmpty);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0; i < 10; i++){
    document.write('TEXT'+ '<br>')
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let k = 0; k < 10; k++){
    document.write('TEXT'+ k)
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let ds = 0;
while(ds < 20){
    document.write('text'+'<h1>')
    ds++
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let sd = 0;
while(sd < 20){
    document.write('text'+'<h1>'+ sd**2)
    sd++
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNum = [5,6,4,3,2,6,7,8,6,5]
for(let elem of arrNum){
    console.log(elem)
}
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrStr = ['fsfd','4','dffd','sdfd','5335','343','gddfd','sfsfdfd','fsdsfd','sdfdfds']
for(let elem1 of arrStr){
    console.log(elem1)
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrEvery = [true,456,'orten','top','fdsfs',3443,'fdsdf',true,false,654]
for(let elem2 of arrEvery){
    console.log(elem2)
}
*
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrEvery1 = [true,456,'orten','top','fdsfs',3443,'fdsdf',true,false,654]
for(let elemev1 of arrEvery1){
    if(typeof(elemev1) == 'boolean' )
    console.log(elemev1);
}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrEvery2 = [true,456,'orten','top','fdsfs',3443,'fdsdf',true,false,654]
for(let elemev2 of arrEvery2){
    if(typeof(elemev2) == 'number' )
    console.log(elemev2);
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrEvery3 = [true,456,'orten','top','fdsfs',3443,'fdsdf',true,false,654]
for(let elemev3 of arrEvery3){
    if(typeof(elemev3) == 'string' )
    console.log(elemev3);
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrEmpty2 = []
for(let emp = 0; emp< 4;emp++ ){
    arrEmpty2.push(emp)
}
for(let emp = 0; emp< 3;emp++ ){
    arrEmpty2.push(true)
    
}
console.log(arrEmpty2);
let das= 'sdds'
for(let emp = 0; emp<3; emp++){
    das += '!'
    arrEmpty2.push(das)
}
console.log(arrEmpty2);
*

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let wew=0;wew<10; wew++){
    console.log(wew);
    document.write(wew)
}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let wew1=0;wew1<100; wew1++){
    console.log(wew1);
    document.write(wew1)
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let wew2=0;wew2<100; wew2 = wew2 + 2){
    console.log(wew2);
    document.write(wew2)
}
*
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let wew3=0;wew3<100; wew3++){
    if(wew3 % 2 == 0){
    console.log(wew3);
    document.write(wew3)
    }
}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let wew4=0;wew4<100; wew4++){
    if(wew4 % 2 != 0){
    console.log(wew4);
    document.write(wew4)
    }
}
*
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for(let ocl = 1; ocl<=2; ocl++){
    for(let oc = 1; oc<=60;oc++){
    console.log(oc)
    }
}

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for(let oclock = 1; oclock<=2; oclock++){
    for(let ocl1 = 1; ocl1<=60; ocl1++){
        for(let oc1 = 1; oc1<=60;oc1++){
        console.log(oc1)
        }
    }
}

//Додатково

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrExtra1 = [ 'a', 'b', 'c'] ;
let strExtra1 = ''
for(let elemext1 = 0; elemext1<arrExtra1.length; elemext1++){
    strExtra1 += String(arrExtra1[elemext1])
}
console.log(strExtra1);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arrExtra2 = [ 'a', 'b', 'c'] ;
let strExtra2 = ''
let elemext2 = 0;
while(elemext2<arrExtra2.length){
    strExtra2 += String(arrExtra2[elemext2])
    elemext2++
}
console.log(strExtra2);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arrExtra3 = [ 'a', 'b', 'c'] ;
let strExtra3 = ''
for(let elemext3 of arrExtra3){
    strExtra3 += String(elemext3)
}
console.log(strExtra3);


//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:*/
let arr = [2,17,13,6,22,31,45,66,100,-18];

let elem1 =0;
//1. перебрати його циклом while
while(elem1 < arr.length){
    console.log(arr[elem1]);
    elem1++
}

//2. перебрати його циклом for
for(let elem2 of arr){
    console.log(elem2)
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let elem3 = 0;
while(elem3 < arr.length){
    if(elem3 % 2 != 0){
    console.log(arr[elem3]);
    }
    elem3++
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(let i=0;i<arr.length;i++){
    if(i%2 !=0){
    console.log(arr[i])
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення
let elem5 = 0;
while(elem5 < arr.length){
    if(arr[elem5] % 2 == 0){
    console.log(arr[elem5]);
    }
    elem5++
}

//6. перебрати циклом for та вивести  числа тільки парні  значення
for(let k=0;k<arr.length;k++){
    if(arr[k] % 2 ==0){
    console.log(arr[k]);
    }
}
*
//7. замінити кожне число кратне 3 на слово "okten"
for(let j=0;j<arr.length;j++){
    if(arr[j] % 3 == 0){
        arr[j] = 'okten';
    }
}
console.log(arr)

//8. вивести масив в зворотньому порядку.
for(let h = arr.length-1; h>=0; h--){
    console.log(arr[h])
}
*
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
elem9a =  arr.length-1
while(elem9a >= 0){
    console.log(arr[elem9a]);
    elem9a--
}
let elem9b = arr.length-1;
while(elem9b >= 0){
    if(elem9b % 2 != 0){
    console.log(arr[elem9b]);
    }
    elem9b--
}
for(let i=arr.length;i>0;i--){
    if(i%2 !=0){
    console.log(arr[i])
    }
}
let elem9c = arr.length-1;
while(elem9c >=0){
    if(arr[elem9c] % 2 == 0){
    console.log(arr[elem9c]);
    }
    elem9c--
}
for(let j=arr.length;j>=0;j--){
    if(arr[j] % 3 == 0){
        arr[j] = 'okten';
    }
}
console.log(arr)

//10

 //створити пустий масив та :
let arr2 = [];
//- заповнити його 50 парними числами за допомоги циклу.
for(let t=1; t<=50;t++){
    if(t % 2 == 0){
        arr2.push(t);
    }
}
console.log(arr2)
let arr3 = []
//- заповнити його 50 непарними числами за допомоги циклу.
for(let r =1; r<=50;r++){
    if(r%2!= 0){
        arr3.push(r)
    }
}
console.log(arr3);
