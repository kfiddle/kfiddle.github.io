const codeScreenshots = document.querySelectorAll('.codeScreenShots');
const ambition = document.getElementById('ambitionButton');
const projectSection = document.querySelector('.projects');
const aboutMeSection = document.getElementById('aboutMe');
const finalStatement = document.createElement('h3');
const bioButton = document.querySelector('.bioButtonShow');
const modalBioBox = document.querySelector('.aboutMeModalBox');  
const introToProjects = document.createElement('h4');
const words=["Here's", " what", " I've", " done", " so", " far..."]

bioButton.addEventListener('click', showBio);
ambition.addEventListener('click', ambitionButtonFun);


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

 function showBio(e) {
     bioButton.style.display = "none";
     modalBioBox.style.display = "block";
    } 




 function ambitionButtonFun(e) {
    ambition.classList.add('bloom');
    ambition.innerText = "to become a JavaScript Show-off!";
    setTimeout(finalStatementLoop, 1300);
    setTimeout(introToProjectsLoop, 3000);
    setTimeout(displayProjects, 4200);

    function finalStatementLoop() {
        for (let i = 1; i < 4; i++){
            displayFunctions = [but, until, then];
            setTimeout(displayFunctions[i-1], (400*i));
        }
    }

    function introToProjectsLoop() {
        for (let i = 0; i < 6; i++){
            setTimeout(printAWord, i*100, words[i]);
        }
    }

 }

var displayProjects = function() {
    projectSection.classList.add('projectsDisplay');
}

function but() {
finalStatement.innerText = "But";
finalStatement.style.color = "darkblue";
finalStatement.style.fontSize = "2em";
aboutMeSection.appendChild(finalStatement);

}

function until() {
    finalStatement.innerText = "But until";
    aboutMeSection.appendChild(finalStatement);
}

function then() {
    finalStatement.innerText = "But until then,";
    aboutMeSection.appendChild(finalStatement);
}

function printAWord(word) {
    introToProjects.innerText = introToProjects.innerText + word;
    introToProjects.style.fontSize = "1.5em";
    introToProjects.style.color = "darkblue";
    aboutMeSection.appendChild(introToProjects);

}



