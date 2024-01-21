
//Login btn
document.getElementById("login").addEventListener("click", function() {
  alert("Login Successful");
});
//sign up
document.getElementById("fp1").addEventListener("click", function() {
    document.getElementById("login1").style.display = "none";
    document.getElementById("register").style.display = "table";
});
//forget password
document.getElementById("fp2").addEventListener("click", function() {
  document.getElementById("login1").style.display = "none";
  document.getElementById("forget").style.display = "table";
});
//Sign up btn
document.getElementById("sign_up").addEventListener("click", function() {
  document.getElementById("login1").style.display = "table";
  document.getElementById("register").style.display = "none";
  alert("Register Successful");
  
});
//forget password btn
document.getElementById("for_btn").addEventListener("click", function() {
  document.getElementById("login1").style.display = "table";
  document.getElementById("forget").style.display = "none";
  alert("Reset Password link send Successful");
});
