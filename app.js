'use strict';

//these are meant to represent the three images that will show for each round
var firstImageEl = document.getElementsByClassName('first-image')[0];
var secondImageEl = document.getElementsByClassName('second-image')[0];
var thirdImageEl = document.getElementsByClassName('third-image')[0];

//here is my constructor function for each option
function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
}

//something to think about for later
// var images = [
//   new Image(),
//   new Image(),
// ];

var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var boots = new Image('bathroom', './assets/bathroom.jpg');
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dogDuck = new Image('dog-duck', './assets/dog-duck.jpg');
var dragon = new Image('dragon', './assets/dragon.jpg');
var pen = new Image('pen', './assets/pen.jpg');
var petSweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
var scissors = new Image('scissors', './assets/scissors.jpg');
var shark = new Image('shark', './assets/shark.jpg');
var sweep = new Image('sweep', './assets/sweep.png');
var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
var usb = new Image('usb', './assets/usb.gif');
var waterCan = new Image('water-can', './assets/water-can.jpg');
var wineGlass = new Image('wine-glass', './assets/wine-glass.jpg');

var allOptions = [bag, banana, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

//then google a random function to pick stuff out of an array
// Array.prototype.randomizedOption = function() {
//  return this[Math.floor(Math.random() *  this.length)]
//  }
//
// var myRandomElement = myArray.randomizedOption();

//below is a function that returns a random number which should correspond to the images in my array
function randomizedOption(image) {
for (var i = 0; i < 3; i++) {
    return Math.floor(Math.random() * allOptions.length)
  };
};

console.log(randomizedOption());

//write a new function that uses this function above to push 3 images into an array

//show random options

//test for duplicates (this can be perfected later)
//use event listener to respond each time the user clicks or chooses an option and store the number of clicks as well as percentage of clicks - it will modify what is already in the constructor function

//after an option is chosen, erase everything and run the random function again

//no need for a for loop, instead do answer++

//display all user choices only after user has made 25 selections

//then write a function that calculates percentages of item chosen when shown
