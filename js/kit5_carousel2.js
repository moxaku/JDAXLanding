  var slideIndex_2 = 1;
  showSlides_2(slideIndex_2);

  function plusSlides_2(n) {
      showSlides_2(slideIndex_2 += n);
  }

  function currentSlide_2(n) {
      showSlides_2(slideIndex_2 = n);
  }

  function showSlides_2(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides_2");
      var dots = document.getElementsByClassName("dot_2");
      var steps = document.getElementsByClassName("step_2");
      if (n > slides.length) {
          slideIndex_2 = 1
      }
      if (n < 1) {
          slideIndex_2 = slides.length
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
      slides[slideIndex_2 - 1].style.display = "block";
      dots[slideIndex_2 - 1].className += " active";
      steps[slideIndex_2 - 1].className += " active";
  }