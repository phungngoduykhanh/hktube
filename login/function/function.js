function loginpage() {
  window.location = 'http://127.0.0.1:5500/signup.html';
}

function signuppage() {
  window.location = 'http://127.0.0.1:5500/login.html';
}


const API_URL = "https://63aa9f2dfdc006ba604736ec.mockapi.io";

function callAPI(endpoint,method = "GET", body) {
  return axios ({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data:body
  }).catch((err) => {
    console.log(err)
  })
}

function login () {
  var users = [];
  callAPI("users","GET",null).then((res) => {
    users = res.data;
  })
  console.log(users)
  // let id = lgf.user.value;
  // let pass = lgf.pass.value;

  // for (i in users) {
  //   if( id === users[i].usersname && pass === users[i].password){
  //     window.location = "https://www.google.com.vn/";
  //   }
  // }
}