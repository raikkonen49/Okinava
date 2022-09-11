$(document).foundation();

$(document).ready(function() {

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked:false
            }
        },
        beforeShow: function(){
          $(".fancybox-skin").css("backgroundColor","transparent");
          $(".fancybox-skin").css("padding","0px");
        }
    });

    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

    $(".hamburger").click(function() {
        $(".mb-nav").toggleClass("close");
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
    })

    var owl2 = $('#partners-slider');
    $('.partners-slider-next').click(function() {
    owl2.trigger('next.owl.carousel');
    });

    $('.partners-slider-previous').click(function() {
    owl2.trigger('prev.owl.carousel');
    });


    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });


    $('.flex-prev').text('');
    $('.flex-next').text('');


    $(".foto-more").click(function() {
        $(this).parent().parent().find('.flex-control-thumbs').addClass("close");
        $(this).hide(200);
    });

    $(".video-more").click(function() {
        $(".media-list").toggleClass("close");
        $(this).hide(200);
    });

     $(".player").YTPlayer();


    // #href scroll //

    $('.school-list a, .lapbelts ul li a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });

 });
