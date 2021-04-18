const path_close = "images/icon-close.svg";
const path_hamburger = "images/icon-hamburger.svg";
const toggle = document.querySelector(".toggle-nav");
const toggle_icon = document.querySelector(".toggle-nav img");
const navlists = document.querySelector(".nav-links");

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}



let navbar = ()=>{
	t = 0;
	toggle.addEventListener("click", ()=>{
		navlists.classList.toggle("dropdown");
		if (t===1) {
			toggle_icon.src = path_hamburger;
			enableScroll();
			t=0;
		} else {
			toggle_icon.src = path_close;
			disableScroll();
			t = 1;
		}
		
	});
};

navbar();