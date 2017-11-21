$(document).ready(function ()
{
    var box = $(".box");
    var position;
	var speed;
	var lastClass = "";
	
	

    $(".box").on("click", function(){
		if($(this).hasClass("catch"))
		{
			box.removeClass("catch");
			box.addClass("clicked");
			box.html("Congratulations!");
		}
    });
	
	$(".box").on("mouseover", function()
	{
		if($(this).hasClass("catch"))
		{
			position = Math.floor(Math.random() * 7) +1;
			speed = Math.floor(Math.random() * 250);
			
			console.log(position);
			console.log(speed);
			
			
			setTimeout(moveBox, speed);
			
			function moveBox(){
				console.log("moveBox");
				
				switch(position){
				case 1:
					box.addClass("pos1");
					box.removeClass(lastClass);
					lastClass = "pos1";
					break;
					
					
				case 2:
					box.addClass("pos2");
					box.removeClass(lastClass);
					lastClass = "pos2";
					break;
					
					
				case 3:
					box.addClass("pos3");
					box.removeClass(lastClass);
					lastClass = "pos3";
					break;
					
					
				case 4:
					box.addClass("pos4");
					box.removeClass(lastClass);
					lastClass = "pos4";
					break;
					
					
				case 5:
					box.addClass("pos5");
					box.removeClass(lastClass);
					lastClass = "pos5";
					break;
					
					
				case 6:
					box.addClass("pos6");
					box.removeClass(lastClass);
					lastClass = "pos6";
					break;
					
					
				case 7:
					box.addClass("pos7");
					box.removeClass(lastClass);
					lastClass = "pos7";
					break;
					
					
				case 8:
					box.addClass("pos8");
					box.removeClass(lastClass);
					lastClass = "pos8";
				}
			}
		}
		
	});
});