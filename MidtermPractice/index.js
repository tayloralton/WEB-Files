let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let images = ["sunday.jpeg", "monday.jpeg", "tuesday.jpeg", "wednesday.jpeg", "thursday.jpeg", "friday.jpeg", "saturday.jpeg"];
// images array
let prevday;
// if prevday has a value, turn the active class off so we only have ont thing active at a time

for(i=0; i<document.getElementsByClassName('day').length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  // Adding the days to the divs as a h2 header
  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);
  // This is making it so I can click on the days because they are active (thing listening for, function triggering, want to get the event data)
  document.getElementsByClassName("day")[i].id = days[i];
  // adding the id so we can access it later
}

document.getElementById("Sunday").classList.toggle('active');
document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] +"' >";

function setActive(e){
  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday + 'tab').style.display = "none";
  }

  if(e.target.tagName == "H2"){
    // if the thing you click on starts with H2, we want you to do something different
    e.target.parentNode.classList.toggle("active");
    // if we click on the tab, it will go the the active id styling in CSS
  }else{
    e.target.classList.toggle("active");
    // if we click on the h2 or div, it will go the the active id styling in CSS (this makes it so the div and h2 aren't needed to click seperatly)
  }

  currentday = document.getElementsByClassName('active')[0].id;
  document.getElementById(currentday + 'tab').style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + currentday.toLowerCase() + ".jpeg' >";

}

currentday = document.getElementsByClassName('active')[0].id;
// had to add this again because my console kept saying that 'currentday' wasn't defined

var taylorMusic= document.getElementById(currentday.toLowerCase() + "song");
function play() {
taylorMusic.play();
// this function tells the audio player what song to play based on what day the tab is
}

function pause() {
taylorMusic.pause();
// this function gives the audio player the ability to pause and continue playing
}
// audio player source: https://javascript-tutor.net/index.php/playing-music-using-javascript/

const text = document.querySelector('.titletext');
const strText = text.textContent;
// This will animate the title text
const splitText = strText.split("");
// splitText splits up all the letters so we can go through them individually

text.textContent = "";
// removes the h1 before the text

for(let i=0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
  // this will apply the span to each individual item in the array
}

let char = 0;
// starting from the beginning of the text
let timer = setInterval(onTick, 50);
// creating a time to initiate the animation every 50 miliseconds

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  // adding the 'fade' effect
  char++
  if(char === splitText.length){
    complete();
    return;
    // this if statement is stopping the animation once we get to the end of the text
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
  // clearing the interval that I made so it doesn't run anymore
}
// animated text source: https://www.youtube.com/watch?v=GUEB9FogoP8
