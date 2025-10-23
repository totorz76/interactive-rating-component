const container = document.getElementById("container");
const star = document.createElement("div");
star.id = "star";
container.append(star);
const img = document.createElement("img");
img.src = "./assets/images/icon-star.svg";
star.append(img);
const choice = document.createElement("div");
choice.id = "choice";
container.append(choice);
const txt = document.createElement("div");
txt.id = "txt";
container.append(txt);
const titre = document.createElement("h1");
titre.textContent = "How did we do?";
txt.append(titre);
const info = document.createElement("p");
info.textContent = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
txt.append(info);
const notes = document.createElement("div");
notes.id = "notes";
container.append(notes);
const numbers = [1, 2, 3, 4, 5];
let n = 0;
// numbers.forEach(value => {
//     const btn = document.createElement("button");
//     btn.textContent = [numbers[n]];
//     notes.append(btn);
//     n++
// });
// boucle de création des boutons de notes
while (n < numbers.length) {
    const btn = document.createElement("button")
    btn.textContent = [numbers[n]]
    btn.addEventListener("mouseover", () => {
        btn.classList.add("hover")
        console.log(btn);
    })
    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("hover")
        console.log(btn);
    })
    btn.addEventListener("click", () => {
        document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active")
        console.log(btn);
    })
    notes.append(btn);
    // console.log(n);
    // console.log(btn);  
    n++
};
// Submit button
const submit = document.createElement("div");
submit.id = "submit";
container.append(submit);
const submitBtn = document.createElement("button");
submitBtn.textContent = "SUBMIT";
submitBtn.addEventListener("mouseover", () => {
    submitBtn.classList.add("hover")
    console.log(submitBtn);
})
submitBtn.addEventListener("mouseleave", () => {
    submitBtn.classList.remove("hover")
    console.log(submitBtn);
})
// Afficher la page Thank You
submitBtn.addEventListener("click", () => {
    container.style.alignItems = "center";
    container.style.textAlign = "center";
    star.id = "thankYou";
    img.src = "./assets/images/illustration-thank-you.svg";
    choice.textContent = `You selected ${document.querySelector(".active").textContent} out of 5`;
    choice.style.borderRadius = "1.5rem";
    choice.style.padding = "0.7rem 1rem .5rem 1rem";
    choice.style.color = "hsl(25, 97%, 53%)";
    choice.style.backgroundColor = "hsl(216, 18%, 22%)";
    choice.style.backgroundColor = "300";
    choice.style.marginTop = "2rem";
    titre.textContent = "Thank You!";
    info.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    notes.style.display = "none"
    submit.style.display = "none"
})
submit.append(submitBtn);