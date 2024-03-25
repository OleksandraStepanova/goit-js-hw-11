import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function getPicture(query) {
  const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key: '43034088-8742da6bcfba06a1e287112c2',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
  });
    
    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(res => res.json()).then((data) => {
        if (data.totalHits > 0) {
            return data.hits;
        }
        else {
        iziToast.show({
            message: "Sorry, there are no images matching your search query. Please try again!",
            timeout: 5000,
            position: "topRight",
            color: 'red'
        })
    }
    });
}
