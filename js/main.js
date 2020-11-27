/*
reikia uzdeti/nuimti klase "kaista" ant tinkamos skyles
*/

const skyles = document.querySelectorAll('.skyle');
const jungikliai = document.querySelectorAll('.jungiklis');

for (let i = 0; i < jungikliai.length; i++) {
    const jungiklis = jungikliai[i];

    jungiklis.addEventListener('click', () => {
        skyles[i].classList.toggle('kaista');
    })
}