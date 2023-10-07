document.addEventListener('DOMContentLoaded', () => {
    let hasFlippedCard = false;
    let firstCard, secondCard;
    let lockBoard = false;
    let attempts = 0; 
    let matchedPairs = 0; 
    let startTime; 

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
    
        this.classList.toggle('flipped');
    
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
        } else {
            hasFlippedCard = false;
            secondCard = this;
            checkForMatch();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }

    function checkForMatch() {
        attempts++;
        let isMatch = firstCard.querySelector('.card-front img').src === secondCard.querySelector('.card-front img').src;
        console.log(isMatch)
        isMatch ? disableCards() : flipCards();
        if (isMatch) {
            matchedPairs++;
            checkForWin();
        }
    }

    function checkForWin() {
        if (matchedPairs === 8) {
            const endTime = new Date();
            const duration = (endTime - startTime) / 1000;
            alert(`¡Has ganado! Tiempo: ${duration}s. Intentos: ${attempts}.`);
        }
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
    
            lockBoard = false;
        }, 1000);
    }

    function flipCards() {
        setTimeout(() => {
            firstCard.classList.add('flipped');
            secondCard.classList.add('flipped');
    
            lockBoard = false;
        }, 500);
    }    
    

    function renderBoard() {
        const board = document.getElementById('game-board');
        const images = ['memoryCard01.png', 'memoryCard02.png', 'memoryCard03.png', 'memoryCard04.png', 'memoryCard05.png', 'memoryCard06.png', 'memoryCard07.png', 'memoryCard08.png'];
        const cardsArray = [...images, ...images].sort(() => 0.5 - Math.random());

        cardsArray.forEach(image => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-back">
                    <img src="imgs/FlippedCard.png" alt="Flipped Card">
                </div>
                <div class="card-front">
                    <img src="imgs/${image}" alt="Memory Card">
                </div>
            `;
            board.appendChild(card);
            card.addEventListener('click', flipCard);
        });
    }

    function hideCardsAfterDelay() {
        setTimeout(() => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.classList.add('flipped');
            });
            startTimer();
        }, 1000);
    }

    function startTimer() {
        attempts = 0;
        matchedPairs = 0;
        startTime = new Date();
    }

    function resetGame() {
        const board = document.getElementById('game-board');
        board.innerHTML = '';
        renderBoard(); 
        hideCardsAfterDelay(); 
    }

    renderBoard(); 
    hideCardsAfterDelay(); 

    document.getElementById('reset-button').addEventListener('click', resetGame);
});
