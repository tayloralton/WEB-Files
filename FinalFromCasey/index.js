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
  // if the length of characters is not at least 3, error message will occur

  if(subject.length <7){
    text = "Please Enter Valid Subject";
    error_message.innerHTML = text;
    return false;
  }
  // if the length of characters is not at least 7, error message will occur

  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  // if the length of characters is not exactly 10, error message will occu

  if(email.indexOf("@") == -1 || email.length <6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }
  // if the length of characters is not at least 6, error message will occur
  // the @ is not included

  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  // // if the length of characters is not equal to or above 140, error message will occu


  alert("Form Submitted Successfully!")
  // when submit button is clicked, alert will pop up

  return true;
}
// source: https://www.youtube.com/watch?v=WY4rvU4ImgE&t=807s
