$(document).ready(function(){
    let buttons = $("a");
    let contents = $("p");

    buttons.click(function(e){
        e.preventDefault();

        for (const button of buttons) {
            if ($(this).attr("data-id") == $(button).attr("data-id")) {
                $(button).css("background-color", "rgb(0, 0, 0)");
            }
            
            else {
                $(button).css("background-color", "rgba(0, 0, 0, 0)");
            }
        }

        for (const content of contents) {
            if ($(this).attr("data-id") == $(content).attr("data-id")) {
                $(content).show(400);
            }

            else {
                $(content).hide(400);
            }
        }
    })
})