const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores];

const scoreList = document.getElementById("scoreList");
const count = document.getElementById("kpi-count");
const average = document.getElementById("kpi-avg");

function renderScores() {
    scoreList.innerHTML = "";
    currentScores.forEach((score) => {
        const item = document.createElement("p");
        item.textContent = score;
        scoreList.appendChild(item);
    });
}

function addBonus(){
    currentScores = currentScores.map((score) => score + 5);
    renderScores();
}

function filterByThreshold(){
    currentScores = currentScores.filter((score) => score >= 60);
    
    renderScores();
}

function showAverage(){
    const total = currentScores.reduce((accumulator, element) => accumulator + element, 0);
    const average = total / currentScores.length;
}