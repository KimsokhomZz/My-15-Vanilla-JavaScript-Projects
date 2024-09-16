const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number betweeen 0-3 (3 is arr index)
    const randomNum = getRandomNum();
    console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
};