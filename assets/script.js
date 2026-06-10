const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentslide = 0;
let img = document.querySelector(".banner-img")
let tagline = document.querySelector("#banner p")
console.log(img)

/*flèche droite*/
let arrow_right = document.getElementById("arrow_right")

arrow_right.addEventListener("click",() => {
	if (currentslide < slides.length -1){
		
	let dotselect = document.querySelector(".dot_selected")
	dotselect.classList.remove("dot_selected")
	currentslide ++;

	let nextslide = document.getElementById(currentslide)
	console.log(currentslide, nextslide)
	nextslide.classList.add("dot_selected")
	img.src =`./assets/images/slideshow/${slides[currentslide].image}`
	tagline.innerHTML = slides[currentslide].tagLine
	}

	else{
		currentslide = 0;
		let dotselect = document.querySelector(".dot_selected")
		dotselect.classList.remove("dot_selected")
		let nextslide = document.getElementById(currentslide)
		console.log(currentslide, nextslide)
		nextslide.classList.add("dot_selected")
		img.src =`./assets/images/slideshow/${slides[currentslide].image}`
		tagline.innerHTML = slides[currentslide].tagLine
	}
})
/*flèche droite*/





/* flèche gauche*/
let arrow_left = document.getElementById("arrow_left")

arrow_left.addEventListener("click",() => {
	if (currentslide > 0){
		
	let dotselect = document.querySelector(".dot_selected")
	dotselect.classList.remove("dot_selected")
	currentslide --;

	let nextslide = document.getElementById(currentslide)
	console.log(currentslide, nextslide)
	nextslide.classList.add("dot_selected")
	img.src =`./assets/images/slideshow/${slides[currentslide].image}`
	tagline.innerHTML = slides[currentslide].tagLine
}


	else{
		currentslide = slides.length -1;
		let dotselect = document.querySelector(".dot_selected")
		dotselect.classList.remove("dot_selected")
		let nextslide = document.getElementById(currentslide)
		console.log(currentslide, nextslide)
		nextslide.classList.add("dot_selected")
		img.src =`./assets/images/slideshow/${slides[currentslide].image}`
		tagline.innerHTML = slides[currentslide].tagLine
	}
})
/*flèche gauche*/




/* bullet point*/
let dotsContainer = document.querySelector(".dots");
if (dotsContainer) { 
    slides.forEach((_ ,index) => {
        let dot = document.createElement("div"); 
        dot.classList.add("dot");
		dot.id = index;
        if (index === 0) dot.classList.add("dot_selected");
        dotsContainer.appendChild(dot); 
	
    });
}
/* bullet point*/



