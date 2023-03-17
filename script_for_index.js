let element1 = document.getElementsByClassName('hello') // Retrieves all the tags whose class name is hello
// console.log(element1);
element1[0].style.background = "yellow" // changes bg colour of first div to yellow
element1[1].classList.add("bg-colour-for-fun") // It adds the properties of that class to this div. Similarly, we can use classList.remove()
// console.log(element1[0].innerHTML); // Logs the html code
// console.log(element1[0].innerText); // Logs the hard coded text. 

let element2 = document.getElementsByTagName('div')
// console.log(element2);

let createdElement = document.createElement('p') // Creates a paragraph element
createdElement.innerText = "This is a paragraph created using document"
element2[2].appendChild(createdElement) // With this we can append a paragraph to the div tag. element[i], where i is the position of the div where we want to insert.

let createdElement2 = document.createElement('i') // Creates an italic element
createdElement2.innerText = "Italic text will replace CE1"
element2[2].replaceChild(createdElement2, createdElement) // Replaces createdElement with createdElement2


let sel = document.querySelector('.container')
console.log(sel);
sel = document.querySelectorAll('.container')
console.log(sel);


function showAlert(){
    alert("Alert showed!")
}


// The following code is executed when window will be loaded
// window.onload = function(){
//     alert('Window loaded')
// }

containerIdHere.addEventListener('click', function(){
    // alert("click hua 2nd container")
    document.querySelector('.container').innerHTML = "<b>Clicked here</b>"
})

// containerIdHere.addEventListener('mouseover', function(){
//     alert("Mouse over 2nd container")
// })
