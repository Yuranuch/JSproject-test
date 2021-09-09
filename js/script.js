"use strict"
// console.log('Hello')
// let admin;
// let name;
// name = "Джон";
// console.log(name);
// admin = name;

// let num = 13;
// console.log(typeof (num))
// console.log(`result:${4 + 4}`);
// let defer = true;
// let random = 0;
// console.log(defer === random)

// let age = prompt('how old are you?');
// console.log(`you are: ${age} years old`)

// let result = confirm('Do you want to now JS?')
// console.log(`it's - ${result}`)
// let n = prompt('age?');
// alert(`i m ${n} years old`)

// let truth = false;
// console.log(typeof (truth))
// truth = String(truth);
// console.log(typeof(truth));

// let someLet = "123";
// console.log(typeof (someLet));
// someLet = Number(someLet);
// console.log(someLet)

// let innumber = false;
// innumber = Number(innumber);
// console.log(innumber);

// let num = "    123    ";
// console.log(typeof (num));

// num = Number(num);

// console.log(typeof (num));
// console.log(num)

// let bool = true;
// console.log(String(bool))
// bool = String(bool)
// console.log(typeof(bool))
// console.log(bool)
// console.log(2 * "13")
// console.log(24 / "6")

// console.log(83 + "1")

// console.log(1 + +"32")

// let question = prompt('Ges my name)');
// if(question == 'Yura') {
//    alert('Yes, correct!!!')
// }
// else {
//    alert('No(((')
// }
// let date = prompt('When I was born?');
// date = +date
// alert(date)
// alert(typeof (date))
// if (date == 1985) {
//    alert("It's true!!!! ")
// }
// else if (date > 1985) {
//    alert("I am not so old(")
// }
// else if (date < 1985) {
//    alert("Thanks for a complement")
// }

// else if (isNaN) {
//    alert('Enter a number !')

// }
// let age = prompt("How old are you?", 18);

// let message = (age < 18) ? 'hellow kid':
// (age > 18) ? 'Hello oldman':
// (age == 18) ? 'norm':
// 'sO STRANGE';

// alert(message);

// let nameq = prompt("Какое официальное название JavaScript?");

// if (nameq == "ECMAScript") {
//    nameq = "Правильно!"
// }
// else {
//    nameq = "Неверно!"
// }
// alert(nameq)

// let newname = (nameq == "ECMAScript") ? "Правильно!" : "Неверно!";

// alert(newname)

// let num = prompt('Enter a number');
// if (num == 0) {
//    alert(0)
// }
// if (num > 0) {
//    alert(1)
// }
// if (num < 0) {
//    alert(-1)
// }

// let value = (num == 0) ? 0 : (num > 0) ? 1 : -1
// alert(value)
// let login = '';
// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';
// alert(message)

// let hour = 10;
// let isWeekend = true
// if (hour < 9 || hour > 18 || isWeekend == true) {
//    alert('Offise is closet')
// }

// let age;
// if( age >= 14 && age<= 90)

// let password = prompt('кто там?');
// if (password == 'Админ') {
//    let p = prompt('Пароль?');
//    if (p == 'Я главный') {
//       alert('Здравствуйте')
//    }
//    else if (p == null || p == "") {
//       alert('Отменено!')
//    }
//    else {
//       alert('Неверный пароль')
//    }
// }
// else if (password == null || password == "") {
//    alert('Отменено!')
// }
// else {
//    alert('Я вас не знаю')
// }

// for (let i = 2; i < 11; i++) {
//    if (i % 2 == 0) {
//       console.log(i)
//    }
// }
// let i = 0;
// while (i < 3) {
//    alert(`number + ${i}`)
//    i++
// }

// function saveCat(a, b) {
//    let num = a + b
//    alert(num)
// }
// saveCat(5,5)

// function sumNum(first, second) {
//    let total = first * second
//    if (total > 10) {
//       more()
//    }
//    else {
//      less()
//    }
// }
// function more() {
//    console.log('more that 10')
// }
// function less() {
//    console.log('less that 10')
// }

// sumNum(10, 10)

// function getSumm () {
//    let summ = 1 + 1;
//    console.log(summ);
// };

// let secondNum = getSumm;

// secondNum();
// getSumm();

// let summ = (a, b) => {
//    let total = a + b;
//    console.log(`And summ = ${total}`)
// }
// summ(5, 5)

// let calcCats = (a, b) => {
//    let totalCats = a * b;
//    console.log(`итого получилось - ${totalCats}`)
// }
// setTimeout(calcCats, 4000, 12, 12);
// setInterval(calcCats, 3000, 5, 5)


// function showCat(a, b) {
//    console.log('=^.^=')
// }
// showCat()
// showCat()
// showCat()
// showCat()
// function castle(a, b) {
//    function showSword() {
//       console.log('<=====|=')
//    }
// }
// showSword()

// function showNumber(a, b, moreFunc, lessFunc) {
//    let number = a - b;
//    if (number > 0) {
//       moreFunc();
//    }
//    else {
//       lessFunc();
//    }
// }
// showNumber(1, 2, more, less)

// function more() {
//    console.log('more than 0')
// }
// function less() {
//    console.log('less or = 0')
// }

// function calcCats(a, b) {
//    let number = a + b;
//    return number;
// }

// let numOfCats = calcCats(12, 1);

// console.log(`Total: ${numOfCats}`)

// let showCat = function () {
//    console.log('=^.^=')
// }
// let pict = showCat;
// pict();
// showCat();

// let greating = (hi, name) => console.log(`${hi}, ${name} `)
// greating('Hello', 'Yura')

// let cat = {
//    nameCat: 'kasya',
//    age: 8,
// }

// console.log(cat.nameCat);
// console.log(cat)

// let catName = 'Kasyca'

// switch (catName) {
//    case 'Kasyca': 
//    console.log('false')
//    break; 
//    case 'Kasya': 
//    console.log('true')
//    break;
// }

// let ask = (question, yes, no) => {
//    if (confirm(question)) {
//       yes()
//    }
//    else {
//       no()
//    }
// }

// ask('How are you?', () => alert('Agree!'), () => ('Disagree!'))


// let ourCat = {
//    age: 8,
//    catName: 'Kasya',
//    kind: 'cat',
//    catSet() {
//       console.log(`Our cat is ${this.age} old. Shis name is ${this.catName}. And kind is ${this.kind}`)
//    }
// }
// ourCat.age = 9;
// ourCat.catSet()

// let newNum = console.log(Math.floor(5.99))
// let firstNum = console.log(Math.floor(-2.2222)) 

// let someNum = console.log(Math.round(5.885 * 1000) / 1000)
// let someNum = 5.993333999;
// console.log(someNum.toFixed(6))
// console.log(typeof(someNum))

// console.log(+(25 + +("1hello")))
// console.log(isNaN(25 + +("hello")))

// console.log(Math.random() * 10)

// let cats = (a,b) => {
//    return a + b
// }

// console.log(`summ: ${cats(5,5)}`)

// let someWord = "Yuranuch!"
// console.log(someWord.length)

// console.log(someWord[1])

// console.log(someWord.slice(1,3))

// console.log("a">"Б")

// let fls = "фрилансер";

// console.log(`Привет! Я ${fls}`)
// console.log(fls[5])

// let text = 123 + "456";

// console.log(fls.slice(3, 6))

// let someArr = [
//    "Yura",
//    123,
//    true,
// ]
// console.log(typeof(someArr[1]))
// let someArr = [
//    'Yura',
//    123,
//    {
//       age: 36,
//       height: 193,
//    },
//    function () {
//       return (`Hello! I'm ${this[0]}`)
//    }
// ]

// console.log(someArr[2].age)

// console.log(someArr[3]())

// let newArr = [
//    "1",
//    "2",
//    "3",
// ];

// console.log(newArr);
// console.log(newArr.length);
// let newArr = [
//    "1",
//    "2",
//    "3",
// ];
// let secondArr = newArr;
// console.log(secondArr);

// newArr[0] = 1111;
// console.log(newArr);
// console.log(secondArr);
// let newArr = [
//    "1",
//    "2",
//    "3",
// ];
// newArr[3] = 4;
// console.log(newArr);
// let newArr = [
//    "1",
//    "2",
//    "3",
// ];
// newArr.push('4');
// newArr.push('5', '6', '7');
// newArr.shift();
// newArr.pop();
// newArr.unshift('1111')
// console.log(newArr);

// console.log(newArr);

// let remove = newArr.splice(1, 3);
// console.log(remove);
// console.log(newArr);
// newArr.push(remove);
// console.log(newArr);
// newArr.splice(0, 1, '1111111111111');
// newArr.splice(0, 0, '000000000000');
// let newArr = [
//    "1",
//    "2",
//    "3",
//    "4",
//    "5",
//    "6",
//    "7",
// ];
// let removed = newArr.splice(1, 1);
// newArr.splice(1, 1, '22222222222222222')
// newArr.splice(3, 0, '444444444', '544444444444')
// console.log(newArr);
// console.log(removed);
// let secondArr = newArr.slice(1, 4);
// secondArr[0] = "111111111";
// console.log(newArr);
// console.log(secondArr);
// let arrNew = [
//    { name: 'Yura', age: 36 },
//    { name: 'Dima', age: 18 },
//    { name: 'Kolya', age: 50 },
// ]
// let someObject = arrNew.find(index => index.age === 36);

// console.log(someObject)
// let someResult = arrNew.filter(item => item.age === 50);
// console.log(someResult)
// let arrNew = [
//    { name: 'Yura', age: 36 },
//    { name: 'Dima', age: 18 },
//    { name: 'Kolya', age: 50 },
// ]
// console.log(arrNew[0].age)
// console.log(arrNew.push({ name: 'Vasya', age: 40 }))
// let deleted = arrNew.pop()
// console.log(deleted)
// console.log(arrNew)
// console.log(arrNew.shift())
// console.log(arrNew)
// console.log(arrNew.unshift({ name: 'Oleg', age: 21 }))
// console.log(arrNew)

// let someArr = ['1', '2', '3', '4', '5',]
// console.log(someArr)
// let deleted = someArr.splice(-2, 0, '2222222', '33333333')
// console.log(deleted)
// console.log(someArr)
// let secondArr = someArr.slice()
// console.log(someArr)
// console.log(secondArr)

// secondArr[0] = '111111111111111111';
// console.log(someArr)
// console.log(secondArr)
// let secondArr = someArr.concat('6', '7', '8')
// console.log(secondArr.indexOf('3', 3))
// console.log(secondArr.includes('2',1))
// let arrNew = [
//    { name: 'Yura', age: 36 },
//    { name: 'Dima', age: 18 },
//    { name: 'Kolya', age: 50 },
//    { name: 'Ihor', age: 12 },
//    { name: 'Sergey', age: 55 },
//    { name: 'Kirill', age: 14 },
//    { name: 'Olya', age: 30 },
// ]
// let resultOne = arrNew.find(item => item.age === 36)
// console.log(resultOne)
// let resultTwo = arrNew.findIndex(i => i.name === 'Kolya')
// console.log(resultTwo)

// let arrNew = [
//    { name: 'Yura', age: 36 },
//    { name: 'Dima', age: 18 },
//    { name: 'Kolya', age: 50 },
//    { name: 'Ihor', age: 12 },
//    { name: 'Sergey', age: 55 },
//    { name: 'Kirill', age: 14 },
//    { name: 'Olya', age: 30 },
// ]

// let newMen = arrNew.filter(i => i.age >= 30);
// console.log(newMen)
// let someArr = ['213', '22', '3', '43', '25',];
// let newSort = someArr.sort()

// console.log(newSort)
// let mapArray = someArr.map(i => i[0] )
// console.log(mapArray)

// let someWord = 'Yura,Vanya,Kirill';
// let newArray = someWord.split(',');
// console.log(newArray)
// let newStrangeWord = someArr.join(', ')
// console.log(newStrangeWord)
// let someArr = ['213', '22', '3', '43', '25',];

// for (let i = 0; i < someArr.length; i++) {
//    console.log(someArr[i])
// }


// let newArr = ['Yura', 'Dima', 'Kirill',]
// console.log(newArr.length);
// for (let i = 0; i < newArr.length; i++) {
//    console.log(newArr[i])
// }
// newArr.forEach((item, index, array) => {
//    console.log(`${item} 'on' ${index} 'of' ${array}`)
// })

// let arrNew = ['Vanya', 'Ishtvan',];
// console.log(arrNew)
// arrNew.push('Olya')
// console.log(arrNew)
// arrNew.splice(1, 1, 'Petya')
// console.log(arrNew)
// let someElem = console.log(arrNew.shift())
// arrNew.unshift('Masha', 'Pasha')
// console.log(arrNew)
// let newName = arrNew.slice(1, 0)
// console.log(arrNew)
// console.log(newName)

// const htmlEl = document.body;
// console.log(htmlEl.children);

// const element = document.querySelector('.lesson__text');
// const textElem = element.innerHTML;
// console.log(textElem);
// element.innerHTML = `<p>${textElem}"Живи, а работай в свободное время!"</p>`
// const firstElem = document.querySelector('.lesson__text');
// console.log(firstElem)
// const newElem = document.createElement('div');
// console.log(newElem);
// newElem.innerHTML = `<span>Hello world!</span>`;
// firstElem.before(newElem)

// const testElement = document.querySelector('.text_block');
// const innerText = testElement.textContent;
// console.log(innerText);

// testElement.textContent = `${innerText} Юра`;

// const newElement = document.createElement('div');
// let mainEl = document.querySelector('.text_block');
// mainEl.after(newElement);
// newElement.innerHTML = `Я новый блок`;
function getMiddle(s)
{
  let someLenght = s.length
  if( someLenght  % 2 !== 0) {
    console.log(s.slice(Math.ceil(someLenght / 2)-1, Math.ceil(someLenght / 2)) )
  } else {
    console.log(s.slice(someLenght / 2 -1, someLenght / 2 +1 ),  )
  }
}
getMiddle('Terqrst')