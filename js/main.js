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
var aboutPage = document.getElementById("about-page");
var aboutElements = document.querySelectorAll(".about-elements");
console.log(aboutElements);
console.log(aboutElements[0])
var aboutElementsNum = aboutElements.length

function menu() {
    aboutButton.style.color = "whitesmoke"
    aboutButton.innerHTML = "<h2 onclick='back()'>back</h2>"
    aboutPage.style.transform = "scale(1,1)"
    for (let i = 0; i < aboutElementsNum; i++){
        aboutElements[i].style.opacity = "1";
    }
}


function back() {
    aboutButton.style.color = "rgb(45, 45, 45)"
    aboutButton.innerHTML = "<h2 onclick='menu()'>about</h2>"
    aboutPage.style.transform = "scale(0,0)"
    for (let i = 0; i < aboutElementsNum; i++){
        aboutElements[i].style.opacity = "0";
    }
}
