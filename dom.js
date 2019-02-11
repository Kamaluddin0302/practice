var mainid = document.getElementById("main-content");
console.log(mainid.childNodes);
var showbrowser = document.getElementsByClassName("render");
for(var i = 0; i < showbrowser.length; i++){
console.log(showbrowser[i].innerHTML)
}
function myfun() {
var value1 = document.getElementById("first-name").value;
document.getElementById("name1").innerHTML = value1;


var value2 = document.getElementById("last-name").value;
document.getElementById("lastName").innerHTML = value2

var value3 = document.getElementById("email").value;
document.getElementById("email1").innerHTML = value3;


}


