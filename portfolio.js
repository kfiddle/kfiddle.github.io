const codeScreenshots = document.querySelectorAll('.codeScreenShots');
const ambition = document.getElementById('ambitionButton');
const projectSection = document.querySelector('.projects');
const aboutMeSection = document.getElementById('aboutMe');
const finalStatement = document.createElement('h3');
const bioButton = document.querySelector('.bioButtonShow');
const modalBioBox = document.querySelector('.aboutMeModalBox');  
const introToProjects = document.createElement('h4');
const words=["Here's", " what", " I've", " done", " so", " far..."]

const createFortuneTellerLink = document.getElementById('fortuneTellerLink');
const createWineReviewsLink = document.getElementById('wineReviewsLink');
const createVirtualPetLink = document.getElementById('virtualPetLink');
const createPythonLink = document.getElementById('pythonLink');

const bottom = document.getElementById('bottom');
const second = document.getElementById('second');
const third = document.getElementById('third');
const featuredImage = document.getElementById('featuredImage');

 createFortuneTellerLink.addEventListener('mouseover', spin1);
 createWineReviewsLink.addEventListener('mouseover', spin2);
 createVirtualPetLink.addEventListener('mouseover', spin3);
 createPythonLink.addEventListener('mouseover', spin4);

 createFortuneTellerLink.addEventListener('mouseout', originalColor);
 createWineReviewsLink.addEventListener('mouseout', originalColor);
 createVirtualPetLink.addEventListener('mouseout', originalColor);
 createPythonLink.addEventListener('mouseout', originalColor);



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
    ambition.innerText = "to become a JavaScript Wizard!";
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

function spin1(e) {
    createFortuneTellerLink.style.color="red";
    featuredImage.src="assets/fortuneTellerSample.jpg";
    third.src="assets/wineReviewsSample.jpg";
    second.src="assets/virtualPet.jpg";
    bottom.src="assets/pythonSample.jpg";
}

function spin2(e) {
    createWineReviewsLink.style.color= "red";
    featuredImage.src="assets/wineReviewsSample.jpg";
    third.src="assets/virtualPet.jpg";
    second.src="assets/virtualPet.jpg";
    bottom.src="assets/fortuneTellerSample.jpg";
}

function spin3(e) {
    createVirtualPetLink.style.color="red";
    featuredImage.src="assets/virtualPet.jpg";
    third.src="assets/pythonSample.jpg";
    second.src="assets/fortuneTellerSample.jpg";
    bottom.src="assets/wineReviewsSample.jpg";
}

function spin4(e) {
    createPythonLink.style.color="red";
    featuredImage.src="assets/pythonSample.jpg";
    third.src="assets/fortuneTellerSample.jpg";
    second.src="assets/wineReviewsSample.jpg";
    bottom.src="assets/virtualPet.jpg";
}

function originalColor(e) {
    if (createFortuneTellerLink.style.color ==="red"){
        createFortuneTellerLink.style.color = "black";
    } else if (createWineReviewsLink.style.color==="red"){
        createWineReviewsLink.style.color="black";
    } else if (createVirtualPetLink.style.color==="red"){
        createVirtualPetLink.style.color="black";
    } else if (createPythonLink.style.color==="red") {
        createPythonLink.style.color="black";
    }
}



