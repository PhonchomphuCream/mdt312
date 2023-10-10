var count=1;

function postFunction() { 
    if(count==1) {
        document.getElementById("topic1").innerHTML = document.getElementById("text1").value;
        count++;
    }
    else if (count==2){
        document.getElementById("comment1").innerHTML = document.getElementById("text1").value;
        count++;
    }
    else if (count==3){
        document.getElementById("comment2").innerHTML = document.getElementById("text1").value;
        count=1;
    }
 }
function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}