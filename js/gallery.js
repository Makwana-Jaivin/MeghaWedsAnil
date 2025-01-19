// Get references to the button and the date text
const revealBtn = document.getElementById("revealBtn");
const dateText = document.getElementById("dateText");

// Event listener for the button click
revealBtn.addEventListener("click", () => {
    // Change the text to reveal the wedding date
    dateText.textContent = "Our wedding will be on June 25, 2025! We can't wait to celebrate with you!";
    // Optionally, disable the button after it's clicked
    revealBtn.disabled = true;
    revealBtn.textContent = "Date Revealed!";
});
