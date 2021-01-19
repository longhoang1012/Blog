window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        document.getElementById("goTop").style.display = "block";

    } else {
        
        document.getElementById("goTop").style.display = "none";
            }
}

document.getElementById('goTop').addEventListener("click", function(){

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});