$(document).ready(function(){
$("#hide").click(function() {
    $("h1").hide();
});
$("#show").click(function() {
    $("h1").show();
});
});

$(document).ready(function(){
    $(".enter").hover(function(){
        $("p").css("background-color", "blue");
    });
});


