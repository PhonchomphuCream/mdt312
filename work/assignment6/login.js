window.onload = loginLoad;
function loginLoad(){
	var logcheck = document.getElementById("myLogin")
	logcheck.onsubmit = checkLogin
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const usename = urlParams.get('username');
	const pass = urlParams.get('password');
	var use = document.forms["myLogin"]["username"].value
	var pas = document.forms["myLogin"]["password"].value
	if(use != usename|| pas != pass){
		alert('wrong username or password')
		return false;
	} else {
		alert('Welcome')
	}
}

			