


/*

var vocab = new Array();
vocab["giallo"] = "yellow";
vocab["rosso"] = "red";
vocab["verde"] = "green";
var color = window.prompt("Colore?");
if (typeof (vocab[color]) != "undefined") {
window.alert(color + " = " + vocab[color])
} else 
{
    window.alert("Sorry , translation not available!")
}




//let firstName = 'Sara';
// let age = 21;
// let student = true;


// console.log("Hello " + firstName)
// console.log("You are" , age, "years old");
// console.log(student);

// document.getElementById("p1").innerHTML = "Hello "  +firstName;
// document.getElementById("p2").innerHTML = "You are "  + age + " years old";


//let username = window.prompt("Whats your name");

// let username;

// document.getElementById("mybutton").onclick = function(){
    // username = document.getElementById("mytext").value;
    // console.log(username);
    // document.getElementById("mylabel").innerHTML = "Hello " + username;
// }

// console.log('Ok')


// Variablat
// const, let, var

// const
// const firstName = "Jane"

// var  - update ; rideklarim
// var first_name = "John"

// first_name = "Anna"

// var first_name = 2

// console.log(first_name)

// let  - update; jo rideklarim tek i njejti block
// let last_name = 'Doe'
// last_name = 'Smith'

// Tipet e te dhenave:
// 1.  String
// var first_name = "Alexi"
// let last_name = 'Doe'
// console.log(firstName.length)
// console.log(first_name.toLocaleUpperCase())
// console.log(first_name.slice(1, -1))
// var first_name = window.prompt("Vendos emrin", 'Te nise me germe te madhe')
// let last_name = window.prompt("Vendos mbiemrin", 'Te nise me germe te madhe')
// let space = ' '
// let number = '20'
// let number1 = Number(window.prompt("Numri 1"))
// let number2 = Number(window.prompt("Numri 2"))
// console.log(typeof (number2))
// console.log(2)
// console.log(`Hello ${first_name} ${last_name}`)
// console.log("Shuma " + (number1 + number2))
// 2. Number
// let nr1 = 5  // int
// let nr2 = 6.9  // float
// let nr3 = '5'
// nr2 = nr2 + 2
// nr2 += 2
// console.log(nr1 % nr2)

// console.log(nr1 >= nr2)
// console.log(nr1 == nr2) // false
// console.log(nr1 != nr2) //true
// console.log(nr1 == nr3) // true
// console.log(nr1 === nr3) // false
//  5 == 5 && number == string => T && F => F

// console.log(nr1 - nr3)
// console.log(false === 0) //true


// and => &&
// console.log(nr1 >= nr2 && false === 0 && nr1 == nr3) // F && F => F && T => T
//  T && T => T
//  F && T => F
//  T && F => F
//  F && F => F

//  or => ||
// console.log(nr1 >= nr2 || false === 0 && nr1 == nr3)
//  T || T => T
//  T || F => T
//  F || T => T
//  F || F => F
// not => !
//-  !F =>  T
// - !T => F



// 3. Boolean: true dhe false

// 4. null
// y // error
// let bosh = null

// 5. undefined
// let percaktim;

// Strukture te dhenash
// 1. Array => lista, vektor
// let array_1 = [1, 'a', true, [1, 8, [9, 8], 3], [8, 6]]
/*
console.log(array_1[4][0])
array_1[2] = 'text'
console.log(array_1.length)
array_1[array_1.length] = 'add'
console.log(array_1)


let array_2 = []
array_2[0] = 1
array_2[1] = 3
array_2['textIndex'] = 6
// console.log(array_2)

let array_3 = new Array(8, 7, 2, 1, true)

let array_4 = new Array()
array_4[0] = 1
array_4[1] = 3
array_4['textIndex'] = 6
*/

// while, do-while, for, for-in
// 1-10
// while
// while(kushti){instruksione}
// let n = 11
// while (n < 11) {
//     console.log(n)
//     n++
// n = n + 2
// n = 1 +2  => n=3
// }

// hapi 1  n=1, 1 < 10 true => 1 => n = 1 +1 => n=2
// hapi 2 n=2, 2 <10 true => 2 => n = 2+1 => n=3

// hapi 9 n = 9 9<10 true => 9 => n= 9+1 => n=10
// hapi 10 n =10, 10<10 false

// do -while
// do {instruksionet} while(kushti)

// do {
//     console.log(n)
//     n++
// } while (n < 11)

// hapi 1 = > n=1, 1 => n= 1+1  =2 => 2<11 true

// for
// for(incializimi; kushti; in/de){instruksione}
/*
for (let number = 1; number < 11; number++) {
    console.log(number)
}

let trajnime = ['web', 'java', 'python', 'php', 'django']
let ndihme = ''
for (let trajnim = 0; trajnim < trajnime.length; trajnim++) {
    ndihme = ndihme + "<p>" + trajnime[trajnim] + "</p>"
    document.getElementById('afisho').innerHTML = ndihme
}


// hapi 1: ndihme = '' index: 0 , 0<5 true
//  '' = ''+ 'web' => ndihme = 'web' index: 1, 1< 5 true
//   ndihme = 'web'+ 'java' => ndihme='webjava'


// for in
// for( incializimi in variabli array/object){instruksione}
// for (let i in trajnime) {
    // console.log("Ne indeksin " + i + " gjendet vlera " + trajnime[i] + ".")}

// if, switch
// let nr_1 = 5
// let nr_2 = 3
// if(kusht){}
// if (nr_1 > nr_2) {
    // console.log("Nr 1 eshte me i madh se Nr 2")}


// if(kusht){} else{}
// if (nr_1 > nr_2) {
//     console.log(nr_1 + "  eshte me i madh se " + nr_2)
// } else {
//     console.log(nr_1 + " eshte me i vogel se " + nr_2)
// }

// if(kusht){} else if(kusht){} else{}

/*
if (nr_1 > nr_2) {
    console.log(nr_1 + "  eshte me i madh se " + nr_2)
} else if (nr_1 == nr_2) {
    console.log(nr_1 + "  eshte e barabarte me " + nr_2)
    if (nr_1 > 4) {
        console.log(nr_1 + "me i madh se 4")
    } else {
        console.log(nr_1 + "me i vogel se 4")
    }
}
else {
    console.log(nr_1 + " eshte me i vogel se " + nr_2)
}

let dita = window.prompt("Vendos diten e javes")
switch (dita) {
    case 'hene':
        console.log("Hene")
        break
    case 'marte':
        console.log("marte")
        break
    default:
        console.log("Jo")
}
 
*/

