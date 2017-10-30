// See tocify documentation here: http://gregfranko.com/jquery.tocify.js
$(document).ready(function(){
    $("#toc").tocify({
        selectors: "h2, h3",
        scrollTo: 60
    });
});

// Adjust and fix toc position
$(document).scroll(function(e) {
    if($(this).scrollTop() > $("#header").height()) {
        $("#toc").css({"position": "fixed", "top": "10%"});
    }
    else {
        $("#toc").css({"position": "absolute", "top": "0"});
    }
});
