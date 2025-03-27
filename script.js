const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const clearButton = document.getElementById("clear-btn");

textInput.addEventListener ("input", () => {
    charCount.textContent = `Character Count: ${(textInput.value).length}/50`;
    if ((textInput.value).length === 100) {
        charCount.style.color = "red"; 
    } else {
        charCount.style.color = "rgb(53, 15, 66)";
    }
})

clearButton.addEventListener ("click", () => {
    charCount.textContent = `Character Count: 0/100`;
    charCount.style.color = "rgb(53, 15, 66)";
})
