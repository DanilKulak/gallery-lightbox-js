import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const modal = basicLightbox.create("");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);
  gallery.appendChild(galleryItem);

  image.addEventListener("click", (event) => {
    event.preventDefault();
    const source = event.target.dataset.source;
    const description = event.target.alt;

    modal.element().innerHTML = `
      <img src="${source}" alt="${description}">
    `;

    modal.show();

    const closeLightbox = () => {
      modal.close();
      window.removeEventListener("keydown", onKeyPress);
    };

    const onKeyPress = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    modal.element().addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        closeLightbox();
      }
    });

    window.addEventListener("keydown", onKeyPress);
  });
});
