var animationDots = bodymovin.loadAnimation({
   container: document.getElementById('dots'),
   renderer: 'svg',
   autoplay: true,
   path: "js/anim/dots.json"
});
animationDots.setSpeed(2);

var animationFume = bodymovin.loadAnimation({
   container: document.getElementById('anim'),
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: "js/anim/smok_bull.json"
})

$(document).ready(function(){
   tabShow();
   mobBurger();
   mobPerson();
   tab();
   sliderTabs();
   showPassword();
});

function tabShow() {
   $(".tab__content").addClass('tab-show');
}

function mobBurger() {
   $(".header__burger").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-burger')) {
            $parent.removeClass('mob-burger');
         } else {
            $parent.addClass('mob-burger');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__burger").length) {
         if ($(".header").hasClass("mob-burger")) {
            $(".header").removeClass("mob-burger");
         }
      }
   });
}

function mobPerson() {
   $(".header__person").on('click', function () {
         var $parent = $(".header");
         if ($parent.hasClass('mob-person')) {
            $parent.removeClass('mob-person');
         } else {
            $parent.addClass('mob-person');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".header__person").length) {
         if ($(".header").hasClass("mob-person")) {
            $(".header").removeClass("mob-person");
         }
      }
   });
}

function tab() {
   if($(window).width() > 480) {
      $(".tab__info").not(":first").hide();
      $(".tab .tab__item").click(function() {
         $(".tab .tab__item").removeClass("tab__item_active").eq($(this).index()).addClass("tab__item_active");
         $(".tab__info").hide().eq($(this).index()).fadeIn();
      });
   }
}

function sliderTabs() {
   if($(window).width() <= 480) {
      $('.tab__control').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,               
         dots: false,
         arrows: false,
         centerMode: true,
         variableWidth: true,
         focusOnSelect: true,
         asNavFor: '.tab__content'
      });
      $('.tab__content').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,               
         dots: false,
         arrows: false,
         asNavFor: '.tab__control'
      });
   }
};

function showPassword() {
   $('.password-open').click(function() {
      if($(this).prev().attr('type') == 'text') {
         $(this).prev().attr('type','password');
      }
      else {
         $(this).prev().attr('type','text');
      }
   });
};