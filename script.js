const grayOut = document.querySelector('.gray-out-screen.hidden');

var addedPopup = null;
var addedGray = null;

function closePopup() {
    if (addedPopup != null) {
        document.body.removeChild(addedPopup);
    }
    if (addedGray != null) {
        document.body.removeChild(addedGray);
    }
}

function addPopup(popupSelector) {

    const popup = document.querySelector(popupSelector).cloneNode(true);
    popup.classList.remove('hidden');
    document.body.prepend(popup);
    addedPopup = popup;

    const gray = grayOut.cloneNode(true);
    gray.classList.remove('hidden');
    document.body.prepend(gray);
    addedGray = gray;

    gray.addEventListener('click', () => {
        document.body.removeChild(popup);
        document.body.removeChild(gray);
    });

}