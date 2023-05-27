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
initialize(toggleLike);
initialize(addComment);




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
                    <input type="text" value = "" class="write-comment" placeholder="scrivi un commento">
                    <button class="send-comment">&#9997;</button>
                </div>
            </section>

            <section class="container-bottom">
                <h3>DESCRIZIONE</h3>
                <p class="description">${array[i].comment}</p>
                <h3>COMMENTI</h3>
            </section>
        </section>
    `
        cards.innerHTML += generateCard;
    }
}

function toggleLike(index) {
    const heart = document.getElementsByClassName('i-like')[index];
    const nLike = document.getElementsByClassName('n-like')[index];
    const boxNLike = document.getElementsByClassName('box-n-like')[index];
    const newNLike = document.createElement('strong');

    heart.addEventListener('click', function () {
        if (heart.classList.contains('red')) {
            newNLike.remove();
            heart.classList.remove('red');
            arrayCards[index].like --;
            newNLike.classList.add('n-like');
            boxNLike.appendChild(newNLike);
            newNLike.innerHTML = arrayCards[index].like;
        } else {
            nLike.remove();
            heart.classList.add('red');
            arrayCards[index].like ++;
            newNLike.classList.add('n-like');
            boxNLike.appendChild(newNLike);
            newNLike.innerHTML = arrayCards[index].like;
        }
    });
}

function initialize(initFunc) {
    for (let i = 0; i < arrayCards.length; i++) {

        initFunc(i);
    }
}

function addComment(index) {
    const writeComment = document.getElementsByClassName('write-comment')[index];
    const sendComment = document.getElementsByClassName('send-comment')[index];
    const viewComment = document.getElementsByClassName('container-bottom')[index];
    const comment = document.createElement('p');

    sendComment.addEventListener('click', function () {
        comment.classList.add('comment');
        viewComment.appendChild(comment);
        comment.innerHTML = writeComment.value;
        console.log(comment);
        clear(writeComment);
    })

    
}

function clear(input) {
    input.value = '';
    input.textContent = '';
}