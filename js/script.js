$(document).ready(function() {

  var backToTop = $('.back-to-top');

  backToTop.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, "swing" );
  });


  // VSS side bar
$('.viega-select ul li:first').addClass('active');
$('.tab-content:not(:first)').hide();
$('.viega-select ul li a').click(function (event) {
  event.preventDefault();
  var content = $(this).attr('href');
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  // $(content).fadeIn(0);
  $(content).show();
  $(content).siblings('.tab-content').hide();
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

});
