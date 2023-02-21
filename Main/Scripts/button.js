// Get the button element by its id
const scheduleButton = document.getElementById('schedulebutton');
const accountButton = document.getElementById('accountbutton');
const trainingButton = document.getElementById('trainingbutton');
const equipmentButton = document.getElementById('equipmentbutton');
const DragonButton = document.getElementById('little-dragonbutton');
const mainContent = document.querySelector('main');
const logoButton = document.getElementById('logo-button');
document.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.querySelector('main');
  // Your code that refers to mainContent goes here

  // Add a click event listener to the button
  if (scheduleButton && mainContent) {
    scheduleButton.addEventListener('click', function() {
      // Navigate to another page
      console.log("hello");
      fetch('./Layouts/schedule.html')
      .then(response => response.text())
      .then(data => {
        mainContent.innerHTML = data;
      });
    });//end listener for button
  }

  logoButton.addEventListener('click', function() {
    // Navigate to the home page
    window.location.href = './index.html';
  });
});//end listener for loading dom
