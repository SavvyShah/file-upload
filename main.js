// Get button element
const button = document.getElementById("uploader__button");
const fileInput = document.getElementById("uploader__input");
const dropArea = document.getElementById("uploader__drop-area");
const overlay = document.getElementById("uploader__overlay");

// Add event listener
button.addEventListener("click", () => {
  fileInput.click();
});
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});
document.addEventListener("dragenter", (e) => {
  e.preventDefault();
  const sourceElement = e.relatedTarget;
  // We don't where the drag object came from, so it would be from outside the window
  if (!sourceElement) {
    dropArea.classList.add("uploader__drop-area--active");
    overlay.classList.add("uploader__overlay--active");
  }
});
overlay.addEventListener("dragleave", (e) => {
  e.preventDefault();
  const destinationElement = e.fromElement || e.relatedTarget;
  // We don't know where the drag object is going, so it would be outside the window
  if (!destinationElement) {
    dropArea.classList.remove("uploader__drop-area--active");
    overlay.classList.remove("uploader__overlay--active");
  }
});

dropArea.addEventListener("drop", (e) => {
  // This prevents the default behaviour of the browser opening the file
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  console.log(fileInput.files);

  // Drop is complete so restore the styles
  dropArea.classList.remove("uploader__drop-area--active");
  overlay.classList.remove("uploader__overlay--active");
});
