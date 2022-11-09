"use strict"

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo")
// console.log(firstName)

/***** 02 Deklaration + Wertzuweisung *****/

// let firstName  //Deklaratiion bzw. Definition
// firstName = "Mathias" //Wertzuweisung
// console.log(firstName) //Ausgabe

// let familyName  = "Weber" //Deklaratiion bzw. Definition & Wertzuweisung
// console.log(familyName) //Ausgabe
// console.log(firstName + " " + familyName) //Ausgabe

// let firstName, familyName
// firstName= prompt("Vorname")
// familyName= prompt("Nachname")
// console.log(firstName + " " + familyName)

/***** JS ist eine untypisierte Sprache *****/

// let test
// test="Hi"
// // test=2
// // test=true
// console.log("Datentyp: " + typeof test)
// console.log (test)  //Ausgabe

// const test="HI"
// // test="Hallo"
// console.log("Inhalt: " + test)






/***** Beispielberechnung *****/

// Deklaration
let ageJohn=25, ageMark=30
let birthYearJohn, birthYearMark

// Wertzweisung
// ageJohn=25
// ageMark=30

let date = new Date()
// let year = date.getFullYear()
console.log(date)

let year = new Date().getFullYear()

console.log(year)

// Berechnung
birthYearJohn = year - ageJohn
birthYearMark = year - ageMark

// Ausgabe
console.log ("birthYearJohn = " + birthYearJohn)
console.log ("birthYearMark = " + birthYearMark)
