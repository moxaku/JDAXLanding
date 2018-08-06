  var slideIndex_1 = 1;
  showSlides_1(slideIndex_1);

  function plusSlides_1(n) {
      showSlides_1(slideIndex_1 += n);
  }

  function currentSlide_1(n) {
      showSlides_1(slideIndex_1 = n);
  }

  function showSlides_1(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides_1");
      var dots = document.getElementsByClassName("dot_1");
      var steps = document.getElementsByClassName("step_1");
      if (n > slides.length) {
          slideIndex_1 = 1
      }
      if (n < 1) {
          slideIndex_1 = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      for (i = 0; i < steps.length; i++) {
          steps[i].className = steps[i].className.replace(" active", "");
      }
      slides[slideIndex_1 - 1].style.display = "block";
      dots[slideIndex_1 - 1].className += " active";
      steps[slideIndex_1 - 1].className += " active";
  }