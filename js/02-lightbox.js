import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);
  gallery.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});
