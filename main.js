const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters
let lettersArray = Array.from(letters);

// select letters container
let lettersContainer = document.querySelector('.letters');


// generate Letters
lettersArray.forEach(letter => {

    lettersContainer.innerHTML += `<span class="letter-box">${letter}</span>`


});
// objectof words
const words = {
    programin: ["php", "javascript", "go", 'fortran'],
    moveis: ["transformer", "Hitman", "the road", 'examen'],
    people: ["mohamed", "moussa", "ayoub", 'noh ali'],
    countries: ["morocco", "gabon", "canada", 'usa'],
    fruits: ["lemon", "an apple", "banana", 'orange'],
    cars: ["ford", "audi", "bm", 'hunda']
}

let allKeys = Object.keys(words)

let randomKeyIndex = Math.floor(Math.random() * allKeys.length)

let randomKeyName = allKeys[randomKeyIndex];

let wordsValueName = words[randomKeyName]

let randomValueIndex = Math.floor(Math.random() * wordsValueName.length)

let chosenWord = wordsValueName[randomValueIndex]

// create span 

let letterGuessContainer = document.querySelector('.letter-guess')

let lettersAndSpace = Array.from(chosenWord)

console.log(lettersAndSpace)
lettersAndSpace.forEach(letter => {


    let emtySpan = document.createElement('span');

    if (letter === ' ') {

        emtySpan.className = 'with-space'
    }
    // appen spans tp yhe letters guess 
    letterGuessContainer.appendChild(emtySpan)
})

let guessSpans = document.querySelectorAll('.letter-guess span')
let wrongAttempt = 0;
let theDraw = document.querySelector('.hangman-draw')


// Handle clicking on letters
document.querySelectorAll('.letter-box').forEach(el => el.addEventListener('click', (e) => {

        // set the chose status

        e.target.classList.add('clicked');

        // get clicked letter
        const clickedLetter = e.target.innerHTML;



        Array.from(chosenWord).forEach((wordLetter, letterIndex) => {

            if (clickedLetter == wordLetter) {


                guessSpans.forEach((span, spanIndex) => {

                    if (letterIndex === spanIndex) {

                        span.innerHTML = wordLetter

                    }

                })
            }
        })
    }

))