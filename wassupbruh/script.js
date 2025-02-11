document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "yes.html"; // Redirect to a surprise page
});

document.getElementById("no").addEventListener("mouseover", function() {
    let noButton = document.getElementById("no");
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * window.innerHeight + "px";
    noButton.style.left = Math.random() * window.innerWidth + "px";
});
