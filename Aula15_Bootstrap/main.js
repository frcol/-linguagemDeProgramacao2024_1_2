const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const appendAlert = (message, type) => {

  alertPlaceholder.innerHTML = 
    `<div class="alert alert-${type} alert-dismissible" role="alert">
       <div>${message}</div>
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

// ===============================================================
const cards = [
    { title: 'Card 1', text: 'texto do card 1' },
    { title: 'Card 22', text: 'meu NOme vai aqui' },
    { title: 'Card 333', text: 'Some quick example text to build on the card title and make up the bulk of the card content.' },
];

const cardContainer = document.querySelector('#cardContainer');

cards.forEach(card => {
    const newCard = document.createElement('div');

    newCard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/600/400?random=1" alt="">
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;

    cardContainer.appendChild(newCard);
});