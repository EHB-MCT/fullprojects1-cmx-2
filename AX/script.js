function openForm() {
  document.getElementById("formOverlay").style.display = "flex";
}

function closeForm() {
  document.getElementById("formOverlay").style.display = "none";
}

const images = [
  "images (temp)/image1.png",
  "images (temp)/image2.png",
  "images (temp)/image3.png",
  "images (temp)/image4.png",
  "images (temp)/image5.png",
  "images (temp)/image6.png",
  "images (temp)/image1.png",
  "images (temp)/image2.png",
  "images (temp)/image3.png",
];

let currentPage = 1;
const imagesPerPage = 3;

function renderImages() {
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const imagesToDisplay = images.slice(startIndex, endIndex);

  const container = document.getElementById("image-container");
  container.innerHTML = "";

  imagesToDisplay.forEach((imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    container.appendChild(img);
  });

  const totalPages = Math.ceil(images.length / imagesPerPage);
  document.getElementById(
    "page-number"
  ).textContent = `Pagina ${currentPage} van ${totalPages}`;

  updatePaginationButtons(totalPages);
}

function changePage(direction) {
  currentPage += direction;
  renderImages();
}

function updatePaginationButtons(totalPages) {
  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled = currentPage === totalPages;
}

renderImages();
