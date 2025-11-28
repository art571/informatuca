let totalCards = 4;

// випадкова картка
let a = Math.floor(Math.random() * totalCards) + 1;

// показати картку по id
document.getElementById("card" + a).style.display = "flex";
