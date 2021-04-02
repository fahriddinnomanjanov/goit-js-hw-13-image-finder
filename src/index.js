import './styles.css';
import imageFinderHBS from "./templates/image-finder.hbs"
import Gallery from './js/apiService.js'

const loadMore = document.getElementById('load-more')
loadMore.addEventListener("click", clickLoadMore)

function clickLoadMore(e) {
    gallery.changePage()
    gallery.request().then(result => {
        const lastEl = document.querySelector("#gallery .gallery-photo-item:last-child")

        renderCards(result)
        if (lastEl) {
            window.scrollTo({
                top: lastEl.offsetTop + lastEl.clientHeight,
                behavior: 'smooth'
            })
        }
    } )

}





const gelleryCards = document.getElementById("gallery")
const gallery = new Gallery()
const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", searchGelleryAnimal)
function searchGelleryAnimal(e) {
    e.preventDefault()
    gelleryCards.innerHTML = "";
    const search = this.querySelector("[name=query]");
    gallery.query = e.currentTarget.elements.query.value;
    gallery.reset()
    gallery.request().then(renderCards)
    
}




function renderCards(photos) {
    const cards = imageFinderHBS(photos)
    gelleryCards.insertAdjacentHTML("beforeend", cards)
}