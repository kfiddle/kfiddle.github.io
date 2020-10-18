const codeScreenshots = document.querySelectorAll('.codeScreenShots');
const ambition = document.getElementById('ambitionButton');
const projectSection = document.querySelector('.projects');
const aboutMeSection = document.getElementById('aboutMe');
const finalStatement = document.createElement('h3');

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

 ambition.addEventListener('click', ambitionButtonFun);
 
function vanish(e) {
    ambition.classList.remove('bloom');
    ambition.style.fontWeight = "light";
    ambition.innerText = "But until then, here's what I've done so far...";
    ambition.style.fontSize = "1em";
    ambition.style.color = 'red';
    setTimeout(displayProjects, 2100);
}

 function ambitionButtonFun(e) {
    ambition.classList.add('bloom');
    ambition.innerText = "to become a JavaScript Showoff!";
    setTimeout(finalStatementLoop, 1300);

    function finalStatementLoop() {
        for (let i = 1; i < 4; i++){
            displayFunctions = [but, until, then];
            setTimeout(displayFunctions[i-1], (300*i));
        }
    }
 }

var displayProjects = function() {
    projectSection.classList.add('projectsDisplay');
}

function but() {
finalStatement.innerText = "But";
aboutMeSection.appendChild(finalStatement);

}

function until() {
    finalStatement.innerText = "But until";
    aboutMeSection.appendChild(finalStatement);
}

function then() {
    finalStatement.innerText = "But until then...";
    aboutMeSection.appendChild(finalStatement);
}

function redFlash(finalStatemen) {
finalStatement.style.color = "red;
}