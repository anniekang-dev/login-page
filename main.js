let eyeIcon = function(icon) {
  icon.classList.toggle("fa-eye");
  
  let pwShowHide = document.getElementById("user-pw");
             
  if (pwShowHide.type === "password") {
      pwShowHide.type = "text";
  }
  
  else {
    pwShowHide.type = "password";
  }
 }