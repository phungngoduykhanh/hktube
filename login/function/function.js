

const API_URL = "https://63aa9f2dfdc006ba604736ec.mockapi.io/users";
let users = [];
async function getUser() {
  try {
    let data = await axios.get(API_URL);
    users = data.data;
    console.log(users);
  } catch (e) {
    console.log(e)
  }
}

function checklogin() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if (user != null && pass !=null) {
    document.getElementById("btn-signin").disabled = false;
  }
}

function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  console.log(user,pass);
  for (let i = 0; i < users.lenght; i++) {
    if (user == users[i].usersname && pass == users[i].password) {
      alert("Success");
      window.location = "https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp";
    } else {
      alert("wrong");
    }

  }
  

}


function check() {
  let check;
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let re_pass = document.getElementById("re-pass").value;
  if (username != null && password != null && re_pass != null){
    document.getElementById("signup").disabled = false;
  }
  if (password != re_pass) {
    check = "Your passwords aren't consist";
    document.getElementById("check").style.color = "#B4464C";
    document.getElementById("check").innerHTML = check; 
    
  }
  else {
    check = "Good to go!";
    document.getElementById("check").style.color = "#77DD77";
    document.getElementById("check").innerHTML = check; 
  }
  
}

function signup() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let id;
  let img = "images"


  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      alert ("This username is already had");
    }
    else {
      let user = {
        id: id,
        username: username,
        password: password,
        profile_picture: img,
        name: "username" + id,
      }
    }

  }
}




function changepage() {
  let page = document.getElementById("btnchange").value;
  switch (page) {
    case "Sign up":
      window.location = "http://127.0.0.1:5500/signup.html";
      break;
    case "Sign in":
      window.location = "http://127.0.0.1:5500/login.html";
      break;
  }
}