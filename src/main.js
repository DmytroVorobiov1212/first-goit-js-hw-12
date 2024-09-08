import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getSearch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import refs from "./js/refs";
const { form, gallery, loader, loadMore } = refs;
import { scrollingTopPage } from "./js/scrollTop";

let saveQuery = '';
let currentPage = 1;
const perPage = 15;
let refreshPage;

loader.style.display = 'none';
loadMore.classList.add('hidden');

form.addEventListener('submit', onSearch);
loadMore.addEventListener('click', loadBtn);

scrollingTopPage();

function onSearch(evt) {
    evt.preventDefault()

    currentPage = 1;
    gallery.innerHTML = '';
    loader.style.display = 'block';
    saveQuery = evt.target.elements.query.value.trim();


    if (saveQuery === '') {
        return iziToast.info({
            title: 'Hello',
            message: 'Please enter search text!',
        }),
            loader.style.display = 'none',
            loadMore.classList.add('hidden'),
            form.reset()
    }


    getSearch(saveQuery, currentPage)
        .then(resp => {


            gallery.insertAdjacentHTML("beforeend", createMarkup(resp.data.hits));
            loadMore.classList.remove('hidden');
            
            if (currentPage * perPage >= resp.data.totalHits) {
                loadMore.classList.add('hidden');
            }

            if (currentPage === resp.data.hits) {
                loadMore.classList.add('hidden');
            }
            if (!resp.data.hits.length) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                }),
                    loader.style.display = 'none',
                    loadMore.classList.add('hidden');
                return;
            }

            loader.style.display = 'none';

            refreshPage = new SimpleLightbox('.gallery a', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
            });
            refreshPage.refresh();
        })
        .catch(err => {
            loader.style.display = 'none';
            console.log(`${err}`)
        });
    form.reset();
}


function loadBtn() {
    currentPage += 1;
    const getHeightImgCard = () => document.querySelector('.gallery-item').getBoundingClientRect();

    getSearch(saveQuery, currentPage).then(resp => {
        gallery.insertAdjacentHTML("beforeend", createMarkup(resp.data.hits));
        window.scrollBy({
            top: getHeightImgCard().height * 2,
            left: 0,
            behavior: "smooth",
        });
        refreshPage.refresh();

        if (currentPage * perPage >= resp.data.totalHits) {
            iziToast.info({
                title: 'Caution',
                message: `We're sorry, but you've reached the end of search results.`,
            }),
                loadMore.classList.add('hidden');
        }
    })

}