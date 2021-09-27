// Start / Stop buttons
function buttonCreator(name){
    let button = document.createElement('a')
    button.textContent = name
    button.style.padding = '3%'
    button.style.margin = '0 5%'
    button.style.border = '1px solid #c2e812'
    // Mouseover effects
    button.addEventListener('mouseover', function() {
        this.style.fontWeight = 'bold'
        this.style.border = '2px solid #c2e812'
    })
    button.addEventListener('mouseout', function() {
        this.style.fontWeight = 'normal'
        this.style.border = '1px solid #c2e812'
    })
    return button
}
// Create the buttons and then add a class name to it
const startButton = buttonCreator('Start')
startButton.classList.add('start')
// Start button turn grey on click
startButton.addEventListener('click', function() {
    this.style.color = '#4f4f4f'
    this.style.border = '1px solid #4f4f4f'
    this.addEventListener('mouseover', function() {
        this.style.border = '1px solid #4f4f4f'
    })
    this.addEventListener('mouseout', function() {
        this.style.border = '1px solid #4f4f4f'
    })
})
// Reset button
const resetButton = buttonCreator('Reset')
resetButton.classList.add('reset')
// Body
const body = document.querySelector('body')
body.style.color = '#c2e812'
body.style.background = '#1c3144'
body.style.fontFamily = 'monospace'
body.prepend(startButton)
body.append(resetButton)
// Digit elements
let digits = document.querySelectorAll('.digit')
let msTens = document.querySelector('#msTens')
let msHund = document.querySelector('#msHundreds')
let secOne = document.querySelector('#secondOnes')
let secTen = document.querySelector('#secondTens')
// Initalize flags
let timer = 0
let startedTimer = false
let timerEnd = false

function startTimer() {
    if (!startedTimer) {
        msTens.textContent = 0
        msHund.textContent = 0
        secOne.textContent = 0
        secTen.textContent = 0
        timer = setInterval(count, 10)
    }
    // timerEnd = false
    startedTimer = true
}
function stopTimer() {
    clearInterval(timer)
    timer = 0
}
function resetTimer() {
    if (timerEnd) {
        startedTimer = false
        startTimer()
        digits.forEach(digit => digit.style.color = '#c2e812')
    }
}
function count() {
    if (msTens.textContent < 9) msTens.textContent++
    else {
        msTens.textContent = 0

        if (msHund.textContent < 9) msHund.textContent++
        else {
            msHund.textContent = 0

            if (secOne.textContent < 9) secOne.textContent++
            else {
                timerEnd = true
                secOne.textContent = 0
                secTen.textContent = 1
                stopTimer()
                digits.forEach(digit => digit.style.color = 'red')
                }
            }
        }
    }
// When buttons are clicked fire the functions
document.querySelector('.start').addEventListener('click', startTimer)
document.querySelector('.reset').addEventListener('click', resetTimer)

// Counts up to 10 seconds
// Increments every 10 ms
// Has digits change to red when it gets to 10 seconds
// Should not count past 10 seconds