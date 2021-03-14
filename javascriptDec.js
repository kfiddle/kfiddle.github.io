const codeScreenshots = document.querySelectorAll('.codeScreenShots');
const header = document.querySelector('header');
const ambition = document.querySelector('.ambitionButton');
const projectSection = document.querySelector('.projects');
const aboutMeSection = document.getElementById('aboutMe');
const finalStatement = document.createElement('h3');
const bioButton = document.querySelector('.bioButtonShow');
const phoneQuery = window.matchMedia("(max-width:600px)");


const modalBioBox = document.querySelector('.aboutMeModalBox');  
const introToProjects = document.createElement('h4');
const nextSentenceAttach = document.getElementById('nextSentenceIntro');

const bioLetters = ["C","l","i","c","k","*","h","e","r","e","*","t","o","*","d","i","s","c","o","v","e","r","*","m","y","*","c",
"u","r","r","e","n","t","*","a","m","b","i","t","i","o","n"];

const project4Description = document.getElementById('project4Description');
const project3Description = document.getElementById('project3Description');
const project2Description = document.getElementById('project2Description');
const project1Description = document.getElementById('project1Description');

const projectDescriptions = [project1Description, project2Description, project3Description, project4Description];

const project4Link = document.getElementById('project4Link');
const project3Link = document.getElementById('project3Link');
const project2Link = document.getElementById('project2Link');
const project1Link = document.getElementById('project1Link');

const redText = [
                "Rummy Game in Python __________________",
                "Journal App in Javascript, Spring MVC _________",
                "Wine Review Site with Spring MVC ______________",
                "Historical Currency Converter in Javascript __"];
const blackText = [
                "Rummy Game in Python",
                "Journal App in Javascript, Spring MVC",
                "Wine Review Site with Spring MVC",
                "Historical Currency Converter in Javascript"];

const projectLinks = [project1Link, project2Link, project3Link, project4Link];

const image4 = document.getElementById('image4');
const image3 = document.getElementById('image3');
const image2 = document.getElementById('image2');
const image1 = document.getElementById('image1');

let featuredImages = [image1, image2, image3, image4];

const shot1 = "assets/pythonSample.jpg";
const shot2 = "assets/field-guide-screenshot.jpg";
const shot3 = "assets/wineReviewsSample.jpg";
const shot4 = "assets/colonialConverterScreenShot.jpg";

let imageList = [shot1, shot2, shot3, shot4];
const k = imageList.length - 1;


function spin(x) {
    let spunList = imageList;
        for(let i = 0; i < x; i++) {
            spunList = advanceList(spunList);
        }
    return spunList;
    };
    
    
    function advanceList(list) {
        let revisedList = [];
        for (let i = 0; i <= k; i++) {
            if (i === 0){
                revisedList[k] = list[0];
            } else {
                revisedList[i - 1] = list[i];
            };
        }; return revisedList;
    };

for (let i = 0; i < projectLinks.length; i++) {
    projectLinks[i].addEventListener('mouseover', function () {
        projectLinks[i].style.color = "red";
        projectLinks[i].innerText = redText[i];
        let newList = spin(i);
        image1.src = newList[0];
        image2.src = newList[1];
        image3.src = newList[2];
        image4.src = newList[3];
    })

    projectLinks[i].addEventListener('mouseout', function () {
        featuredImages[0].classList.remove('featureChosenShot');
        featuredImages[0].classList.add('featuredImage');
        projectLinks[i].style.color = "black";
        projectLinks[i].innerText = blackText[i];
        // featuredImages[0].classList.remove('featureChosenShot');
    })

    projectLinks[i].addEventListener('click', function() {
        header.style.color="#999";
        header.style.backgroundColor="white";
        image1.classList.remove('featuredImage');
        image1.classList.add('featureChosenShot');

        // .featureChosenShot {
        //     position: absolute;
        //     bottom: 25v;
        //     right:25%;
        //     width: 35%;
        //     height: 80%;
        //     transition: 1s;
        //   }

        for (let j = 0; j < projectDescriptions.length; j++) {
            projectDescriptions[j].classList.add('hidden');
        }
        projectDescriptions[i].classList.remove('hidden');
        projectDescriptions[i].classList.add('codeDescriptionShow');
    })


}

bioButton.addEventListener('click', showBio);
ambition.addEventListener('click', ambitionButtonFun);

 function showBio(e) {
    if (window.matchMedia("(max-width: 700px)").matches) {
            window.open("/projects.html");

    } else {
        bioButton.style.display = "none";
        modalBioBox.style.display = "block";

        for (let i = 0; i < bioLetters.length; i++) {
            setTimeout(printAmbition, i*40, bioLetters[i]);
        }
    } 
}

    function printAmbition(letter){
        if (letter === "*"){
            letter = "&nbsp;";     
        }
        ambition.innerHTML += letter;
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
        let words=["Here's", " what", " I've", " done", " so", " far.\n", " (Hover", " or", " click", " below...)"]
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









