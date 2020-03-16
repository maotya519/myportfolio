// $(function() {
//     let dis = 300;
//     $('.menu').click(function() {
//     $('body').children().animate({'margin-left': '+=' + dis + 'px'}, 200);
//     $('body').css('background', 'rgb(49, 115, 146)');
//     $('header').css('background', 'rgb(49, 115, 146)');
//     $('.head-title').css( 'display', 'none');
//     $('.openmenu').css('display', 'none');
//     dis *= -1;
//     });

//     $('.closemenu').click(function() {
//         $('.head-title').css('display', 'block');
//         $('.openmenu').css('display', 'block');
//         $('body').css('background', '#B3E5FC');
//         $('header').css('background', '#4FC3F7');
//     });
// });

$(function() {
    let flag = true;
    $('.frontend-down').click(function() {
        $('.frontend-slide').slideToggle(200);
        if ( flag === true ) {
            console.log( flag );
            $('.skills-container').css('height', '680px');
            flag = false;
        } else {
            console.log( flag );
            $('.skills-container').css('height', '380px ');
            flag = true;
        }
    });
});
$(function() {
    let flag = true;
    $('.backend-down').click(function() {

        $('.backend-slide').slideToggle(200);
        if ( flag === true ) {
            console.log( flag );
            $('.skills-container').css('height', '680px');
            flag = false;
        } else {
            console.log( flag );
            $('.skills-container').css('height', '380px ');
            flag = true;
        }
    });
});
$(function() {
    let flag = true;
    $('.version-down').click(function() {
        $('.version-slide').slideToggle(200);
        if ( flag === true ) {
            console.log( flag );
            $('.skills-container').css('height', '600px');
            flag = false;
        } else {
            console.log( flag );
            $('.skills-container').css('height', '380px ');
            flag = true;
        }
    });
});
$(function() {
    let flag = true;
    $('.others-down').click(function() {
        $('.others-slide').slideToggle(200);
        if ( flag === true ) {
            console.log( flag );
            $('.skills-container').css('height', '600px');
            flag = false;
        } else {
            console.log( flag );
            $('.skills-container').css('height', '380px ');
            flag = true;
        }
    });
});
