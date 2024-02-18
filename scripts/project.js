// Get the button and timer elements
const studyBtn = document.getElementById("studyBtn");
const timer = document.getElementById("timer");

// Initialize variables
let startTime;
let elapsedTime = 0;
let timerInterval;
let countdownInterval; // Separate variable for countdown

// Function to start the stopwatch
function startStopwatch() {
  clearInterval(countdownInterval); // Ensure any existing countdown is stopped
  fetchQuotes(); // Fetch a new affirmation
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    formatTime(elapsedTime);
  }, 100);

  studyBtn.textContent = "Stop";
  studyBtn.removeEventListener("click", startStopwatch);
  studyBtn.addEventListener("click", stopStopwatchAndStartCountdown);

}

// Function to stop the stopwatch and immediately start the countdown
function stopStopwatchAndStartCountdown() {
  clearInterval(timerInterval); // Stop the stopwatch
  startCountdown(); // Immediately start the countdown
  studyBtn.style.display = "none"; // Hide the button
}

// Function to start the countdown
function startCountdown() {
  let countdownTime = elapsedTime/5;

  countdownInterval = setInterval(function() {
    countdownTime -= 100;
    formatTime(countdownTime);

    if (countdownTime <= 5000) {
      timer.style.color = 'red';
    }

    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      timer.textContent = 'TIMES UP!';
      timer.style.color = 'gray';
      resetTimer();
      studyBtn.style.display = ""; // Show the button again
    }
  }, 100);
}

function resetTimer() {
  studyBtn.textContent = "Start";
  studyBtn.removeEventListener("click", stopStopwatchAndStartCountdown);
  studyBtn.addEventListener("click", startStopwatch);
  elapsedTime = 0; // Reset elapsed time
}

function formatTime(time) {
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

// Initial event listener for the study button click
studyBtn.addEventListener("click", startStopwatch);

// Get the finished button element
const finishedBtn = document.getElementById("finishedBtn");

// Function to reset everything
function resetEverything() {
  // Stop any running intervals for stopwatch and countdown
  clearInterval(timerInterval);
  clearInterval(countdownInterval);

  // Reset elapsed time to zero
  elapsedTime = 0;
  
  // Reset the timer display to show 00:00.000 or your preferred reset state
  timer.textContent = "00:00.000";
  timer.style.color = ''; // Reset color to default

  // Show the start button if it was hidden and set its text and event listeners correctly
  studyBtn.style.display = ""; // Show the button
  studyBtn.textContent = "Start";
  studyBtn.removeEventListener("click", stopStopwatchAndStartCountdown);
  studyBtn.removeEventListener("click", startStopwatch); // Remove it first to avoid duplicate event listeners
  studyBtn.addEventListener("click", startStopwatch);
}

// Add event listener to the finished button
finishedBtn.addEventListener("click", resetEverything);

// Function to fetch an affirmation and update the motivation text


function fetchQuotes() {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    fetch('YOUR_API_ENDPOINT')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming 'data' is an array of quotes
        const randomIndex = Math.floor(Math.random() * data.length); // Get a random index
        const quote = data[randomIndex]; // Select a random quote
        displayQuote(quote); // Function to display the quote
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }
  
  function displayQuote(quote) {
    // Assuming 'quote' object contains 'q' for quote text and 'a' for author name
    // Find the element(s) where you want to display the quote and author
    const quoteElement = document.querySelector('.quote-text'); // Adjust the class as needed
    const authorElement = document.querySelector('.quote-author'); // Adjust the class as needed
    
    // Update the text content of your elements
    quoteElement.textContent = quote.q; // Display the quote text
    authorElement.textContent = quote.a; // Display the author name
  }

