
const game = document.getElementById("game");
const button_success_unactive = document.getElementById("unactive");
const button_success_active = document.getElementById("active");
const submit_bet = document.querySelector(".submit_bet");
const card_dealer_1 = document.getElementById("card_dealer_1");
const card_dealer_2 = document.getElementById("card_dealer_2");
const card_dealer_3 = document.getElementById("card_dealer_3");
const card_dealer_4 = document.getElementById("card_dealer_4");
const card_dealer_5 = document.getElementById("card_dealer_5");
const close_card_dealer_2 = document.getElementById("close_card_2");
const close_card_dealer_3 = document.getElementById("close_card_3");
const close_card_dealer_4 = document.getElementById("close_card_4");
const close_card_dealer_5 = document.getElementById("close_card_5");
const card_user_1 = document.getElementById("card_user_1");
const card_user_2 = document.getElementById("card_user_2");
const card_user_3 = document.getElementById("card_user_3");
const card_user_4 = document.getElementById("card_user_4");
const card_user_5 = document.getElementById("card_user_5");
const sum_hand_dealer = document.getElementById("sum_hand_dealer");
const sum_hand_user = document.getElementById("sum_hand_user");
const result_text = document.getElementById("result_text");
const result_box = document.querySelector(".result_box");
const bank = document.getElementById('money_amount');
const button_hit = document.getElementById('button_hit');
const button_stand = document.getElementById('button_stand');
const sum_bet = document.getElementById('sum_bet');
const global_score_user = document.getElementById('global_score_user');
const global_score_dealer = document.getElementById('global_score_dealer');
const score_table = document.getElementById('score_table');
const score_container = document.getElementById('score_container');
const button_score = document.getElementById('button_score');
const button_shop_1 = document.getElementById('shop_item_1');
const button_shop_2 = document.getElementById('shop_item_2');
const button_shop_3 = document.getElementById('shop_item_3');

let globalScoreDealer = 0;
let globalScoreUser = 0;
let scoreDealer = 0;
let scoreUser = 0;
let scoreDealerOpen = 0;
let countCardsDealer = 3;
let countCardsUser = 3;
let shirtCard = 1;
let amountBank = 1000;
let startFlag = 0;
bank.textContent = `${amountBank}$`;
sum_hand_dealer.textContent = scoreDealer;
sum_hand_user.textContent = scoreUser;
global_score_dealer.textContent = globalScoreDealer;
global_score_user.textContent = globalScoreUser;

const closeCard = {img: './image/cards/cardshirt.png'};

let cardsAll = [
        {img: './image/cards/2(1).png', points: 2},
        {img: './image/cards/2(2).png', points: 2},
        {img: './image/cards/2(3).png', points: 2},
        {img: './image/cards/2(4).png', points: 2},
        {img: './image/cards/3(1).png', points: 3},
        {img: './image/cards/3(2).png', points: 3},
        {img: './image/cards/3(3).png', points: 3},
        {img: './image/cards/3(4).png', points: 3},
        {img: './image/cards/4(1).png', points: 4},
        {img: './image/cards/4(2).png', points: 4},
        {img: './image/cards/4(3).png', points: 4},
        {img: './image/cards/4(4).png', points: 4},
        {img: './image/cards/5(1).png', points: 5},
        {img: './image/cards/5(2).png', points: 5},
        {img: './image/cards/5(3).png', points: 5},
        {img: './image/cards/5(4).png', points: 5},
        {img: './image/cards/6(1).png', points: 6},
        {img: './image/cards/6(2).png', points: 6},
        {img: './image/cards/6(3).png', points: 6},
        {img: './image/cards/6(4).png', points: 6},
        {img: './image/cards/7(1).png', points: 7},
        {img: './image/cards/7(2).png', points: 7},
        {img: './image/cards/7(3).png', points: 7},
        {img: './image/cards/7(4).png', points: 7},
        {img: './image/cards/8(1).png', points: 8},
        {img: './image/cards/8(2).png', points: 8},
        {img: './image/cards/8(3).png', points: 8},
        {img: './image/cards/8(4).png', points: 8},
        {img: './image/cards/9(1).png', points: 9},
        {img: './image/cards/9(2).png', points: 9},
        {img: './image/cards/9(3).png', points: 9},
        {img: './image/cards/9(4).png', points: 9},
        {img: './image/cards/10(1).png', points: 10},
        {img: './image/cards/10(2).png', points: 10},
        {img: './image/cards/10(3).png', points: 10},
        {img: './image/cards/10(4).png', points: 10},
        {img: './image/cards/Ace(1).png', points: 1},
        {img: './image/cards/Ace(2).png', points: 1},
        {img: './image/cards/Ace(3).png', points: 1},
        {img: './image/cards/Ace(4).png', points: 1},
        {img: './image/cards/Jack(1).png', points: 2},
        {img: './image/cards/Jack(2).png', points: 2},
        {img: './image/cards/Jack(3).png', points: 2},
        {img: './image/cards/Jack(4).png', points: 2},
        {img: './image/cards/Queen(1).png', points: 3},
        {img: './image/cards/Queen(2).png', points: 3},
        {img: './image/cards/Queen(3).png', points: 3},
        {img: './image/cards/Queen(4).png', points: 3},
        {img: './image/cards/King(1).png', points: 4},
        {img: './image/cards/King(2).png', points: 4},
        {img: './image/cards/King(3).png', points: 4},
        {img: './image/cards/King(4).png', points: 4}
    ]

let newCardsAll = [...cardsAll];

button_success_active.addEventListener('click', function()
{
    const amountBet = Number(sum_bet.value);
    amountBank = parseInt(bank.textContent.replace(/[^0-9]/g, ''), 10);
    if (amountBet <= amountBank && amountBet !== "")
    {
        amountBank -= amountBet;
        bank.textContent = `${amountBank}$`;
        startGame(amountBank, amountBet);
    }
    else
    {
        alert("Ставка должна не превышать ваш банк");
    }
});

function startGame(amountBank, amountBet)
{
    startFlag = 1;
    if (shirtCard === 2)
    {
    cardsAll = [
        {img: './image/cards2/2(1).png', points: 2},
        {img: './image/cards2/2(2).png', points: 2},
        {img: './image/cards2/2(3).png', points: 2},
        {img: './image/cards2/2(4).png', points: 2},
        {img: './image/cards2/3(1).png', points: 3},
        {img: './image/cards2/3(2).png', points: 3},
        {img: './image/cards2/3(3).png', points: 3},
        {img: './image/cards2/3(4).png', points: 3},
        {img: './image/cards2/4(1).png', points: 4},
        {img: './image/cards2/4(2).png', points: 4},
        {img: './image/cards2/4(3).png', points: 4},
        {img: './image/cards2/4(4).png', points: 4},
        {img: './image/cards2/5(1).png', points: 5},
        {img: './image/cards2/5(2).png', points: 5},
        {img: './image/cards2/5(3).png', points: 5},
        {img: './image/cards2/5(4).png', points: 5},
        {img: './image/cards2/6(1).png', points: 6},
        {img: './image/cards2/6(2).png', points: 6},
        {img: './image/cards2/6(3).png', points: 6},
        {img: './image/cards2/6(4).png', points: 6},
        {img: './image/cards2/7(1).png', points: 7},
        {img: './image/cards2/7(2).png', points: 7},
        {img: './image/cards2/7(3).png', points: 7},
        {img: './image/cards2/7(4).png', points: 7},
        {img: './image/cards2/8(1).png', points: 8},
        {img: './image/cards2/8(2).png', points: 8},
        {img: './image/cards2/8(3).png', points: 8},
        {img: './image/cards2/8(4).png', points: 8},
        {img: './image/cards2/9(1).png', points: 9},
        {img: './image/cards2/9(2).png', points: 9},
        {img: './image/cards2/9(3).png', points: 9},
        {img: './image/cards2/9(4).png', points: 9},
        {img: './image/cards2/10(1).png', points: 10},
        {img: './image/cards2/10(2).png', points: 10},
        {img: './image/cards2/10(3).png', points: 10},
        {img: './image/cards2/10(4).png', points: 10},
        {img: './image/cards2/Ace(1).png', points: 11},
        {img: './image/cards2/Ace(2).png', points: 11},
        {img: './image/cards2/Ace(3).png', points: 11},
        {img: './image/cards2/Ace(4).png', points: 11},
        {img: './image/cards2/Jack(1).png', points: 10},
        {img: './image/cards2/Jack(2).png', points: 10},
        {img: './image/cards2/Jack(3).png', points: 10},
        {img: './image/cards2/Jack(4).png', points: 10},
        {img: './image/cards2/Queen(1).png', points: 10},
        {img: './image/cards2/Queen(2).png', points: 10},
        {img: './image/cards2/Queen(3).png', points: 10},
        {img: './image/cards2/Queen(4).png', points: 10},
        {img: './image/cards2/King(1).png', points: 10},
        {img: './image/cards2/King(2).png', points: 10},
        {img: './image/cards2/King(3).png', points: 10},
        {img: './image/cards2/King(4).png', points: 10}
    ]
    }

    refreshAttribute();

    sum_hand_dealer.textContent = 0;
    sum_hand_user.textContent = 0;
    
    result_box.style.display = 'none';
    result_box.classList.remove("box_block");
    result_text.textContent = "";
    
    newCardsAll = [...cardsAll];
    scoreDealer = 0;
    scoreDealerOpen = 0;
    scoreUser = 0;
    setTimeout(() => {
        addStartCard(newCardsAll);
    }, 1000);
}

function addStartCard()
{
    // dealer
    let numberCard = getRandomNumber(0, newCardsAll.length - 1);
    let card = newCardsAll[numberCard];
    card_dealer_1.src = card.img;
    card_dealer_1.classList.add("on_board_dealer_1");
    card_dealer_1.style.zIndex = "2";
    scoreDealer += card.points;
    scoreDealerOpen = card.points;
    newCardsAll.splice(numberCard, 1);

    numberCard = getRandomNumber(0, newCardsAll.length - 1);
    card = newCardsAll[numberCard];
    card_dealer_2.src = card.img;
    card_dealer_2.classList.add("on_board_dealer_2");
    close_card_dealer_2.classList.add("on_board_dealer_2");
    close_card_dealer_2.style.zIndex = "2";
    scoreDealer += card.points;
    newCardsAll.splice(numberCard, 1);

    // user
    numberCard = getRandomNumber(0, newCardsAll.length - 1);
    card = newCardsAll[numberCard];
    card_user_1.src = card.img;
    card_user_1.classList.add("on_board_user_1");
    card_user_1.style.zIndex = "2";
    scoreUser += card.points;
    newCardsAll.splice(numberCard, 1);

    numberCard = getRandomNumber(0, newCardsAll.length - 1);
    card = newCardsAll[numberCard];
    card_user_2.src = card.img;
    card_user_2.classList.add("on_board_user_2");
    card_user_2.style.zIndex = "2";
    scoreUser += card.points;
    newCardsAll.splice(numberCard, 1);

    if (sum_hand_user === 22) 
    {
        sum_hand_user = 12;
    }

    sum_hand_dealer.textContent = scoreDealerOpen;
    sum_hand_user.textContent = scoreUser;
}

button_hit.addEventListener('click', function()
{
    if (startFlag === 0)
    {
        alert('Сначала сделайте ставку');
    }
    else
    {
    let numberCard = getRandomNumber(0, newCardsAll.length - 1);
    let card = newCardsAll[numberCard];
    let card_user_hit = document.getElementById(`card_user_${countCardsUser}`);
    card_user_hit.src = card.img;
    card_user_hit.classList.add(`on_board_user_${countCardsUser}`);
    card_user_hit.style.zIndex = "2";
    countCardsUser++;
    scoreUser += card.points;
    newCardsAll.splice(numberCard, 1);
    sum_hand_user.textContent = scoreUser;
    }
});

button_stand.addEventListener('click', function()
{
    if (startFlag === 0)
    {
        alert('Сначала сделайте ставку');
    }
    else
    {
    while (scoreDealer < 17)
    {
        let numberCard = getRandomNumber(0, newCardsAll.length - 1);
        let card = newCardsAll[numberCard];
        let card_dealer_hit = document.getElementById(`card_dealer_${countCardsDealer}`);
        let close_card_dealer_hit = document.getElementById(`close_card_${countCardsDealer}`);
        card_dealer_hit.src = card.img;
        card_dealer_hit.classList.add(`on_board_dealer_${countCardsDealer}`);
        close_card_dealer_hit.classList.add(`on_board_dealer_${countCardsDealer}`);
        close_card_dealer_hit.style.zIndex = "2";
        countCardsDealer++;
        scoreDealer += card.points;
        newCardsAll.splice(numberCard, 1);
    }

    setTimeout(() => {
        checkWin();
    }, 1500);
    }
});

function checkWin()
{
    const amountBet = Number(sum_bet.value);
    let amountBank = parseInt(bank.textContent.replace(/[^0-9]/g, ''), 10);

    const cardsZ = document.querySelectorAll(".card");
    cardsZ.forEach(item => {
        item.style.zIndex = "2";
    });

    close_card_dealer_2.classList.add("close_card_off");
    close_card_dealer_3.classList.add("close_card_off");
    close_card_dealer_4.classList.add("close_card_off");
    close_card_dealer_5.classList.add("close_card_off");

    setTimeout(() => {
        sum_hand_dealer.textContent = scoreDealer;

    if ((scoreDealer == scoreUser) || (scoreDealer > 21 && scoreUser > 21))
    {
        amountBank += amountBet;
        bank.textContent = `${amountBank}$`;
        result_text.textContent = `Ничья. Вы выиграли ${amountBet}$!`;
        result_box.style.display = 'block';
        result_box.classList.add("box_block");
    }

    if ((scoreUser !== 21 && scoreDealer == 21) || (scoreUser < scoreDealer && scoreDealer <= 21 || (scoreUser > 21 && scoreDealer <= 21)))
    {
        result_text.textContent = "Вы проиграли!";
        result_box.style.display = 'block';
        result_box.classList.add("box_block");
        globalScoreDealer++;
    }

    if ((scoreUser == 21 && scoreDealer !== 21) || (scoreUser > scoreDealer && scoreUser <= 21 || (scoreDealer >= 22 && scoreUser <= 21)) || (countCardsUser == 5 && scoreUser <= 21))
    {
        amountBank += amountBet*2;
        bank.textContent = `${amountBank}$`;
        result_text.textContent = `Вы выиграли ${amountBet*2}$!`;
        result_box.style.display = 'block';
        result_box.classList.add("box_block");
        globalScoreUser++;
    }
    global_score_dealer.textContent = globalScoreDealer;
    global_score_user.textContent = globalScoreUser;
    }, 1500);
    
    countCardsUser = 3;
    countCardsDealer = 3;
    startFlag = 0;
}

submit_bet.addEventListener('mouseenter', function() {
    button_success_active.style.display = 'block';
    button_success_unactive.style.display = 'none';
});
   
submit_bet.addEventListener('mouseleave', function() {
    button_success_active.style.display = 'none';
    button_success_unactive.style.display = 'block';
});

score_table.addEventListener('click', function()
{
    score_container.style.zIndex = "-1";
})

button_score.addEventListener('click', function()
{
    score_container.style.zIndex = "2";
    score_table.classList.add("active_table");
})

button_shop_1.addEventListener('click', function()
{
    if (amountBank < 1000)
    {
        alert("Вы не можете себе этого позволить!");
    }
    else
    {
        shirtCard = 2;
        amountBank -= 1000;
        bank.textContent = `${amountBank}$`;
    }
})

button_shop_2.addEventListener('click', function()
{
    if (amountBank < 5000)
    {
        alert("Вы не можете себе этого позволить!");
    }
    else
    {
        let itemTag = `<div id="item_3_box"></div>`;
        const item_3 = document.getElementById("item_3");
        itemTag += `<img src="image/giphy(1).gif" alt="" id="gif_1">`;
        itemTag += `<img src="image/giphy(2).gif" alt="" id="gif_2">`;
        itemTag += `<img src="image/giphy(3).gif" alt="" id="gif_3">`;
        itemTag += `<img src="image/giphy(4).gif" alt="" id="gif_4">`;
        itemTag += `<img src="image/giphy(5).gif" alt="" id="gif_5">`;
        itemTag += `<audio id="item_2_song" src="image/nya.mp3" preload="auto"></audio>`;
        game.innerHTML += itemTag;
        document.getElementById("item_2_song").play();
        amountBank -= 5000;
        bank.textContent = `${amountBank}$`;
    }
})

button_shop_3.addEventListener('click', function()
{
    if (amountBank < 10000)
    {
        alert("Вы не можете себе этого позволить!");
    }
    else
    {
        game.style.backgroundImage = `url(image/background-shop.jpeg)`;
        let itemTag = `<audio id="item_3_song" src="image/never_gonna.mp3" preload="auto"></audio>`;
        button_shop_3.innerHTML = itemTag;
        document.getElementById("item_3_song").play();
        amountBank -= 10000;
        bank.textContent = `${amountBank}$`;
    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;}

function refreshAttribute()
{
    card_dealer_1.src = "";
    card_dealer_1.classList.remove("on_board_dealer_1");
    card_dealer_2.src = "";
    card_dealer_2.classList.remove("on_board_dealer_2");
    card_dealer_3.src = "";
    card_dealer_3.classList.remove("on_board_dealer_3");
    card_dealer_4.src = "";
    card_dealer_4.classList.remove("on_board_dealer_4");
    card_dealer_5.src = "";
    card_dealer_5.classList.remove("on_board_dealer_5");
    card_user_1.src = "";
    card_user_1.classList.remove("on_board_user_1");
    card_user_2.src = "";
    card_user_2.classList.remove("on_board_user_2");
    card_user_3.src = "";
    card_user_3.classList.remove("on_board_user_3");
    card_user_4.src = "";
    card_user_4.classList.remove("on_board_user_4");
    card_user_5.src = "";
    card_user_5.classList.remove("on_board_user_5");
    close_card_dealer_2.classList.remove("on_board_dealer_2");
    close_card_dealer_3.classList.remove("on_board_dealer_3");
    close_card_dealer_4.classList.remove("on_board_dealer_4");
    close_card_dealer_5.classList.remove("on_board_dealer_5");
    close_card_dealer_2.classList.remove("close_card_off");
    close_card_dealer_3.classList.remove("close_card_off");
    close_card_dealer_4.classList.remove("close_card_off");
    close_card_dealer_5.classList.remove("close_card_off");

    const clodeCards = document.querySelectorAll(".close_card");
    clodeCards.forEach(item => {
        item.style.zIndex = "-1";
    });
}