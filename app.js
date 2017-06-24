'use strict';

//my photos still need to be added to my assets folder
var firstImageEl = document.getElementsByClassName('first-image')[0];
var secondImageEl = document.getElementsByClassName('second-image')[0];
var thirdImageEl = document.getElementsByClassName('third-image')[0];

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
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
