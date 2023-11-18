// Get button element
const uploader = document.getElementById("uploader");
const button = document.getElementById("uploader__button");
const fileInput = document.getElementById("uploader__input");
const dropArea = document.getElementById("uploader__drop-area");

// Add event listener
button.addEventListener("click", () => {
  fileInput.click();
});
fileInput.addEventListener("change", (e) => {
  console.log(e.target.files);
  Object.values(e.target.files).forEach((file) => {
    addFileToView(file);
  });
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
  }
});
document.addEventListener("dragleave", (e) => {
  e.preventDefault();
  const destinationElement = e.relatedTarget;
  // We don't know where the drag object is going, so it would be outside the window
  if (!destinationElement) {
    dropArea.classList.remove("uploader__drop-area--active");
  }
});

dropArea.addEventListener("drop", (e) => {
  // This prevents the default behaviour of the browser opening the file
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  console.log(e.dataTransfer.files);
  Object.values(e.dataTransfer.files).forEach((file) => {
    addFileToView(file);
  });
  dropArea.classList.remove("uploader__drop-area--active");
});

function removePreviousFiles() {
  // Remove previously added files
  const fileItems = document.querySelectorAll(".uploader__file-item");
  fileItems.forEach((item) => {
    item.remove();
  });
}

function addFileToView(file) {
  removePreviousFiles();

  const fileItem = document.createElement("div");
  fileItem.classList.add("uploader__file-item");
  const fileName = document.createElement("div");
  fileName.classList.add("uploader__file-name");
  fileName.innerText = file.name;
  const fileIcon = document.createElement("div");
  fileIcon.classList.add("uploader__file-icon");
  fileIcon.textContent = "📄";

  fileItem.appendChild(fileIcon);
  fileItem.appendChild(fileName);
  uploader.appendChild(fileItem);
}
