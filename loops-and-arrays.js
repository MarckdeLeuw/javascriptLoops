// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];
//optie 1
for (let i = 0; i < names.length; i++) {
    console.log(names[i]+"je");
}
//optie 2
for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    console.log(`${currentName}je`);
}
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]




// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

//onderstaand logt alleen

const numbers = [2, 4, 5, 29, 38];
for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if(currentNumber%2 === 0){
        console.log(currentNumber*2);
    } else{
        console.log(numbers[i]*3);
    }
}
//Gevraagd wordt om de array aan te passen
const numbersB = [2, 4, 5, 29, 38];
for (let i = 0; i < numbersB.length; i++) {
    //const currentNumberB = numbersB[i];
    if(numbersB[i]%2 === 0){
         numbersB[i] = numbersB[i]*2;
    } else{
        numbersB[i] = numbersB[i]*3;
    }
}
console.log(numbersB);
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 10, 87, 76 ];




// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [x] is [y]"
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

//NOTE De omschrijving van de opdracht is niet correct
//Een vierkant heeft geen volume maar een oppervlakte
//Er wordt gelijkzijdige kubus bedoeld met gelijke hoogte breedte en diepte
// 'Het volume van een kubus met ribbe 30 is 27000' moet je willen presenteren
//Onderstaande tekst is raar


const squares = [30, 2, 8, 24, 11];
console.log(squares);
for (let i = 0; i < squares.length; i++) {
    //console.log(`Het volume van een kubus met ribbe ${squares[i]} is ${squares[i]*squares[i]*squares[i]}`) ;
    //squares[i] = `Het volume van een kubus met ribbe ${squares[i]} is ${squares[i]*squares[i]*squares[i]}`;
    // ^3 kan je niet tot de macht verheffen, moet met Math.pow(4,3) werken is 4^3
    squares[i] = `Het volume van een kubus met ribbe ${squares[i]} is ${Math.pow(squares[i],3)}`;
}

console.log(squares);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft: [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]
console.log('ONDERESTAAND IS EXTRA OPDRACHT WAARBIJ EEN NIEUWE STRING WORDT GEMAAKT, IPV OVERSCHRIJVEN OUDE')
const ribs = [30, 2, 8, 24, 11];
const cubes = []
console.log(cubes);
for (let i = 0; i < ribs.length; i++) {
    //console.log(`Het volume van een kubus met ribbe ${squares[i]} is ${squares[i]*squares[i]*squares[i]}`) ;
    //squares[i] = `Het volume van een kubus met ribbe ${squares[i]} is ${squares[i]*squares[i]*squares[i]}`;
    // ^3 kan je niet tot de macht verheffen, moet met Math.pow(4,3) werken is 4^3
    cubes[i] = `Het volume van een kubus met ribbe ${ribs[i]} is ${Math.pow(ribs[i],3)}`;
}
console.log(cubes);
console.log(ribs);