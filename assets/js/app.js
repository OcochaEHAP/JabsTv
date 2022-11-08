//scroll-to-up
const scrollBtn = document.getElementById("scroll-up");
window.onscroll = () => {
	if (window.scrollY > 100) {
		scrollBtn.style.display = "block";
	} else scrollBtn.style.display = "none";
};
scrollBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});

//hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("ul");
function openMenu() {
	hamburger.classList.toggle("active");
	nav.classList.toggle("active");
}
hamburger.addEventListener("click", openMenu);
//close menu on link click
let navLink = document.querySelectorAll("#nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
	hamburger.classList.remove("active");
	nav.classList.remove("active");
}
