// events=======================================
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked


// Event Handlers
// Event handlers can be used to handle and verify user input, user actions, and browser actions

// Add an event listener that fires when a user clicks a button:
// element.addEventListener(event, function, useCapture);
// document.getElementById("myBtn").addEventListener("click", displayDate);

// remove an event listner
// element.removeEventListener("mousemove", myFunction);

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    btn.classList.toggle("black-btn")
})
