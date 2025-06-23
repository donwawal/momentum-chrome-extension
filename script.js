// Array of inspirational quotes from Naval Ravikant and other thought leaders
// These quotes will be randomly displayed to provide daily motivation
const quotes = [
    "A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.",
    "The most important skill for getting rich is becoming a perpetual learner.",
    "A rational person can find peace by cultivating indifference to things outside of their control.",
    "The secret to a long life is to die young as late as possible.",
    "The smarter you get, the slower you read.",
    "If you can't see yourself working with someone for life, don't work with them for a day.",
    "The real winners are the ones who step out of the game entirely, who don't play the game, who rise above it.",
    "The older you get, the more you realize that you're not the hero of your own story.",
    "The best way to predict the future is to create it.",
    "The measure of wealth is freedom. The measure of health is lightness. The measure of intellect is judgment.",
    "You have to do the hard things. The things that nobody else is doing.",
    "The world reflects your own feelings back at you.",
    "The greatest superpower is the ability to change yourself.",
    "A healthy person is not just someone who is not sick.",
    "The best way to escape competition is to be authentic.",
    "You're not going to get rich renting out your time. You must own equity - a piece of a business - to gain your financial freedom.",
    "Spend more time making the big decisions.",
    "The purpose of life is to find your gift. The work of life is to develop it. The meaning of life is to give your gift away.",
    "The hardest thing is not doing what you want - it's knowing what you want.",
    "If you want to be successful, surround yourself with people who are more successful than you are.",
    "Success is the enemy of learning.",
    "You can't be happy and be a victim at the same time.",
    "The most dangerous things are the things that are slightly wrong.",
    "The more you know, the less you believe.",
    "To write a great book, you must first become the book.",
    "If you're not willing to do a task for free, you're not willing to do it for any amount of money.",
    "The best way to build a great network is to be someone people want to network with.",
    "The biggest mistake you can make is to not make any.",
    "The person who is the most flexible is the one who is the most powerful.",
    "You can't get rich by renting out your time.",
    "If you want to make a lot of money, you have to be willing to be unreasonable.",
    "The first step to being a great investor is to be a great saver.",
    "The best way to be a great investor is to be a long-term investor.",
    "The best way to learn is to teach.",
    "The best way to get a great job is to be someone who doesn't need a great job.",
    "The best way to get a great idea is to have a lot of ideas.",
    "The best way to be a great writer is to be a great reader.",
    "The best way to be a great speaker is to be a great listener.",
    "The best way to be a great thinker is to be a great questioner.",
    "The best way to be a great problem solver is to be a great problem finder.",
    "The best way to be a great decision maker is to be a great option generator.",
    "The best way to be a great strategist is to be a great tactician.",
    "The best way to be a great marketer is to be a great storyteller.",
    "The best way to be a great product manager is to be a great customer.",
    "The best way to be a great designer is to be a great user.",
    "The best way to be a great manager is to be a great coach.",
    "The best way to be a great artist is to be a great observer.",
    "The best way to be a great scientist is to be a great experimenter.",
    "The more you learn, the more you earn.",
    "The quality of your life is the quality of your decisions.",
    "The quality of your decisions is the quality of your questions.",
    "The quality of your mind is the quality of your life.",
    "The more you know, the more you realize you don't know.",
    "The more you do, the more you realize you can do.",
    "The more you give, the more you get.",
    "The more you love, the more you are loved.",
    "The more you laugh, the more you live.",
    "The more you dream, the more you achieve.",
    "The more you dare, the more you win.",
    "The more you try, the more you learn.",
    "The more you fail, the more you succeed.",
    "The more you risk, the more you gain.",
    "The more you share, the more you have.",
    "The more you care, the more you are cared for.",
    "The more you help, the more you are helped.",
    "The more you inspire, the more you are inspired.",
    "The more you create, the more you are creative.",
    "The more you communicate, the more you are communicative.",
    "The more you connect, the more you are connected.",
    "The more you lead, the more you are a leader.",
    "The more you listen, the more you are a listener.",
    "The more you read, the more you are a reader.",
    "The more you write, the more you are a writer.",
    "The more you speak, the more you are a speaker.",
    "The more you feel, the more you are a feeler.",
    "The more you are, the more you have.",
    "The more you give, the more you live.",
    "The more you love, the more you are.",
    "Desire is a contract you make with yourself to be unhappy until you get what you want."
];

/**
 * Updates the time display on the page
 * This function gets the current time, formats it as HH:MM, and updates the time element
 * It's called immediately when the page loads and then every second via setInterval
 */
function updateTime() {
    // Get the HTML element that displays the time
    const timeElement = document.getElementById('time');
    
    // Create a new Date object to get current time
    const now = new Date();
    
    // Extract hours and minutes from the current time
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensures minutes always show as 2 digits
    
    // Format time as HH:MM and update the display
    timeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes}`;
}

/**
 * Sets up the personalized greeting based on user's name and time of day
 * If no name is stored, it prompts the user to enter one
 * The greeting changes based on the current hour (morning/afternoon/evening)
 */
function setGreeting() {
    // Get the HTML element that displays the greeting
    const greetingElement = document.getElementById('greeting');
    
    // Retrieve the user's name from browser's local storage
    const name = localStorage.getItem('name');
    
    // Get current time to determine appropriate greeting
    const now = new Date();
    const hours = now.getHours();

    if (name) {
        // If name exists, create a time-appropriate greeting
        let greeting;
        if (hours < 12) {
            greeting = "Good morning";
        } else if (hours < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }
        greetingElement.textContent = `${greeting}, ${name}.`;
    } else {
        // If no name is stored, show a prompt and make it clickable
        greetingElement.textContent = "Hello, what's your name?";
        greetingElement.style.cursor = "pointer";
        
        // Add click event listener to prompt for name input
        greetingElement.addEventListener('click', () => {
            const newName = prompt("Please enter your name:");
            if (newName) {
                // Store the name in local storage for future use
                localStorage.setItem('name', newName);
                // Refresh the greeting with the new name
                setGreeting();
            }
        });
    }
}

/**
 * Manages the daily goal functionality
 * Allows users to set a daily goal, mark it as complete, and edit it
 * Goals are stored per day and persist across browser sessions
 */
function handleGoal() {
    // Get all the HTML elements related to goal functionality
    const goalInput = document.getElementById('goal-input');
    const goalDisplay = document.getElementById('goal-display');
    const goalText = document.getElementById('goal-text');
    const goalCheckbox = document.getElementById('goal-checkbox');
    const goalPrompt = document.querySelector('#goal-container p');

    // Retrieve any previously saved goal from local storage
    const savedGoal = JSON.parse(localStorage.getItem('goal'));
    
    // Get today's date as a string for comparison
    const today = new Date().toDateString();

    if (savedGoal && savedGoal.date === today) {
        // If there's a saved goal for today, show the goal display
        goalInput.style.display = 'none';
        goalPrompt.style.display = 'none';
        goalDisplay.style.display = 'flex';
        
        // Populate the goal text and checkbox with saved values
        goalText.textContent = savedGoal.text;
        goalCheckbox.checked = savedGoal.completed;
        
        // Apply visual styling if goal is completed
        if (savedGoal.completed) {
            goalText.classList.add('completed');
        }
    } else {
        // If no goal for today, show the input prompt
        goalInput.style.display = 'block';
        goalPrompt.style.display = 'block';
        goalDisplay.style.display = 'none';
    }

    // Handle goal input when user presses Enter
    goalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && goalInput.value.trim() !== '') {
            // Create a goal object with text, date, and completion status
            const goal = {
                text: goalInput.value.trim(),
                date: today,
                completed: false
            };
            // Save the goal to local storage
            localStorage.setItem('goal', JSON.stringify(goal));
            // Refresh the goal display
            handleGoal();
        }
    });

    // Handle checkbox changes to mark goal as complete/incomplete
    goalCheckbox.addEventListener('change', function() {
        // Retrieve the saved goal and update its completion status
        const savedGoal = JSON.parse(localStorage.getItem('goal'));
        savedGoal.completed = goalCheckbox.checked;
        localStorage.setItem('goal', JSON.stringify(savedGoal));
        
        // Toggle the visual styling for completed goals
        goalText.classList.toggle('completed', savedGoal.completed);
    });

    // Handle editing the goal text when user clicks away from the text
    goalText.addEventListener('blur', function() {
        // Retrieve the saved goal and update its text content
        const savedGoal = JSON.parse(localStorage.getItem('goal'));
        savedGoal.text = goalText.textContent.trim();
        localStorage.setItem('goal', JSON.stringify(savedGoal));
    });
}

/**
 * Displays a random quote from the quotes array
 * Updates both the quote text and author attribution
 */
function showQuote() {
    // Get the HTML elements for quote display
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    // Generate a random index to select a quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Display the selected quote with quotation marks
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
    
    // Set the author attribution
    authorElement.textContent = "– Naval Ravikant";
}

/**
 * Sets a random background image from Bing's daily wallpaper API
 * This provides a fresh, beautiful background each time the page loads
 */
function setBackground() {
    // Set the body's background image to a random high-resolution image
    // Using Lorem Picsum for reliable, high-quality random images
    document.body.style.backgroundImage = `url(https://picsum.photos/3840/2160?random=${Date.now()})`;
}

// Initialize the application when the page loads

// Update the time display immediately and then every 1000ms (1 second)
updateTime();
setInterval(updateTime, 1000);

// Set up all the main components of the dashboard
setGreeting();    // Initialize personalized greeting
handleGoal();     // Set up goal functionality
showQuote();      // Display a random motivational quote
setBackground();  // Set a beautiful background image
