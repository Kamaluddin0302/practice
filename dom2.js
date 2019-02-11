

var maindiv = document.getElementById("form-content").nodeType;
console.log(maindiv)
var lastName = document.getElementById("lastName");
console.log(lastName.nodeType);
console.log(lastName.childNodes[0].nodeType)
lastName.innerHTML = "Kamal Uddin"

var maincontent =document.getElementById("main-content");
console.log(maincontent.firstChild)
console.log(maincontent.lastChild)


console.log(lastName.nextSibling);
console.log(lastName.previousSibling);
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType)