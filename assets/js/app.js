// Record this?

// First - store a value using sessionStorage.setItem("key", "value")

sessionStorage.setItem("test", "Disneyland");

// Now get it and display it somewhere
const someValue = sessionStorage.getItem("test")

// Delete the sessionStorage and the code above and do the main task:

// Get the form
const formEl = document.querySelector("form");

// Listen for submit event, prevent default, store the first+last name in sessionStorage

if(formEl){
    
    formEl.addEventListener("submit", function(e) {
        e.preventDefault();
        const firstName = formEl.formFirstName.value;
        
        const lastName = formEl.formLastName.value;
        
        sessionStorage.setItem("username", `${firstName} ${lastName}`);
        currentuserEl.textContent = sessionStorage.getItem("username");
        
    });
}
    
// Get the .currentUser and store the value of the sessionStorage in there
const currentuserEl = document.querySelector(".currentUser")
currentuserEl.textContent = sessionStorage.getItem("username");

// Now try getting the sessionStorage from anotherfile.html

// If you have time: try to write the pseudocode for handling the light/darkmode colorswitch. Tip: I've setup the css so that all you have to do to go to darkmode is change the css-variables lines 2-3, have a look
