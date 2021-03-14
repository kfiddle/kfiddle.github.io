const bioButton = document.getElementById('bioButton');
const aboutMeSentenceDiv = document.getElementById('aboutMeSentences');


bioButton.addEventListener('click', ()=> {
let firstStatement = document.createElement('p');
let secondStatement = document.createElement('p');
let thirdStatement = document.createElement('p');
let finalSentence = document.createElement('small');

firstStatement.innerHTML = `Until recently, I spent each day as a professional violin player
immersed in a centuries-old world. I spent thousands of hours with a
piece of technology built around the year 1800, and with it I
explored a world of language and ideas stretching back even further.
I used to joke that my analog brain couldn't function without pencil
and paper.`

secondStatement.innerHTML = `...and then one day, I found myself staring at an algorithm written
in Java, and I realized I was looking at pure poetry. Reading
well-written code is like listening to Bach- it's magic!`

thirdStatement.innerHTML = `The tools of my current trade might be newer, but the journey they
accompany, through a world of language and ideas, isn't all that
different...and yes, pencil and paper still have a place for me,
even in the digital world.`

finalSentence.innerHTML = `  I am a graduate of <a href="https://wecancodeit.org/">We Can Code It</a> .`;

aboutMeSentenceDiv.appendChild(firstStatement);
aboutMeSentenceDiv.appendChild(secondStatement);
aboutMeSentenceDiv.appendChild(thirdStatement);
aboutMeSentenceDiv.appendChild(finalSentence);


})



