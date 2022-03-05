// Selectors
const getAdviceBtn = document.getElementById("getAdvice")
const adviceCode = document.getElementById("adviceCode")
const adviceText = document.getElementById("advice")

// Get Advice Function
async function getAdvice() {
    const request = await fetch("https://api.adviceslip.com/advice")
    const data = await request.json()

    const code = data.slip.id
    const advice = data.slip.advice

    showAdvice(code,advice)
}


function showAdvice(code,advice) {
    // Showing the advice code
    adviceCode.textContent = code
    
    // Showing the advice in the DOM
    adviceText.textContent = advice
}


getAdvice()

// Events
getAdviceBtn.addEventListener("click",getAdvice)