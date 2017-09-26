window.onload = function()
{
	var images = document.getElementsByClassName("galery-link-image");


	
	console.log("LOGGING");
	console.log(images[0]);

	for(var i = 0; i < images.length; ++i)
	{
		images[i].addEventListener("mouseover", imageEnlarge);
		images[i].addEventListener("mouseout", imageShrink);
	}
}



function imageEnlarge(event)
{
	event.target.className = "image-large";
}
function imageShrink(event)
{
	event.target.className = "galery-link-image";
}







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