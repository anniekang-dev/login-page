// show and hide password
function eyeIcon() {
  let pwShowHide = document.getElementById("user-pw");
             
  if (pwShowHide.type === "password") {
      pwShowHide.type = "text";
  }
  
  else {
    pwShowHide.type = "password";
  }
 }