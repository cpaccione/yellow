$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    anchors: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fiveSlide'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fiveSlide'],

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: false,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    touchSensitivity: 6,
    normalScrollElementTouchThreshold: 5,
    normalScrollElements : '.rest-of-site',

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
  });


  var vid = document.getElementById('video');
  vid.pause();
  
  
  window.onscroll = function() {
    vid.pause();
  };
  
  setInterval(function() {
    vid.currentTime = $(document).scrollTop() / 550;
  }, 40);



//   var vid = document.getElementById('video');
//   vid.pause();

//   window.onscroll = function() {
//   vid.play();
//   setTimeout(function(){
//   vid.pause();

// }, 5000);
//   }


});
