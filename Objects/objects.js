"use strict";
// // A function with an object type parameter
// const printName = (name: { first: string; last: string }): void => {
//   console.log(`Name: ${name.first} ${name.last}`);
// };
// const singer = {
//   first: 'Phuong',
//   last: 'Nguyen',
//   age: 22,
//   isAlive: true,
// };
function calculatePayout(song) {
    return song.numStreams * 0.33;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: 'UnchainedMelogy',
    artist: 'Righteous Brothers',
    numStreams: 12873321,
    credits: {
        producer: 'PhilSpector',
        writer: 'Alex North',
    },
};
console.log(`calculatePayout: ${calculatePayout(mySong)}`);
printSong(mySong);
