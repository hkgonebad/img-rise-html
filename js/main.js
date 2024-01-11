document.addEventListener("DOMContentLoaded", yall);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");
var body = document.body;

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        body.classList.add("sticky");
    } else {
        body.classList.remove("sticky");
    }
}

//
new WOW().init();

//
$.parallaxify();

/////////////////////////////////////

///////////////////////////////////
$(function() {

    // Header
    $( "#header" ).load( "header.html", function() {
        
        // Active
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $('.navbar-nav .nav-link, .navbar-nav .dropdown-item').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });

    //
    if ($('.twoB').length > 0) {
        var waypoint = new Waypoint({
            element: document.getElementById('twoB'),
            handler: function(direction) {
                // console.log(this.id + ' hit');
                $('.twoB').addClass('done');
            },
            offset: '50%'
        })
    }
    

    

    // Main funda
    function timedAnim() {
        $('.animSection .one').addClass('loaded');

        setTimeout(function(){
            $('.animSection .one').addClass('done');
            $('.animSection .two').addClass('loaded');
        }, 2000);

        setTimeout(function(){
            $('.animSection .two').addClass('done');
            $('.animSection .three').addClass('loaded');
        }, 4000);

        setTimeout(function(){
            $('.animSection .three').addClass('done');
            

            $('.comingSoon .container').addClass('loaded');
            $('.slider').addClass('loaded');
        }, 6000);

        setTimeout(function(){
            // $('.animSection').css('z-index','0');
            $('.logo img').addClass('loaded');
        }, 6800);

        setTimeout(function(){
            $('.animSection').css('z-index','0');
            $('.subText').addClass('loaded');
        }, 7500);
    }

    //timedAnim();

    


    // Intro Slider
    if ($('.slickSlider').length > 0) {

        $('.slickSlider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplayDuration: 2000,
            arrows: true,
            lazyLoad: 'ondemand',
            // fade: true,
            
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    //Careers
    if ($('#actual-btn').length > 0) {
        const actualBtn = document.getElementById('actual-btn');

        const fileChosen = document.getElementById('file-chosen');

        actualBtn.addEventListener('change', function(){
            fileChosen.textContent = this.files[0].name
        })
    }


    // Careers Title
    $("#cOpenings").each(function(key){
        var careers = $(this).find('.card-header h2').text();

        console.log(careers);

        $('#careerTitle')
            .append($("<option></option>")
                       .attr("value", key)
                       .text(careers));
    })

    $('.btn-apply').on('click', function(){
        var career = $(this).parents('.card').find('.card-header h2').text();
        console.log(career);

        $('#careerTitle').val(career).change();
    })

    // RiseTalks
    
        // var audioElement = $('.audioFile')[0];
        
        // audioElement.addEventListener('ended', function() {
        //     this.play();
        // }, false);
        
        // audioElement.addEventListener("canplay",function(){
        //     $("#length").text(audioElement.duration);
        //     $("#source").text("Source:" + audioElement.src);
        //     $("#status").text("Status: Ready to play").css("color","green");
        // });
        
        // audioElement.addEventListener("timeupdate",function(){
        //     $("#currentTime").text(audioElement.currentTime);
        // });
        
        // $('.play').click(function() {
        //     audioElement.play();
        //     $("#status").text("Status: Playing");
        // });
        
        // $('.pause').click(function() {
        //     audioElement.pause();
        //     $("#status").text("Status: Paused");
        // });
        
        // $('#restart').click(function() {
        //     audioElement.currentTime = 0;
        // });
    
});


