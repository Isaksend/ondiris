document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.popup_close');
    const body = document.body;
    function openPopup() {
        popup.classList.add('open');
        body.style.overflow = 'hidden';
    }
    function closePopup() {
        popup.classList.remove('open');
        body.style.overflow = ''; 
    }
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        closePopup();
    });

    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
    const openPopupButton = document.querySelector('#open_popup_btn');
    if (openPopupButton) {
        openPopupButton.addEventListener('click', openPopup);
    }
});