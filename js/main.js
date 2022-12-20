//main.js


function menu() {
    console.log("gohome");
}

var columns = document.querySelectorAll(".columns");
var selectedColumn
function selectColumn(columnIndex) {
    selectedColumn = columns[columnIndex];
}

var scrollDistance = Window.scrollY

window.addEventListener('scroll', () => {
    selectedColumn.style.transform = "translateY(" + scrollDistance + ")"
    console.log("im doing something");
  });


var aboutButton = document.getElementById("about");

function menu() {
    aboutButton.style.color = "whitesmoke"
    aboutButton.innerHTML = "<h2 onclick='back()'>about</h2>"
}