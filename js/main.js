let button = document.querySelector(".btn");
let divOne = document.querySelector('h2');
console.log(divOne)

let divTwo = document.querySelector('h4');
console.log(divTwo);
let title = document.querySelector('h1');
let container = document.querySelector('.container')
let check = document.querySelector(".form-check-input");
let label = document.querySelector(".form-check-label");

// let label = querySelector(".form-check-label");


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

function showQuote() {
    let randomNumberQ = Math.floor(Math.random() * funnyQuotes.length);
    let randomNumberN = Math.floor(Math.random() * quoteAuthors.length);
    divOne.textContent = funnyQuotes[randomNumberQ];
    divTwo.textContent = quoteAuthors[randomNumberN];
}

button.onclick = function () {
    showQuote();
}




function DarkMode() {
    if (check.checked) {
        document.body.classList.add("bg-dark");
        document.body.style.transition = '0.5s'
        label.textContent = 'Dark Mode';
        label.classList.add('text-white');
        container.classList.add('bg-white');
        title.classList.add('text-white');
        divOne.classList.remove('text-white')
        divTwo.classList.remove('text-white')
        button.classList.add('bg-white');
        button.classList.add('text-dark');
    } else {
        label.textContent = "Light Mode";
        document.body.classList.remove("bg-dark");
        label.classList.remove("text-white");
        container.classList.remove("bg-white");
        title.classList.remove("text-white");
        divOne.classList.add("text-white");
        divTwo.classList.add("text-white");
        button.classList.remove("bg-white");
        button.classList.remove("text-dark");
    }
}
check.onclick = function () {
    DarkMode()
}