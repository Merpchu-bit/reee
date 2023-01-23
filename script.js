/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/

const body= document.body;
      let lastScroll=0;
      window.addEventListener('scroll',() =>{
        const currentScroll = window.pageYOffset
        
        if(currentScroll <= 0){
          body.classList.remove("scroll-up")
        }
        if (currentScroll>lastScroll && !body.classList.contains("scroll-down")){
          body.classList.remove("scroll-up")
          body.classList.add("scroll-down")
        }
        if (currentScroll<lastScroll && body.classList.contains("scroll-down")){
          body.classList.remove("scroll-down")
          body.classList.add("scroll-up")
        }
        
        lastScroll=currentScroll;
      })


        function myFunction() {
          alert("This is my work phone! "  + 
                "RanDOM NUMber");
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var textBox = document.getElementById("textBoxId"); // get the text box element
textBox.addEventListener("keyup", function(event) { // add an event listener for the "keyup" event
  if (event.target.value === "Give me my tools") { // check if the text box value is "Give me my tools"
    var navBar = document.getElementById("navBarId"); // get the navigation bar element
    var newTab = document.createElement("a"); // create a new "a" element (for the new tab)
    newTab.innerHTML = "Tools"; // set the tab text
    newTab.href = "#"; // set the tab link
    navBar.appendChild(newTab); // add the new tab to the navigation bar
  }
});



// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/


