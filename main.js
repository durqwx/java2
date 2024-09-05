// pr1


'use strict';
let name = "Джон";
let admin = name;
alert(admin);


// pr2


let city = prompt("Введите название города");
let year = prompt("Введите год образования");
let people = prompt("Введите численность населения");
let age = 2024-year;

alert(`Городу ${name} исполнилось ${age} лет с момента его образования. Население - ${people} человек`);


// pr3


let r = prompt("Введите радиус круга");
let S = Math.PI * (r**2);
alert(`Площадь круга с радиусом ${r} равна ${S}`);

// pr4

let a = +prompt("Первое число");
let b = +prompt("Второе число");
alert(`Сумма = ${a + b}, Разность = ${a-b}, Частное = ${a/b}, Произведение = ${a*b}`);