function imageEnlarge(img)
{
	img.className = "image-large";
}
function imageShrink(img)
{
	img.className = "galery-link-image";
}


/*
Causes main title heading to move out of place

function logoEnlarge(img)
{
	img.className = "logo-large";
}
function logoShrink(img)
{
	img.className = "logo";
}
*/



/*
Future update, use a looping addEventListener to add grow & shrink functions to all images through JavaScript

var images = document.getElementByClassName("galery-link-image");

for(var i = 0; i < images.length; ++i)
{
	images[i].addEventListener("onmouseover", imageEnlarge(images[i]));
	images[i].addEventListener("onmouseout", imageShrink(images[i]));
}
*/



/*
Had trouble gettign and setting element properties height & width

function imageEnlarge(img)
{
	var width = this.width;
	var height = this.height;
	
	this.style.width = "200px";
	//this.height = height * 2;
}
function imageShrink(img)
{
	var width = this.width;
	var height = this.height;
	
	this.width = width / 2;
	this.height = height / 2;
}
*/