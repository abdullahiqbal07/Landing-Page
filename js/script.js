// handling header

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("fixit").className = "fix";
    } else {
        document.getElementById("fixit").className = "";
    }
}

document.getElementById('menu-icon').addEventListener("click", myfun)

function myfun() {
    document.getElementById("menu-icon").classList.toggle("bx-x");
    document.getElementById("nav-links").classList.toggle("show");

    console.log(document.getElementById("menu-icon").classList)

    // if(document.getElementsByTagName("a") === 'click'){
    //     console.log("working")
    // }
    document.getElementById('nav-links').addEventListener("click", function(event) {
        document.getElementById("menu-icon").classList.toggle("bx-x");
    document.getElementById("nav-links").classList.remove("show");
    });    
    
}