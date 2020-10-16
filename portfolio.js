const codeScreenshots = document.querySelectorAll('.codeScreenShots');
const ambition = document.getElementById('ambitionButton');


for (let i = 0; i < codeScreenshots.length; i++) {
    codeScreenshots[i].addEventListener('mouseover', grow);
    codeScreenshots[i].addEventListener('mouseout', shrink);

    function grow(e) {
        codeScreenshots[i].classList.add('onHover');
    }

    function shrink(e) {
        codeScreenshots[i].classList.remove('onHover');
    }
 };

 ambition.addEventListener('click', bloom);

 function bloom(e) {
     ambition.classList.add('bloom');
     ambition.style.fontWeight = "bold";
     ambition.innerText = "Become a JavaScript Showoff!";
     ambition.style.color = "red";
     
 }
    


