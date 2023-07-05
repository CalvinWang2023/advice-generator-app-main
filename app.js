const diceBtn = document.querySelector(".generate-button");
const adviceNumber = document.querySelector(".number");
const adviceText = document.querySelector(".quote");
const apiUrl = "https://api.adviceslip.com/advice";

//Button click event
diceBtn.addEventListener("click", () => {
    //Request data
    fetch(apiUrl, {cache: "no-cache"})
        .then(response => response.json())
        .then((response) => {
            let data = response.slip;
            let dataNumber = data.id;
            let dataAdvice = data.advice;
            //Inject to DOM
            adviceNumber.innerHTML = `${dataNumber}`;
            adviceText.innerHTML = `\"${dataAdvice}\"`;
        })
});