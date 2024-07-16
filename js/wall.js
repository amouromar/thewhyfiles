function previewFile() {
  const preview = document.getElementById("image-preview");
  const file = document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    const img = document.createElement("img");
    img.src = reader.result;
    img.className = "w-full h-auto"; // Adjust styling as needed
    preview.innerHTML = ""; // Clear previous preview
    preview.appendChild(img);
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "";
  }
}
