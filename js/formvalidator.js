function checkFilled() {

var formData = {
  fullname: contactForm.fullname.value,
  email: contactForm.email.value,
  subject: contactForm.subject.value,
  message: contactForm.message.value
}

if(formData.fullname != "" && formData.email != ""
  && formData.subject != "SELECT FROM LIST"
  && formData.message != "") {
  return true;
} else {
  return false;
}

}


function validEmail() {
  var formEmail = contactForm.email.value;

  if(formEmail.search('@') != -1) {
    return true;
  } else {
    return false;
  }

}


function errorHandler() {

  var testERR = checkFilled();

  if(testERR) {
    alert("PASSED");
  } else {
    alert("ERROR: Some fields are not filled.");
  }
}
