const pwShowHide = document.querySelectorAll('.fa-regular');
      pwField = document.querySelectorAll('.password');
      signUp = document.querySelector('.signup-link');
      signIn = document.querySelector('.signin-link');
      loginForm = document.querySelector('.login-form');
      signupForm = document.querySelector('.signup-form');

// show and hide password / change eye icon
let eyeIcon = function(icon) {
  icon.classList.toggle("fa-eye-slash");
  icon.classList.toggle("fa-eye");
}
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    pwField.forEach(pwField => {
      if (pwField.type === "password") {
           pwField.type = "text";
   }else {
          pwField.type = "password";
          }
    })
  })
})

// // change to signup form
// signUp.addEventListener("click", ()=> {
//   signupForm.classList.add("active");
// });

// signIn.addEventListener("click", ()=> {
//   loginForm.classList.remove("active");
// });
