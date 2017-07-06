'use strict';

var chartColors = ['black', 'purple', 'brown', 'green', 'blue', 'red'];

var allOptions = [];
//these are meant to represent the three images that will show for each round
var firstImageEl = document.getElementById('first-image');
var secondImageEl = document.getElementById('second-image');
var thirdImageEl = document.getElementById('third-image');

//here is my constructor function for each option
function Image(name, path) {
  this.name = name;
  this.path = path;
  this.shown = 0;
  this.clicked = 0;
  this.helpfulId = '';
  allOptions.push(this);
}

//something to think about for later
// var images = [
//   new Image(),
//   new Image(),
// ];

var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
var boots = new Image('boots', './assets/boots.jpg');
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



//then google a random function to pick stuff out of an array
// Array.prototype.randomizedOption = function() {
//  return this[Math.floor(Math.random() *  this.length)]
//  }
//
// var myRandomElement = myArray.randomizedOption();


var randomImages = [];
var tempImages = [];

randomizedOption();
displayRandomImages();

//below is a function that returns a random number which should correspond to the images in my array
//test for duplicates (this can be perfected later)
function randomizedOption() {
  //var numbers = [];
  while (tempImages.length < 3) {
      var randomNumber = Math.floor(Math.random() * allOptions.length)
      if (!tempImages.includes(allOptions[randomNumber]) && !randomImages.includes(allOptions[randomNumber])) {
        tempImages.push(allOptions[randomNumber]);
        // if (tempImages[0] != randomImages[0] && tempImages[0] != randomImages[1] && tempImages[0] != randomImages[2] && tempImages[1] != randomImages[0] && tempImages[1] != randomImages[1] && tempImages[1] != randomImages[2] && tempImages[2] != randomImages[0] && tempImages[2] != randomImages[1] && tempImages[2] != randomImages[2]) {
      }
    // }
  }
  randomImages = tempImages;
  console.log(randomImages);
  console.log(tempImages);
  //after an option is chosen, erase everything and run the random function again
  tempImages = [];
}

function displayRandomImages() {
firstImageEl.src = randomImages[0].path;
firstImageEl.name = randomImages[0].name;
randomImages[0].shown++;
secondImageEl.src = randomImages[1].path;
secondImageEl.name = randomImages[1].name;
randomImages[1].shown++;
thirdImageEl.src = randomImages[2].path;
thirdImageEl.name = randomImages[2].name;
randomImages[2].shown++;
}

//write a for loop that calls both functions (the randomizedOption() and displayRandomImages())

var rounds = 0;
var clicked = 0;


// while (rounds < 25) {
//   randomizedOption();
//   displayRandomImages();
//   rounds++;
//   //clicked++
// }

//use event listener to respond each time the user clicks or chooses an option and store the number of clicks as well as percentage of clicks - it will modify what is already in the constructor function
var formEl = document.getElementsByClassName('form')[0];


formEl.addEventListener('click', handleClicked);
console.log(rounds);


function handleClicked(event) {
  if (rounds < 25) {
    event.preventDefault();
    var itemName = event.target.name;
      for (var i=0; i < allOptions.length; i++) {
        var currentImage = allOptions[i];
        if (currentImage.name === itemName) {
          currentImage.clicked++;
          console.log(currentImage);
        }
 console.log(itemName);
  }
  randomizedOption();
  displayRandomImages();
} else {
  for (var i=0; i < allOptions.length; i++) {
    //then write a function that calculates percentages of item chosen when shown
    allOptions[i].percentageClicked = allOptions[i].clicked / allOptions[i].shown * 100;
  }
  console.log(allOptions);
}
  rounds++;
}

// display all user choices only after user has made 25 selections
// use a prototype function

var imageNames = [];
var imagesClicked= [];
var imagesShown = [];


function getVoteTotals() {
  allOptions.sort(function(x, y) {
    return y.clicked - x.clicked;
  })
  displayChoices();
}

var context = document.getElementById('my-chart').getContext('2d');

function displayChoices() {
  for (var i = 0; i < allOptions.length; i++) {
    imageNames.push(allOptions[i].name)
  }

  for (var i = 0; i < allOptions.length; i++) {
    imagesClicked.push(allOptions[i].clicked)
  }

  for (var i = 0; i < allOptions.length; i++) {
    imagesShown.push(allOptions[i].shown)
  }

 var myChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: imageNames,
    datasets: [{
      label: '# of Votes',
      data: imagesClicked,
      backgroundColor: chartColors,
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
});
}
  // alert('Here are your choices.');
  //
  // document.write(bag.clicked 'votes for the Star Wars bag.');
  // document.write(banana.clicked 'votes for the banana slicer.');
  // document.write(bathroom.clicked 'votes for the IPAD and toiler paper holder.');
  // document.write(boots.clicked 'votes for the yellow rainboots.');
  // document.write(breakfast.clicked 'votes for the all-in-one breakfast maker.');
  // document.write(bubblegum.clicked 'votes for meatball bubblegum.');
  // document.write(chair.clicked 'votes for the uncomfortable-looking chair.');
  // document.write(cthulhu.clicked 'votes for the weird demon-looking creature.');
  // document.write(dogDuck.clicked 'votes for the dog wearing a duck bill.');
  // document.write(dragon.clicked 'votes for the canned dragon meat.');
  // document.write(pen.clicked 'votes for the pen-utensils.');
  // document.write(petSweep.clicked 'votes for the dust-grabbing slippers for pets.');
  // document.write(scissors.clicked 'votes for the pizza cutting scissors.');
  // document.write(shark.clicked 'votes for the shark sleeping bag.');
  // document.write(sweep.clicked 'votes for the baby outfit that can sweep your floor.');
  // document.write(tauntaun.clicked 'votes for the Star Wars-themed baby sleeping bag.');
  // document.write(unicorn.clicked 'votes for canned unicorn meat.');
  // document.write(usb.clicked 'votes for the wiggling usb.');
  // document.write(waterCan.clicked 'votes for the self-watering pot.')
  // document.write(wineGlass.clicked 'votes for the wine glass.');
// };
//
// displayChoices();
//no need for a for loop, instead do answer++
