document.getElementById("newCardBtn").addEventListener("click", drawCard);

function drawCard(){
    const deckUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetch(deckUri)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // Plocka ut URL:en till bilden på kortet
        const cardImageUrl = data.cards[0].image;

        // Skapa ett image-element
        const cardImage = document.createElement("img");

        // Sätt src-attributet till URL:en för kortets bild
        cardImage.setAttribute("src", cardImageUrl);

        // Hämta elementet där bilden ska visas
        const cardContainer = document.getElementById("displayCard");

        // Nollställ innehållet i cardContainer
        cardContainer.innerHTML = "";

        // Lägg till image-elementet till cardContainer
        cardContainer.appendChild(cardImage);
    })
    .catch(err => console.log(err));
}
