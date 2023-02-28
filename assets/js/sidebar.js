$(document).ready(function(){
    let sidebar = $(".sidebar");
    let bars = $(".bars");
    let hide = $(".hide");

    bars.click(function(){
        sidebar.css("transform", "matrix(1, 0, 0, 1, 0, 0)");
        $(this).css("opacity", "0");
        $(this).css("pointer-events", "none");
        hide.css("opacity", "1");
        hide.css("pointer-events", "unset");
    })

    hide.click(function(){
        sidebar.css("transform", "matrix(1, 0, 0, 1, -206, 0)");
        $(this).css("opacity", "0");
        $(this).css("pointer-events", "none");
        bars.css("opacity", "1");
        bars.css("pointer-events", "unset");
    })
})