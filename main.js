// Get button element
const button = document.getElementById("uploader__button");
const fileInput = document.getElementById("uploader__input");
const dropArea = document.getElementById("uploader__drop-area");
const dropAreaContainer = document.getElementById(
  "uploader__drop-area-container"
);

// Add event listener
button.addEventListener("click", () => {
  fileInput.click();
});
// This prevents the default behaviour of the browser opening the file
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("dragenter", (e) => {
  dropAreaContainer.classList.add("uploader__drop-area-container--active");
  e.preventDefault();
});
document.addEventListener("dragleave", (e) => {
  dropAreaContainer.classList.remove("uploader__drop-area-container--active");
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  console.log(fileInput.files);
});
