const greet = document.querySelector('.greet');
const name = document.querySelector('.name');
const intText = document.querySelector('.interest-text');

const arr = ["Web Development", "Web Designing", "Open Source"];

document.addEventListener("DOMContentLoaded",()=>{
    greet.classList.add("text-visible");
    name.classList.add("text-visible");
    intText.classList.add("text-visible");

});
window.setInterval(() => {
    intText.innerHTML = `<p>I'm into <span class="accent-blue">${arr[Math.floor(Math.random() * arr.length)]}</span></p>`;
}, 1000);
