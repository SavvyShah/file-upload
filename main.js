// Get button element
const button = document.getElementById("uploader__button");
const fileInput = document.getElementById("uploader__input");

// Add event listener
button.addEventListener("click", () => {
  fileInput.click();
});
