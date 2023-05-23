(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $('.navbar .dropdown').on('mouseover', function () {
          $('.dropdown-toggle', this).trigger('click');
        }).on('mouseout', function () {
          $('.dropdown-toggle', this).trigger('click').blur();
        });
      } else {
        $('.navbar .dropdown').off('mouseover').off('mouseout');
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });


  // Date and time picker
  $('.date').datetimepicker({
    format: 'L'
  });
  $('.time').datetimepicker({
    format: 'LT'
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

})(jQuery);


/*----------------------*/
/* Back to top button */

/* Tentativa de log in*/
function store() {

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.value.length == 0) {
    alert('Please fill in email');

  } else if (password.value.length == 0) {
    alert('Please fill in password');

  } else if (email.value.length == 0 && password.value.length == 0) {
    alert('Please fill in email and password');

  } else {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    alert('Your account has been created');
  }
}

//checking
function check() {
  var storedName = localStorage.getItem('email');
  var storedPw = localStorage.getItem('password');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  var userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    alert('You are logged in.');
  } else {
    alert('Error on login');
  }
}

/* End login*/

/* local storage cidades*/
let listaCidades = JSON.parse(localStorage.getItem("cidades"));

listaCidades.forEach(cidade => {
  let html = '<div class="col-md-4 mb-4"> ' +
    '<div class="destination-item position-relative overflow-hidden mb-2">' +
    '<img class="img-fluid" src=" ' + cidade.imagem1 + ' " alt="">' +
    '<a class="destination-overlay text-white text-decoration-none" href="">' +
    '<h3 class="text-white"> ' + cidade.nome + ' </h4>' +
    '</a>' +
    '</div>' +
    '</div>';

  document.getElementById("listaCidades").innerHTML += html;
  //console.log(atividade.nome);
});




    //console.log(lista);
    //document.getElementById("maritmos").innerHTML = lista;
    //document.getElementById("maritmos").innerHTML
/* end local storage cidades */