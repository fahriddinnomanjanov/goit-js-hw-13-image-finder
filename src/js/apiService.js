export default class Gallery {
    constructor() {
        this.search = '';
        this.page = 1;
        this.BASE_URL = "https://pixabay.com/api"
        this.API_KEY = "20962897-331ac5a967e647c87b669ac14"
        this.PHOTO_PARAMS = "image_type=photo&orientation=horizontal"
    }
    
    request() {
        const GalleryRequest = fetch(`${this.BASE_URL}/?${this.PHOTO_PARAMS}&q=${this.search}&page=${this.page}&per_page=12&key=${this.API_KEY}`)

        return GalleryRequest
            .then(response => response.json()
            ).then(result => {
                return result.hits;
            }).catch(error => {
            console.log(error);
            })
        
    }

    get query() {
        return this.search
    }

    set query(newQuery) {
        return this.search = newQuery;
        console.log(newQuery);
    }

    changePage() {
        this.page +=1;
    }

    reset() {
        this.page = 1;
    }
}































/**
 * 1 найти дом элемент форму
 * 2 Повесить на нее обработчик событие 
 * 3 Найти внутри формы инпут с name=query
 * 4 Считоть его значение в переменную
 * 5 Создать строку запроса
 * 6 Отправить AJAX запрос методом GET по созданному адресу
 * 7 Закинуть свойство hits тела ответа в шаблон Hendlevars
 * 8 найти div с id="search-result"
 * 9 Ввести в него полученную разметку 
 */

// const submitInput = document.getElementById("submit-input")

// searchForm.addEventListener("submit", function (e) {
//     const search = this.querySelector("[name=query]").value;
//     console.log(search);
//     const searchParams = {
//         search,
//         page: 1,
//         perPage: 12,
//     };
//     const searchURL = getPixalayPhotoURL
// })

// // async function searchGalleryAnimals(e) {
// //     e.preventDefault()

// //     con
// // }


// function getPixalayPhotoURL({ search, page, perPage }) {
//     return url
// }