  var slideIndex_3 = 1;
  showSlides_3(slideIndex_3);

  function plusSlides_3(n) {
      showSlides_3(slideIndex_3 += n);
  }

  function currentSlide_3(n) {
      showSlides_3(slideIndex_3 = n);
  }

  function showSlides_3(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides_3");
      var dots = document.getElementsByClassName("dot_3");
      var steps = document.getElementsByClassName("step_3");
      if (n > slides.length) {
          slideIndex_3 = 1
      }
      if (n < 1) {
          slideIndex_3 = slides.length
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
      slides[slideIndex_3 - 1].style.display = "block";
      dots[slideIndex_3 - 1].className += " active";
      steps[slideIndex_3 - 1].className += " active";
  }