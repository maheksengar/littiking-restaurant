$(document).ready(function() {
	 AOS.init();
   AOS.refresh();
	var target = $('.navbar')

if (target !== null) {
  var position = target.position()
  window.addEventListener('scroll', function () {
    var height = $(window).scrollTop()
    if (height > position.top) {
      // target.css('visibility', 'hidden')
      target.removeClass('d-none')
    } else {
      target.addClass('d-none')
      // target.css('visibility', 'visible')
    }
  })
}

$('.anchor-scroll').anchorScroll({
    scrollSpeed: 800, // scroll speed
    offsetTop: 0, // offset for fixed top bars (defaults to 0)
    onScroll: function () { 
      // callback on scroll start
    },
    scrollEnd: function () { 
      // callback on scroll end
    }
 });
 $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

})