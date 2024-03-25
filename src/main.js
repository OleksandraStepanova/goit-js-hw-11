import { getPicture } from './js/pixabay-api'
import {photosTemplate} from './js/render-functions'


const formRef = document.querySelector(".search");
const resultRef = document.querySelector(".result")

formRef.addEventListener('submit', createSearch);

function createSearch(e) {
    e.preventDefault();

    const inputValue = formRef.elements.input.value.trim();
    
    const photos = getPicture(inputValue).then((data => {
        const markup = photosTemplate(data);
        return resultRef.innerHTML= markup;
    }
    ));
    
}