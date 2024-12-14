document.getElementById('filter').addEventListener('submit', function (e) {
    e.preventDefault();
    const genre = document.getElementById('genre').value.toLowerCase();
    const year = document.getElementById('year').value;

    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        const cardGenres = card.getAttribute('data-genres').toLowerCase().split(',');
        const cardYear = card.querySelector('p:nth-child(2)').textContent.split(': ')[1];

        const genreMatch = (genre === 'all' || cardGenres.includes(genre));
        const yearMatch = (year === '' || cardYear === year);

        if (genreMatch && yearMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


const movieCards = document.querySelectorAll('.movie-card');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close');

movieCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector('.movie-image').src;
        const description = card.querySelector('.description').innerHTML;
        modalImage.src = image;
        modalDescription.innerHTML = description;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                form.classList.add('was-validated');
                

                const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
                errorToast.show();
                
            } else {
                event.preventDefault(); 
                

                const successToast = new bootstrap.Toast(document.getElementById('successToast'));
                successToast.show();
                
                form.reset(); 
                form.classList.remove('was-validated')
            }
        }, false)
    })
})()