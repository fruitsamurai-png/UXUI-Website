function initSchedule() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];

  const calendarHeader = document.querySelector('.calendar-header');
  const currentMonth = document.querySelector('#current-month');
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonthIndex = currentDate.getMonth();

  function updateCalendar() {
    currentMonth.textContent = months[currentMonthIndex] + ' ' + currentYear;
    // Get the first day of the current month
    const firstDay = new Date(currentYear, currentMonthIndex, 1);
    // Get the index of the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayIndex = firstDay.getDay();
    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
    // Clear the calendar grid
    const calendarGrid = document.querySelector('.calendar-grid');
    calendarGrid.innerHTML = '';
    // Add the days of the week to the calendar grid
    for (let i = 0; i < 7; i++) {
      calendarGrid.innerHTML += '<div class="day-name">' + weekdays[i] + '</div>';
    }
    // Add the days of the month to the calendar grid
    for (let i = 0; i < firstDayIndex; i++) {
      calendarGrid.innerHTML += '<div class="day"></div>';
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarGrid.innerHTML += '<div class="day">' + i + '</div>';
    }
  }

  updateCalendar();
  console.log("hello");

  document.querySelector('#prev-month').addEventListener('click', function() {
    currentMonthIndex--;
    console.log("hello");
    if (currentMonthIndex < 0) {
      currentMonthIndex = 11;
      currentYear--;
    }
    updateCalendar();
  });

  document.querySelector('#next-month').addEventListener('click', function() {
    currentMonthIndex++;
    console.log("hello");
    if (currentMonthIndex > 11) {
      currentMonthIndex = 0;
      currentYear++;
    }
    updateCalendar();
  });
}

initSchedule(); // Call the function to initialize the code