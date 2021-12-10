console.log('hello!');

function validation(){
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var error_message = document.getElementById('error_message');
  var text;

  error_message.style.padding = "10px";

  if(name.length <3){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(subject.length <7){
    text = "Please Enter Valid Subject";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length <6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully!")

  return true;
}
// source: https://www.youtube.com/watch?v=WY4rvU4ImgE&t=807s

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// source: https://www.w3schools.com/howto/howto_js_slideshow.asp
