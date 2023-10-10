window.onload = pageLoad;
function pageLoad(){
	var check = document.gotElementById("myForm")
    check.onsubmit = validateForm
}

function validateForm() {
    var pass = document.forms["myForm"]["password"].value
    var repass = document.forms["myForm"]["repassword"].value
    if(pass !== repass){
        alert("Pass is not match");
        document.getElementById("errormsg").innerHTML = "**Wrong password**"
        return false;
    }
    else{
        alert("Register sucess")
    }
    
}
