$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  console.log(userName)
  console.log(pwd)
  if (userName == "tentangIT" && pwd == "1208") { // username and password
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});
