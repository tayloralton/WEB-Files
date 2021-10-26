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
  // 21.10 in the youtube video for comment!!! Whenever I do this the days go away (adding the id so we can access it later)
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
  console.log(currentday);
  document.getElementById(currentday + 'tab').style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + currentday.toLowerCase() + ".jpeg' >";

}

document.getElementById("songbutton").addEventListener("click", buttonClicked);

function buttonClicked(){
  console.log('javaworking');

  // document.getElementById("qtext").innerHTML = quotes[quotecount];
  // if(quotecount>8){
  //   quotecount = 0;
  // }else{
  //   quotecount++;
  // }
}
