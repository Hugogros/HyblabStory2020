$(document).ready(function() {

  $("#button-start").click(function(e) {
    bodyScrollLock.clearAllBodyScrollLocks();
    goToByScroll("loading-section", 500);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
    bodyScrollLock.disableBodyScroll(container);
    mouseAnimated.addEventListener('animationend', function() { bodyScrollLock.enableBodyScroll(container); });

    set_music_play("generalMusic");
    set_music_volume("generalMusic", 0.1);
  });

  $(".link-presentation").click(function(e) {
      $(".hamburger-checkbox").prop('checked', false);

    bodyScrollLock.clearAllBodyScrollLocks();
    goToByScroll("presentation-section", 200);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $(".link-menu").click(function(e) {
      $(".hamburger-checkbox").prop('checked', false);

    bodyScrollLock.clearAllBodyScrollLocks();
    goToByScroll("menu-section", 0);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $(".link-figures").click(function(e) {
      $(".hamburger-checkbox").prop('checked', false);

    bodyScrollLock.clearAllBodyScrollLocks();
    goToByScroll("figures-section", 0);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $(".link-contact").click(function(e) {
    $(".hamburger-checkbox").prop('checked', false);

    bodyScrollLock.clearAllBodyScrollLocks();
    goToByScroll("contact-section", 0);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $(".link-credits").click(function(e) {
      $(".hamburger-checkbox").prop('checked', false);

    bodyScrollLock.clearAllBodyScrollLocks();
    goToByScroll("credits-section", 0);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $("#button-start").hover(function() {
    $("#img-start").css("opacity", "1");
  },
  function() {
    $("#img-start").css("opacity", "0");
  });


  /*var video_logo = document.getElementById("video_logo");
  video_logo.play();*/
});
