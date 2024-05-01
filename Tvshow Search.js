const form = document.querySelector('#searchForm');
const imagesContainer = document.getElementById('imagesContainer');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}};
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    form.elements.query.value = '';
    imagesContainer.innerHTML = '';
    makeImages(res.data)
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            imagesContainer.append(img);
        }
    }
}