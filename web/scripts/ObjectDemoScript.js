var DemoMain = {};

DemoMain.Lumber = function (length, width, height, species)
{
	this.Length = length;
	this.Width = width;
	this.Height = height;
	this.Name = species;
	
	this.Prices = [3.00, 2.00, 2.50];
	this.WoodTypes = ["Walnut", "Maple", "Oak"];
}

DemoMain.Lumber.prototype.CalculateBoardFeet = function()
{
	return (this.Length * this.Width * this.Height) / 144.0;
}

DemoMain.Lumber.prototype.CalculatePrice = function()
{
	var speciesIndex = this.WoodTypes.indexOf(this.Name);
	
	var price = this.Prices[speciesIndex];
	var total = ((this.Length * this.Width * this.Height) / 144 * price);
	
	return total;
}

DemoMain.LumberOrder = new DemoMain.Lumber(60, 6, 1, "Walnut");

DemoMain.amount = DemoMain.LumberOrder.CalculateBoardFeet();
DemoMain.price = DemoMain.LumberOrder.CalculatePrice();


document.getElementById("output1").innerHTML = DemoMain.amount;
document.getElementById("output2").innerHTML = DemoMain.price;
document.getElementById("output3").innerHTML = DemoMain.LumberOrder.Name;


console.log("amount");
console.log(DemoMain.amount);
console.log("price");
console.log(DemoMain.price);