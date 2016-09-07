$(document).ready(function() {


    var blockList_1 = $("#ContentBlockList_1"); //document.getElementById("ContentBlockList_1")
    var slides = $(".slides"); //document.getElementsByClassName("slides");
    var slide = $(".slide"); //document.getElementsByClassName("slides")
    sizeSlides();
    $(window).resize(function() {
        //js: window.onresize = function a(){};
        //var win_width = $(window).width();
        sizeSlides();

    });

    function sizeSlides() {
        //var win_width = $(window).width();
        var win_width = $(window).width();
        //将win_width的定义放在内部而不是document.ready一开始的地方是因为再resize的时候也要用到，如果定义在外部的话，sizeslides（）用到的win_width就永远是最初的哪个数值了

        //指定blocklist高度
        blockList_1.css({
            width: win_width + "px",
            height: win_width * 0.4 + "px",
        });

        //定位每个图片的位置
        var slideIndex = {
            index: 0,
            count: function() {
                this.index++
            }
        }
        slide.each(function(i) {
            $(this).css({
                left: win_width * slideIndex.index + "px",
                "max-width": win_width + "px"
            });
            slideIndex.count();
        });
        //因为li的height设置为100%，所以要防止每个li充满ul，那样img会被拉伸(因为图片的height也为100%)
        //slide.css("max-width", win_width + "px");
        //$(".slide").find("img").css("max-width", win_width + "px");

        //设置ul的宽度为所有图片加起来的宽度
        slides.css({
            width: win_width * slideIndex.index,

        });

    }

    //定时轮播图片




});