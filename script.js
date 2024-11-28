
let counterValue = 0;
function displayCounting() {
    document.getElementById("counting").innerHTML = counterValue;
}

function increment() {
    counterValue++;
    displayCounting()
}
function decrement() {
    counterValue--;
    displayCounting()
}
function reset() {
    counterValue = 0;
    displayCounting()
}