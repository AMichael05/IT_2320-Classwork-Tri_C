var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MX = 0;
Main.MY = 0;
Main.Width = 320;
Main.Height = 200;
Main.Selected = 2;

Main.MouseIsDown = false;
Main.IsSpinning = false;

Main.TempMX = 0;
Main.FrameCount = 0;
Main.Velocity = 0;

Main.XOffSet = 0;
Main.XCoordinates = new Array();
Main.XCoordinates[0] = 0;
Main.XCoordinates[1] = 320;
Main.XCoordinates[2] = 640;
Main.XCoordinates[3] = 960;

Main.ImageMultipliers = new Array();
Main.ImageMultipliers[0] = 1;
Main.ImageMultipliers[1] = 1;
Main.ImageMultipliers[2] = 1;
Main.ImageMultipliers[3] = 1;


Main.Img1 = new Image();
Main.Img2 = new Image();
Main.Img3 = new Image();
Main.Img4 = new Image();
Main.Img1.src = "Wallpaper_4.jpg";
Main.Img2.src = "Wallpaper_5.jpg";
Main.Img3.src = "Wallpaper_6.jpg";
Main.Img4.src = "Wallpaper_7.jpg";


Main.Canvas.onmousemove = function(event)
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.MX = mouseX;
	Main.MY = mouseY;
}

Main.MouseUp = function(mouseEvent)
{
	Main.MouseIsDown = false;
	Main.Velocity = (Main.MX - Main.TempMX) / Main.FrameCount * 2;
	Main.Velocity = Math.round(Main.Velocity);
	
	Main.IsSpinning = true;
	Main.TempMX = 0;
	Main.FrameCount = 0;
}

Main.MouseDown = function(mouseEvent)
{
	Main.MouseIsDown = true;
	Main.TempMX = Main.MX;
}

Main.ManageOffset = function()
{
	Main.XOffSet += Main.Velocity;
	if(Main.XOffSet > 960 || Main.XOffSet < -960)
	{ Main.XOffSet = 0; }
	
}
Main.DrawFixed = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);
	
	
	for(let i = 0; i < Main.XCoordinates.length; ++i)
	{
		if(Main.XCoordinates[i] >= 320 && Main.XCoordinates[i] < 640)
		{
			Main.Selected = i;
			Main.ImageMultipliers[i] = 1.1;
			Main.XOffSet = Main.XCoordinates[i] - 320;
		}
		else
		{
			Main.ImageMultipliers[i] = 1;
		}
	}
	for(let i = 0; i < Main.XCoordinates.length; ++i)
	{
		Main.XCoordinates[i] -= Main.XOffSet;
	}
	
	
	Main.Context.drawImage(Main.Img1, Main.XCoordinates[0], 100, Main.Width, Main.Height * Main.ImageMultipliers[0]);
	Main.Context.drawImage(Main.Img2, Main.XCoordinates[1], 100, Main.Width, Main.Height * Main.ImageMultipliers[1]);
	Main.Context.drawImage(Main.Img3, Main.XCoordinates[2], 100, Main.Width, Main.Height * Main.ImageMultipliers[2]);
	Main.Context.drawImage(Main.Img4, Main.XCoordinates[3], 100, Main.Width, Main.Height * Main.ImageMultipliers[3]);
	
	Main.XOffSet = 0;
}

Main.DrawSpin = function()
{
	let position;
	for(let i = 0; i < Main.XCoordinates.length; ++i)
	{
		position = (i * 320) + Main.XOffSet;
		if(position > Main.Canvas.width)
		{
			position -= (Main.Canvas.width + 320);
		}
		else if(position < -320)
		{
			position += (Main.Canvas.width + 320);
		}
		
		Main.XCoordinates[i] = position;
	}
	
	
	Main.Context.drawImage(Main.Img1, Main.XCoordinates[0], 100, Main.Width, Main.Height);
	Main.Context.drawImage(Main.Img2, Main.XCoordinates[1], 100, Main.Width, Main.Height);
	Main.Context.drawImage(Main.Img3, Main.XCoordinates[2], 100, Main.Width, Main.Height);
	Main.Context.drawImage(Main.Img4, Main.XCoordinates[3], 100, Main.Width, Main.Height);
	
}


Main.Animate = function()
{
	Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);
	Main.ManageOffset();
	
	//console.log(Main.Velocity);	
	console.log(Main.XOffSet);	
	
	if(Main.MouseIsDown)
	{
		Main.FrameCount += 1;
	}
	
	if(Main.Velocity > 10)
	{
		Main.Velocity -= 4;
		//Main.XOffSet 
	}
	else if(Main.Velocity < 0)
	{
		Main.Velocity += 4;
	}
	else
	{
		Main.Velocity = 0;
		Main.IsSpinning = false;
	}
	
	if(Main.IsSpinning)
	{
		Main.DrawSpin();
	}
	else
	{
		Main.DrawFixed();
	}	

	requestAnimFrame(function() { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{
	Main.Animate();
	Main.Canvas.addEventListener('mouseup', function(mouseEvent) { Main.MouseUp(mouseEvent); });
	Main.Canvas.addEventListener('mousedown', function(mouseEvent) { Main.MouseDown(mouseEvent); });
});