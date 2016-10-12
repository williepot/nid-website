function hideAll() {
    $('.anim-1').hide();
}

function anim_1() {
    $('.anim-1').delay(500).fadeIn(2000, function() {     
        $('.anim-1').delay(4500).fadeOut(2000);
    });
}

function anim_2() {
    $('.anim-2').delay(500).fadeIn(2000, function() {     
        $('.anim-2').delay(4500).fadeOut(2000);
    });
}

function anim_2_1() {
    $('.anim-2-1').delay(1000).fadeIn(1000, function() {     
        $('.anim-2-1').animate({left: '60%'}, "slow", function() {
            $('.anim-2-1').delay(3500).fadeOut(2000, function() {
                $('.anim-2-1').animate({left: '0%'}, "fast");
            });
        });
    });
}

function anim_3() {
    $('.anim-3').delay(500).fadeIn(2000, function() {     
        $('.anim-3').delay(4500).fadeOut(2000);
    });
}

$(document).ready(function main() {
    $('.anim-1').hide();
    $('.anim-2-1').hide();
    $('.anim-2').hide();
    $('.anim-3').hide();
    anim_1();
    
    $('#headingSubTAG').hide();
    $('#headingTAG').hide().fadeIn(3000);
    $('#headingTAG').effect("bounce", "slow");
    $('#headingSubTAG').fadeIn(3000);

    $("#myCarousel").on('slid.bs.carousel', function () {
        
        anim_1();
        anim_2_1();
        anim_2();
        anim_3();
   
    });
    
});


