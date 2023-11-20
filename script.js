const burgerBtn = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

burgerBtn.addEventListener("click", () => {
	console.log("click");
	mobileNav.classList.toggle("mobile-nav-disable");
});
