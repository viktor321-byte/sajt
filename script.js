document.getElementById("kontakt-forma").addEventListener("submit", function(event) {
    event.preventDefault(); // Sprečava slanje forme
    document.getElementById("poruka-status").textContent = "Poruka je poslata!";
});
