//--------------------------------------------- PRELOADER-------------------------------------------------

//--------------------------------------------- add dynamic pop-up-------------------------------------------------

// Chez Lalee
$("#Chez-container i").click(function () {
	let getPopUpChez = document.querySelector(
		"#Onclick-Popup-Main-container-chez"
	);
	getPopUpChez.classList.add("popup-visible");
	$("body").addClass("stop-scrolling");
});

$("#Close-button-Chez").click(function () {
	let getPopUpChez = document.querySelector(
		"#Onclick-Popup-Main-container-chez"
	);
	getPopUpChez.classList.remove("popup-visible");
	$("body").removeClass("stop-scrolling");
});

// Baseri Barber Shop

$("#arrow-Baseri").click(function () {
	let getPopUpBaseri = document.querySelector(
		"#Onclick-Popup-Main-container-baseri"
	);
	getPopUpBaseri.classList.add("popup-visible");
	$("body").addClass("stop-scrolling");
});

$("#Close-button-baseri").click(function () {
	let getPopUpBaseri = document.querySelector(
		"#Onclick-Popup-Main-container-baseri"
	);
	getPopUpBaseri.classList.remove("popup-visible");
	$("body").removeClass("stop-scrolling");
});

// Oxford dental centre

$("#arrow-Oxford").click(function () {
	let getPopUpOxford = document.querySelector(
		"#Onclick-Popup-Main-container-oxford"
	);
	getPopUpOxford.classList.add("popup-visible");
	$("body").addClass("stop-scrolling");
});

$("#Close-button-oxford").click(function () {
	let getPopUpOxford = document.querySelector(
		"#Onclick-Popup-Main-container-oxford"
	);
	getPopUpOxford.classList.remove("popup-visible");
	$("body").removeClass("stop-scrolling");
});

// qualities slider

let counterArrowsQualities = 3;

function MoveRight() {
	counterArrowsQualities++;
	let addLeftPosValue = -counterArrowsQualities * 100 + "%";
	console.log(addLeftPosValue);
	console.log(counterArrowsQualities);
	$("#qualities-container").animate({ left: addLeftPosValue }, 500);

	if (counterArrowsQualities == 5) {
		$("#qualities-container").animate(
			{ left: addLeftPosValue },
			500,
			function () {
				$("#qualities-container").css("left", "-100%");
			}
		);
		counterArrowsQualities = 1;
	}
}
function MoveLeft() {
	counterArrowsQualities--;
	let addLeftPosValue = -counterArrowsQualities * 100 + "%";
	console.log(addLeftPosValue);
	console.log(counterArrowsQualities);

	$("#qualities-container").animate({ left: addLeftPosValue }, 500);

	if (counterArrowsQualities == 0) {
		$("#qualities-container").animate(
			{ left: addLeftPosValue },
			500,
			function () {
				$("#qualities-container").css("left", "-400%");
			}
		);
		counterArrowsQualities = 4;
	}
}

$("#arrow-left-about-me").click(MoveLeft);
$("#arrow-right-about-me").click(MoveRight);

let demoDiv = document.getElementById("Description-and-see-my-work-container");
console.log(demoDiv.offsetTop);

// Add opacity effect on text

// get elements
let getElementsForOpacityEffect = document.querySelectorAll(".opacity-effect");
let getViewportHeight = window.innerHeight;

// get elements
let getElementsForBarsEffect = document.querySelectorAll(".section-filled");

//add event listener
document.addEventListener("scroll", function () {
	for (let i = 0; i < getElementsForBarsEffect.length; i++) {
		let getRectY =
			getElementsForBarsEffect[i].getBoundingClientRect().y +
			window.pageYOffset -
			getViewportHeight;

		if (getRectY < window.pageYOffset) {
			getElementsForBarsEffect[i].style.width = "100%";
		}
	}
});

//--- Go to top of page button

let getButtonContainer = document.getElementById("Go-to-top-page-container");
window.addEventListener("scroll", function () {
	let scrollPosition = window.scrollY;
	let windowHeight = window.innerHeight;

	if (scrollPosition > windowHeight) {
		getButtonContainer.classList.add("make-top-to-page-button-visible");
	} else {
		getButtonContainer.classList.remove("make-top-to-page-button-visible");
	}
});

//--- Smooth scrolling

$(document).on("click", 'a[href^="#"]', function (event) {
	event.preventDefault();
	let getMenuBarCont = document.getElementById("Expanding-menu-container");
	let getHeightOfMenuBar = getMenuBarCont.offsetHeight;

	$("html, body").animate(
		{
			scrollTop: $($.attr(this, "href")).offset().top - getHeightOfMenuBar,
		},
		900
	);
});

// Add media query

let query = matchMedia("all and (max-width: 911px)").matches;
console.log(query);

// Move project on desktop version

let getArrowLeftDesktop = document.querySelector(
	"#arrow-left-about-me-desktop"
);
let getArrowRightDesktop = document.querySelector(
	"#arrow-right-about-me-desktop"
);
let getProjContForDesktop = document.querySelector(
	"#Projects-section-container-without-title"
);
let getSmallProjectsCont = document.querySelector("#Small-projects-container");
let getSmallProjectsContTitle = document.querySelector("#Small-projects-title");
let Xpos = 0;
getProjContForDesktop.style.left = `${Xpos}`;

getArrowRightDesktop.addEventListener("click", () => {
	getArrowLeftDesktop.classList.remove("arrows-desktop-off");

	if (Xpos == 100) {
		Xpos += 100;
		if (!query) {
			getSmallProjectsContTitle.style.left = `${(912 * Xpos) / 100}px`;
			getSmallProjectsCont.style.left = `${(912 * Xpos) / 100}px`;
		} else {
			getSmallProjectsCont.style.left = `${Xpos}vw`;
			getSmallProjectsContTitle.style.left = `${Xpos}vw`;
		}

		getProjContForDesktop.style.left = `-${Xpos}%`;
		getArrowRightDesktop.classList.add("arrows-desktop-off");
	} else {
		getArrowRightDesktop.classList.remove("arrows-desktop-off");
		Xpos += 100;
		if (!query) {
			getSmallProjectsContTitle.style.left = `${(912 * Xpos) / 100}px`;
			getSmallProjectsCont.style.left = `${(912 * Xpos) / 100}px`;
		} else {
			getSmallProjectsCont.style.left = `${Xpos}vw`;
			getSmallProjectsContTitle.style.left = `${Xpos}vw`;
		}
		getProjContForDesktop.style.left = `-${Xpos}%`;
	}
});

getArrowLeftDesktop.addEventListener("click", () => {
	getArrowRightDesktop.classList.remove("arrows-desktop-off");

	if (Xpos == 100) {
		Xpos -= 100;
		getArrowLeftDesktop.classList.add("arrows-desktop-off");
		if (!query) {
			getSmallProjectsContTitle.style.left = `-${(912 * Xpos) / 100}px`;
			getSmallProjectsCont.style.left = `-${(912 * Xpos) / 100}px`;
		} else {
			getSmallProjectsCont.style.left = `-${Xpos}vw`;
			getSmallProjectsContTitle.style.left = `-${Xpos}vw`;
		}
		getProjContForDesktop.style.left = `-${Xpos}%`;
	} else {
		getArrowLeftDesktop.classList.remove("arrows-desktop-off");
		Xpos = Xpos - 100;
		if (!query) {
			getSmallProjectsContTitle.style.left = `${(912 * Xpos) / 100}px`;
			getSmallProjectsCont.style.left = `${(912 * Xpos) / 100}px`;
		} else {
			getSmallProjectsCont.style.left = `${Xpos}vw`;
			getSmallProjectsContTitle.style.left = `${Xpos}vw`;
		}
		getProjContForDesktop.style.left = `-${Xpos}%`;
	}
});

////////////////// Refresh page on click "Web development"

let getTitle = document.querySelector("#Description-paragraph");

getTitle.addEventListener("click", () => {
	location.reload();
});
