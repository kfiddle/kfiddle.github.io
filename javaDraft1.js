const codeScreenshots = document.querySelectorAll('.codeScreenShots');
const header = document.querySelector('header');
const ambition = document.querySelector('.ambitionButton');
const projectSection = document.querySelector('.projects');
const aboutMeSection = document.getElementById('aboutMe');
const finalStatement = document.createElement('h3');
const bioButton = document.querySelector('.bioButtonShow');
const modalBioBox = document.querySelector('.aboutMeModalBox');  
const introToProjects = document.createElement('h4');
const nextSentenceAttach = document.getElementById('nextSentenceIntro');

const fortuneDescription = document.getElementById('fortuneDescription');
const wineDescription = document.getElementById('wineDescription');
const virtualPetDescription = document.getElementById('virtualPetDescription');
const pythonDescription = document.getElementById('pythonDescription');

const createFortuneTellerLink = document.getElementById('fortuneTellerLink');
const createWineReviewsLink = document.getElementById('wineReviewsLink');
const createVirtualPetLink = document.getElementById('virtualPetLink');
const createPythonLink = document.getElementById('pythonLink');
const codeSampleZoom = document.getElementById('codeSampleZoom');

const bottom = document.getElementById('bottom');
const second = document.getElementById('second');
const third = document.getElementById('third');
const featuredImage = document.querySelector('.featuredImage');

 createFortuneTellerLink.addEventListener('mouseover', spin1);
 createWineReviewsLink.addEventListener('mouseover', spin2);
 createVirtualPetLink.addEventListener('mouseover', spin3);
 createPythonLink.addEventListener('mouseover', spin4);

 createFortuneTellerLink.addEventListener('mouseout', originalState);
 createWineReviewsLink.addEventListener('mouseout', originalState);
 createVirtualPetLink.addEventListener('mouseout', originalState);
 createPythonLink.addEventListener('mouseout', originalState);

createFortuneTellerLink.addEventListener('click', zoomOnFortune);
createWineReviewsLink.addEventListener('click', zoomOnWine);
createVirtualPetLink.addEventListener('click', zoomOnVirtualPet);
createPythonLink.addEventListener('click', zoomOnPython);

bioButton.addEventListener('click', showBio);
ambition.addEventListener('click', ambitionButtonFun);

 function showBio(e) {
     bioButton.style.display = "none";
     modalBioBox.style.display = "block";
    } 

 function ambitionButtonFun(e) {
    ambition.classList.add('bloom');
    ambition.innerText = "to become a JavaScript Wizard!";
    
    setTimeout(firstIntroToProjectsLoop, 1300);
    setTimeout(introToProjectsLoop, 2800);
    setTimeout(displayProjects, 4200);

    function firstIntroToProjectsLoop() {
        let introWords = ["But ", " until", " then,\n "];
        for (let i = 0; i < 3; i++) {
            setTimeout(printWords, i*400, introWords[i]);
        }
    }

    function introToProjectsLoop() {
        let words=["Here's", " what", " I've", " done", " so", " far.\n", " (Hover", " or", " click...", " below)"]
        for (let i = 0; i < 10; i++){
            setTimeout(printWords, i*100, words[i]);
        }
    }
}


var displayProjects = function() {
    projectSection.classList.add('projectsDisplay');
}

function printWords(word){
    introToProjects.innerText = introToProjects.innerText + word;
    introToProjects.style.fontSize = "1.5em";
    introToProjects.style.color = "darkblue";
    aboutMeSection.appendChild(introToProjects);

}

function spin1(e) {
    createFortuneTellerLink.style.color="red";
    createFortuneTellerLink.innerText="FortuneTeller in Java _____________________";
    featuredImage.src="assets/fortuneTellerSample.jpg";
    third.src="assets/wineReviewsSample.jpg";
    second.src="assets/virtualPet.jpg";
    bottom.src="assets/pythonSample.jpg";
}

function spin2(e) {
    createWineReviewsLink.style.color= "red";
    createWineReviewsLink.innerText="Wine Review Site ________________________";
    featuredImage.src="assets/wineReviewsSample.jpg";
    third.src="assets/virtualPet.jpg";
    second.src="assets/virtualPet.jpg";
    bottom.src="assets/fortuneTellerSample.jpg";
}

function spin3(e) {
    createVirtualPetLink.style.color="red";
    createVirtualPetLink.innerText="Virtual Pet in Java ________________________";
    featuredImage.src="assets/virtualPet.jpg";
    third.src="assets/pythonSample.jpg";
    second.src="assets/fortuneTellerSample.jpg";
    bottom.src="assets/wineReviewsSample.jpg";
}

function spin4(e) {
    createPythonLink.style.color="red";
    createPythonLink.innerText="Rummy Game in Python __________________";
    featuredImage.src="assets/pythonSample.jpg";
    third.src="assets/fortuneTellerSample.jpg";
    second.src="assets/wineReviewsSample.jpg";
    bottom.src="assets/virtualPet.jpg";
}

function originalState(e) {
    featuredImage.classList.remove('featureChosenShot');

    if (createFortuneTellerLink.style.color ==="red"){
        createFortuneTellerLink.style.color = "black";
        createFortuneTellerLink.innerText="FortuneTeller in Java";
    } else if (createWineReviewsLink.style.color==="red"){
        createWineReviewsLink.style.color="black";
        createWineReviewsLink.innerText="Wine Review Site";
    } else if (createVirtualPetLink.style.color==="red"){
        createVirtualPetLink.style.color="black";
        createVirtualPetLink.innerText="Virtual Pet in Java";
    } else if (createPythonLink.style.color==="red") {
        createPythonLink.style.color="black";
        createPythonLink.innerText="Rummy Game in Python";
    }
}

function zoomOnFortune(e) {
    header.style.color="#999";
    header.style.backgroundColor="white";
    featuredImage.classList.add('featureChosenShot');
    fortuneDescription.classList.remove('hidden');
    fortuneDescription.classList.add('codeDescriptionShow');
    pythonDescription.classList.add('hidden');
    wineDescription.classList.add('hidden');
    virtualPetDescription.classList.add('hidden');

}

function zoomOnWine(e) {
    header.style.color="#999";
    header.style.backgroundColor="white";
    featuredImage.classList.add('featureChosenShot');
    wineDescription.classList.remove('hidden');
    wineDescription.classList.add('codeDescriptionShow');
    pythonDescription.classList.add('hidden');
    virtualPetDescription.classList.add('hidden')
    fortuneDescription.classList.add('hidden');
}

function zoomOnVirtualPet(e) {
    header.style.color="#999";
    header.style.backgroundColor="white";
    featuredImage.classList.add('featureChosenShot');
    virtualPetDescription.classList.remove('hidden');
    virtualPetDescription.classList.add('codeDescriptionShow');
    pythonDescription.classList.add('hidden');
    wineDescription.classList.add('hidden');
    fortuneDescription.classList.add('hidden');

}

function zoomOnPython(e) {
    header.style.color="#999";
    header.style.backgroundColor="white";
    featuredImage.classList.add('featureChosenShot');
    pythonDescription.classList.remove('hidden');
    pythonDescription.classList.add('codeDescriptionShow');
    wineDescription.classList.add('hidden');
    fortuneDescription.classList.add('hidden');
    virtualPetDescription.classList.add('hidden')
}
