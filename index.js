document
    .getElementById("darkModeToggle")
    .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
function readStory(title) {
    if (title == "Love or Confusion") {
    window.location.href = "love.html";
} else if (title == "An Unwritten love") {
    window.location.href = "unwritten.html";
} else {
    alert("Story not found");
}
}
document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").style.display = "block";
    this.reset();
});
function openModal() {
    document.getElementById("storyModal").style.display = "block";
}

function closeModal() {
    document.getElementById("storyModal").style.display = "none";
}

document.getElementById("storyForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Story submitted successfully!");
    closeModal();
    this.reset();
});
