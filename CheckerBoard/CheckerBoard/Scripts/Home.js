$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    //  *   *   *   *   *   *   *   *   *   *   *   *

    var hasSelected = false;

    $(".cell").on("click", function(){
        if(!(hasSelected))
        {
            //first piece selection
            if ($(this).hasClass("piece"))
            {
                hasSelected = true;
                $(this).addClass("selected");
                $(this).css("border-color", "red");
            }
        }
        else if($(this).hasClass("selected"))
        {
            //one piece is selected, same piece is clicked again

            hasSelected = false;
            $(this).removeClass("selected");
            $(this).css("border-color", "black");
        }
        else
        {
            //one piece is selected, different piece is clicked

            hasSelected = false;
            if ($(".selected").hasClass("red"))
            {
                $(this).removeClass("black").removeClass("empty").addClass("piece").addClass("red");
            }
            else
            {
                $(this).removeClass("red").removeClass("empty").addClass("piece").addClass("black")
            }

            $(".selected").removeClass("piece").removeClass("red").removeClass("black").css("border-color", "black").removeClass("selected").addClass("empty");
        }
    });
});