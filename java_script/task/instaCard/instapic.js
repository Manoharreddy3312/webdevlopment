//  when click the heart button shuld be red color again click white color

const heartButton = document.getElementById('heart-button');
heartButton.addEventListener('click', function() {
    if (heartButton.style.color === 'red') {
        heartButton.style.color = 'white';  
    } else {
        heartButton.style.color = 'red';
    }
});

let likeCount = 0;
const likeCountDiv = document.getElementById('like_count');
heartButton.addEventListener('click', function() {
    if (heartButton.style.color === 'red') {
        likeCount++;
    } else {
        likeCount--;
        if (likeCount < 0) likeCount = 0;
    }
    likeCountDiv.textContent = `${likeCount} likes`;
});
