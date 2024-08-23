document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Document chargé");
});

const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");
changeColorBtn.addEventListener("click", getRandomColor);

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgba(${red}, ${green}, ${blue})`;
    colorBox.style.backgroundColor = `${color}`;
};