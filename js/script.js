/* *********global variables********* */
const cards = document.getElementById('users-publications');
const arrayCards = [
    {
        phProfile : 'https://picsum.photos/60',
        name : 'Ciccio',
        date : '25/07/2022',
        picture : 'https://picsum.photos/900/300',
        like : 90, 
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
    {
        phProfile: 'https://picsum.photos/60',
        name: 'Pasticcio',
        date: '25/07/2022',
        picture: 'https://picsum.photos/900/300',
        like: 90,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
    {
        phProfile: 'https://picsum.photos/60',
        name: 'Magna',
        date: '25/07/2022',
        picture: 'https://picsum.photos/900/300',
        like: 90,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
    {
        phProfile: 'https://picsum.photos/60',
        name: 'L\'arriccio',
        date: '25/07/2022',
        picture: 'https://picsum.photos/900/300',
        like: 90,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
    {
        phProfile: 'https://picsum.photos/60',
        name: 'Capriccio',
        date: '25/07/2022',
        picture: 'https://picsum.photos/900/300',
        like: 90,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
    {
        phProfile: 'https://picsum.photos/60',
        name: 'Laccio',
        date: '25/07/2022',
        picture: 'https://picsum.photos/900/300',
        like: 90,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
    {
        phProfile: 'https://picsum.photos/60',
        name: 'Taccio',
        date: '25/07/2022',
        picture: 'https://picsum.photos/900/300',
        like: 90,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae praesentium omnis non obcaecati incidunt sapiente commodi. Iure excepturi vitae, in quas cum officia sit sint, itaque necessitatibus enim fuga.'
    },
];

/* *********code********* */
generateCard(arrayCards);
addLike();

/* *********functions********* */
function generateCard(array) {
    for (let i = 0; i < array.length; i++) {
        let generateCard = `
        <section class="card">
            <section class="container-top">
                <div class="img-account">
                    <img src="${array[i].phProfile}" alt="">
                </div>

                <div class="info-account">
                    <h2 class="name-account">
                        ${array[i].name}
                    </h2>

                    <h5 class="date-ph">
                        ${array[i].date}
                    </h5>
                </div>
            </section>

            <section class="container-center">
                <div class="ph">
                    <img src="${array[i].picture}" alt="">
                </div>

                <div class="statistics">
                    <button class="i-like">&#10084;</button>
                    <h4>Piace a <span class="box-n-like"><strong class="n-like">${array[i].like}</strong></span> persone</h4>
                    <input type="text" class="write-comment" placeholder="scrivi un commento">
                    <button class="send-comment">&#9997;</button>
                </div>
            </section>

            <section class="container-bottom">
                <p class="comment">${array[i].comment}</p>
            </section>
        </section>
    `
        cards.innerHTML += generateCard;
    }
}

function addLike () {
    const heart = document.getElementsByClassName('i-like');
    const nLike = document.getElementsByClassName('n-like');
    const boxNLike = document.getElementsByClassName('box-n-like');

    for (let i = 0; i < arrayCards.length; i++) {
        heart[i].addEventListener('click', function () {
            nLike[i].remove();
            heart[i].classList.add('red')
            arrayCards[i].like += 1;
            console.log(arrayCards[i]);
            const newNLike = document.createElement('strong');
            newNLike.classList.add('n-like');
            boxNLike[i].appendChild(newNLike);
            newNLike.innerHTML = (arrayCards[i].like);
        });
    }
}
