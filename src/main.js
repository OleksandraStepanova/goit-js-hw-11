import { getPicture } from './js/pixabay-api'
import { photosTemplate } from './js/render-functions'
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const formRef = document.querySelector(".search");
const resultRef = document.querySelector(".result");
const loader = document.querySelector('.loader');

loader.style.display = "none";

formRef.addEventListener('submit', createSearch);

function createSearch(e) {
    e.preventDefault();
    
    resultRef.innerHTML = "";

    const inputValue = formRef.elements.input.value.trim();

    if (inputValue) {
        const photos = getPicture(inputValue).then((data => {
            const markup = photosTemplate(data);
            resultRef.innerHTML = markup;
            const gallery = new SimpleLightbox('.result li a', {});
            gallery.refresh();
    }
    ));
    }
    
    formRef.reset();
    
}