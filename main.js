const starCount = 100;
const starContainer = document.querySelector('.stars');


for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;

    star.style.setProperty('--moveX', `${Math.random() * 2 - 1}`);
    star.style.setProperty('--moveY', `${Math.random() * 2 - 1}`);

    starContainer.appendChild(star);
}
