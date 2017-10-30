$(document).ready(function(){
    $("#toc").tocify({
        selectors: "h2, h3"
    });
});

$(document).scroll(function(e) {
    if($(this).scrollTop() > $("#header").height()) {
        $("#toc").css({"position" : "fixed", "top" : "10%"});
    }
    else {
        $("#toc").css({"position" : "absolute", "top": "0"});
    }
});
