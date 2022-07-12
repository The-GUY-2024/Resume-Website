window.onscroll = function(){ myFun()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;


function myFun() {
	if (window.pageYOffset >= sticky){
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}
