// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

//step 1
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

//step 2
modalBtn.addEventListener('click', function(){
    //step 3
    modalOverlay.classList.add('open-modal');
});

//step 2
closeBtn.addEventListener('click', function(){
    //step 4
    modalOverlay.classList.remove('open-modal');
});