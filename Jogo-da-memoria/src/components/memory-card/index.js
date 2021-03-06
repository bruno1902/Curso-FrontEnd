const $wrapCards = document.querySelector(".wrap-cards"); 

function createMemoryCard() {

const $memoryCard = document.createElement("article");

const $iconCollab = `
<img 
src='img/icon-collabcode.png' 
alt='Mascote Gaio' 
class='icon' 
/>
`;

$memoryCard.classList.add("memory-card");
$wrapCards.insertBefore($memoryCard, null);

$memoryCard.insertAdjacentHTML("afterbegin",$iconCollab);
}


function createMemoryCardFront(){
const $memoryCardFront = document.createElement("article");

const $iconC = `
<img 
src='img/icon-c.png' 
alt='Livro C' 
class='icon' 
/>
`;

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$wrapCards.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML("afterbegin",$iconC);
}