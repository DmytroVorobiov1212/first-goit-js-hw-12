import apiKey from "./apiKey";
const { KEY, BASE_URL } = apiKey;
import refs from "./refs";
const { loader } = refs;
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const perPage = 15;

export async function getSearch(searchText, currentPage) {
    try {
        if (searchText.includes(' ')) {
            searchText.replace(/\s+/g, '+');
        }
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                key: KEY,
                q: searchText,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: currentPage,
                per_page: perPage,
            }
        })
        return response;
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry! The site is currently unavailable. Please try later!',
        });
        console.error(error.message);
    }
}
