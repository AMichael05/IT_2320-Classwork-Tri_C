var Home = {}

Home.ProcessModel = function (model)
{
    //console.log(model);

    model.Lumber.forEach(showLumber);

    function showLumber(item, index)
    {
        console.log(item);

        $("#display").append($("<div></div>").text("Species: " + item.species).addClass("text"));
        $("#display").append($("<div></div>").text("Width: " + item.width).addClass("text"));
        $("#display").append($("<div></div>").text("Length: " + item.len).addClass("text"));
        $("#display").append($("<div></div>").text("Height: " + item.height).addClass("text"));
        $("#display").append($("<div></div><br/>").text("Price: " + item.price).addClass("text"));
    }


    /*
    for (var i = 0; i < model.People.length; i++)
    {
        var person = model.People[i];

        $("#output").append($("<div></div>").text(person.Name).addClass("text"));
        $("#output").append($("<div></div>").text(person.Age).addClass("text"));

        for (var j = 0; j < person.Children.length; j++)
        {
            var child = person.Children[j];

            $("#output").append($("<div></div>").text(child.Name).addClass("text"));
            $("#output").append($("<div></div>").text(child.Age).addClass("text"));
        }
    }
    */
}