// const card = document.querySelector('card');

const arrayCards = [
    {
        phProfile : 'https://picsum.photos/60',
        name : 'Ciccio Pasticcio',
        date : '25/07/2022',
        picture : 'https://picsum.photos/900/300',
        like : 90, 
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    }
];

for (let i = 0; i < arrayCards.length; i++) {
    let generateCard = `
        <section class="container-top">
            <div class="img-account">
                <img src="${arrayCards[i].phProfile}" alt="">
            </div>

            <div class="info-account">
                <h2 class="name-account">
                    ${arrayCards[i].name}
                </h2>

                <h5 class="date-ph">
                    ${arrayCards[i].date}
                </h5>
            </div>
        </section>

        <section class="container-center">
            <div class="ph">
                <img src="${arrayCards[i].picture}" alt="">
            </div>

            <div class="statistics">
                <button class="i-like">&#10084;</button>
                <h4 class="n-like">Piace a <strong>${arrayCards[i].like}</strong> persone</h4>
                <input type="text" class="write-comment" placeholder="scrivi un commento">
                <button class="send-comment">&#9997;</button>
            </div>
        </section>

        <section class="container-bottom">
            <p class="comment">${arrayCards[i].comment}</p>
        </section>

    `
    document.querySelector('card').innerHTML = generateCard;
}