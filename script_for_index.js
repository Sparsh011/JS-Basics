let element1 = document.getElementsByClassName('hello') // Retrieves the div tags whose class name is hello
console.log(element1);
element1[0].style.background = "yellow" // changes bg colour of first div to yellow
element1[1].classList.add("bg-colour-for-fun") // It adds the properties of that class to this div. Similarly, we can use classList.remove()
console.log(element1[0].innerHTML); // Logs the html code
console.log(element1[0].innerText); // Logs the hard coded text. 