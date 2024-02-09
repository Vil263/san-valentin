const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert(' ¡¡¡Yupiiiii!!!! ¡Tenemos planes juntos este 14 de Febrero ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    alert(' "El boton de no esta solo para fines visuales"')
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})