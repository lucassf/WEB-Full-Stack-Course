$(document).ready(function(){
    $('#carousel').carousel({interval: 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#carousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause').addClass('fa-play');
        }
        else{
            $('#carousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });
    $('#reserveButton').click(function(){
        $("#reserveModal").modal()
    });
    $('#loginButton').click(function(){
        $("#loginModal").modal()
    });
})