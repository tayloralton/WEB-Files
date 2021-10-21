console.log("javascript working")
document.getElementById("firstbutton").addEventListener("click", buttonOne);
document.getElementById("secondbutton").addEventListener("click", buttonClicked);
function buttonOne(){
  alert("You are a trustworthy person with good music taste:)");
  document.getElementById("herotext").innerHTML = "Thank you!";
}
