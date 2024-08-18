// Select the button element for generating a random quote
let button = document.querySelector(".btn");

// Select the h2 element where the quote will be displayed
let divOne = document.querySelector("h2");
console.log(divOne); // Log the h2 element to the console for debugging

// Select the h4 element where the author's name will be displayed
let divTwo = document.querySelector("h4");
console.log(divTwo); // Log the h4 element to the console for debugging

// Select the h1 element for the page title
let title = document.querySelector("h1");

// Select the container element for styling the content area
let container = document.querySelector(".container");

// Select the checkbox input element for toggling dark mode
let check = document.querySelector(".form-check-input");

// Select the label element that will display the mode (Dark Mode or Light Mode)
let label = document.querySelector(".form-check-label");

// Array of funny quotes
let funnyQuotes = [
  "“I told my wife she was drawing her eyebrows too high. She looked surprised.”",
  "“I threw a boomerang a few years ago. I live in constant fear.”",
  "“Why don’t scientists trust atoms? Because they make up everything!”",
  "“I would avoid the sushi if I was you. It’s a little fishy.”",
  "“I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.”",
  "“I’m reading a book about anti-gravity. It’s impossible to put down!”",
  "“Why did the scarecrow win an award? Because he was outstanding in his field!”",
  "“I used to play piano by ear, but now I use my hands.”",
  "“I would tell you a joke about an elevator, but it’s an uplifting experience.”",
  "“Parallel lines have so much in common. It’s a shame they’ll never meet.”",
];

// Array of authors corresponding to the funny quotes
let quoteAuthors = [
  "John Doe",
  "Jane Smith",
  "Alex Johnson",
  "Emily Davis",
  "Michael Brown",
  "Sarah Wilson",
  "David Lee",
  "Laura Martinez",
  "Chris Taylor",
  "Megan Anderson",
];

// Function to display a random quote and author
function showQuote() {
  let randomNumberQ = Math.floor(Math.random() * funnyQuotes.length); // Generate a random index for quotes
  let randomNumberN = Math.floor(Math.random() * quoteAuthors.length); // Generate a random index for authors
  divOne.textContent = funnyQuotes[randomNumberQ]; // Set the random quote in the h2 element
  divTwo.textContent = quoteAuthors[randomNumberN]; // Set the random author in the h4 element
}

// Add a click event listener to the button to show a random quote when clicked
button.onclick = function () {
  showQuote();
};

// Function to toggle dark mode
function DarkMode() {
  if (check.checked) {
    // Check if the checkbox is checked
    document.body.classList.add("bg-dark"); // Add dark background to the body
    document.body.style.transition = "0.5s"; // Add transition effect
    label.textContent = "Dark Mode"; // Change label text to 'Dark Mode'
    label.classList.add("text-white"); // Set text color of label to white
    container.classList.add("bg-white"); // Change container background to white
    title.classList.add("text-white"); // Change title text color to white
    divOne.classList.remove("text-white"); // Remove white text color from the quote
    divTwo.classList.remove("text-white"); // Remove white text color from the author
    button.classList.add("bg-white"); // Change button background to white
    button.classList.add("text-dark"); // Change button text color to dark
  } else {
    label.textContent = "Light Mode"; // Change label text to 'Light Mode'
    document.body.classList.remove("bg-dark"); // Remove dark background from the body
    label.classList.remove("text-white"); // Remove white text color from label
    container.classList.remove("bg-white"); // Remove white background from container
    title.classList.remove("text-white"); // Remove white text color from title
    divOne.classList.add("text-white"); // Set white text color for the quote
    divTwo.classList.add("text-white"); // Set white text color for the author
    button.classList.remove("bg-white"); // Remove white background from button
    button.classList.remove("text-dark"); // Remove dark text color from button
  }
}

// Add a click event listener to the checkbox to toggle dark mode when checked/unchecked
check.onclick = function () {
  DarkMode();
};
