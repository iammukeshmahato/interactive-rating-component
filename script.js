let star = document.querySelector(".review");
let submitBtn = document.querySelector(".submit");
let reviewCard = document.querySelector(".review-card")
let thankYouCard = document.querySelector(".thankyou-card")
let clicked_btn=null;

Array.from(star.children).forEach(element => {

    element.addEventListener("click", () => {
        clicked_btn = element.innerText;
    })

})

submitBtn.addEventListener("click", () => {
    if (clicked_btn != null) {
        reviewCard.style = "display:none;"
        thankYouCard.style = "display:flex;"
        document.querySelector(".rating").innerHTML = `<span>You selected ${clicked_btn} out of 5</span>`
    }

})