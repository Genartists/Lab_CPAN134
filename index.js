// open modal by data key
function openModal(key) {
    document.getElementById("media-model").classList.add('open');
    document.querySelector('.jw-modal iframe').src=`https://www.youtube.com/embed/${key}`
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // on-click to call openModal function
    const cards =   document.getElementsByClassName("event-click")
    for (let card of cards) {
        const key = card.dataset.key;
        card.addEventListener("click", (event) => {
        openModal(key);
        })
    }
    // on click call the closing function
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });

});

