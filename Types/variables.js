"use strict";
// let movieTitle: string = 'Amadeus';
// movieTitle = 'Arrival';
// // movieTitle = 9;
// movieTitle.toUpperCase();
// let numCatLives: number = 9;
// numCatLives += 1;
// // numCatLives = 'zero';
// let gameOver: boolean = false;
// gameOver = true;
// // gameOver = 'true';
// null;
// undefined;
// let nothing: null = null;
// let foo: undefined = undefined;
// // Type Inference
// let number = 343;
// number = 'dsf'; // cannot assign type 'string' to type 'number'
// number = true; // cannot assign type 'boolean' to 'number'
// // the any type => turn off ts complain.
// let thing: any = 'hello';
// thing = 1;
// thing = false;
// thing();
// thing.toUpperCase();
// Delayed Initialization & Implicit Any
const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie; // foundMovie is 'any' type
for (let movie in movies) {
    if (movie === 'Amadeus') {
        foundMovie = 'Amadeus';
    }
}
