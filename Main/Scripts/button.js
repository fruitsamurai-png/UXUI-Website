// Get the button element by its id
const scheduleButton = document.getElementById('schedulebutton');
const accountButton = document.getElementById('accountbutton');
const trainingButton = document.getElementById('trainingbutton');
const equipmentButton = document.getElementById('equipmentbutton');
const DragonButton = document.getElementById('little-dragonbutton');
const beltbutton = document.getElementById('beltbutton');
const mainContent = document.querySelector('main');
const logoButton = document.getElementById('logo-button');
document.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.querySelector('main');
  // Your code that refers to mainContent goes here
  
  // Add a click event listener to the button
  scheduleButton.addEventListener('click', function() {
    // Navigate to another page
    var script = document.createElement('script');
    script.src = './Scripts/Schedule.js';
    fetch('./Layouts/schedule.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
      // Add an onload event listener to the script element to ensure that the script is loaded before it is executed
      script.onload = function() {
        console.log('Schedule.js loaded');
        initSchedule(); // Call the function after the script has been loaded
      };
      document.head.appendChild(script);
    });
  });//end listener for button

  // Add a click event listener to the button
  accountButton.addEventListener('click', function() {
    // Navigate to another page
    fetch('./Layouts/account.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
    });
  });//end listener for button

  // Add a click event listener to the button
  trainingButton.addEventListener('click', function() {
    // Navigate to another page
    fetch('./Layouts/training.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
    });
  });//end listener for button

  // Add a click event listener to the button
  equipmentButton.addEventListener('click', function() {
    // Navigate to another page
    fetch('./Layouts/equipment.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
    });
  });//end listener for button

  // Add a click event listener to the button
  DragonButton.addEventListener('click', function() {
    // Navigate to another page
    fetch('./Layouts/little-dragon.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
    });
  });//end listener for button

  // Add a click event listener to the button
  beltbutton.addEventListener('click', function() {
    // Navigate to another page
    fetch('./Layouts/belt.html')
    .then(response => response.text())
    .then(data => {
      mainContent.innerHTML = data;
    });
  });//end listener for button

  logoButton.addEventListener('click', function() {
    // Navigate to the home page
    window.location.href = './index.html';
  });
});//end listener for loading dom
