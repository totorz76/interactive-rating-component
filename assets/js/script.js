const container = document.getElementById("container");
const star = document.createElement ("div");
star.id = "star";
container.append(star);
const img = document.createElement("img");
img.src = "./assets/images/icon-star.svg";
star.append(img);
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
const numbers = [1,2,3,4,5];
let n = 0
// numbers.forEach(value => {
//     const btn = document.createElement("button");
//     btn.textContent = [numbers[n]];
//     notes.append(btn);
//     n++
// });
while (n < numbers.length){
    const btn = document.createElement("button")
    btn.textContent = [numbers[n]]
    notes.append(btn);
    // console.log(n);
    // console.log(btn);  
    n++
};
const submit = document.createElement("div");
submit.id ="submit";
container.append(submit)
const submitBtn = document.createElement("button");
submitBtn.textContent = "SUBMIT"
submit.append(submitBtn)
