$(document).ready(function () {
  // the body of this function is in assets/js/now-ui-kit.js
  var height = $(window).height() - 105;
  // $('#carouselExampleIndicators').height(height);
  // $('.d-block').height($(window).height(height));
  //   $('.d-block').height($(window).height() - 2.3);
  $('.productsMainDiv').css('display', 'none');
  $('#productsNavHover').hover(function () {
    $('.productsMainDiv').show('slow');
    $('#productsNavHover').addClass('activeSection')
    $('#contactusNavHover').removeClass('activeSection')
    $('#homeNavHover').removeClass('activeSection')
    $('#aboutusNavHover').removeClass('activeSection')
  });
  $('#productsNavHover').on('click', function () {
    // window.location.href = 'file:///Users/evontex/Documents/basicUI/products'
    // window.location.render
    $('.productsMainDiv').show('slow');
    $('#productsNavHover').addClass('activeSection')
    $('#homeNavHover').removeClass('activeSection')
    $('#contactusNavHover').removeClass('activeSection')
    $('#aboutusNavHover').removeClass('activeSection')
  });
  $('#homeNavHover').hover(function () {
    $('.productsMainDiv').hide('slow');
    $('#homeNavHover').addClass('activeSection')
    $('#productsNavHover').removeClass('activeSection')
    $('#contactusNavHover').removeClass('activeSection')
    $('#aboutusNavHover').removeClass('activeSection')
  });
  $('#homeNavHover').on('click',function () {
    $('.productsMainDiv').hide('slow');
    $('#homeNavHover').addClass('activeSection')
    $('#productsNavHover').removeClass('activeSection')
    $('#contactusNavHover').removeClass('activeSection')
    $('#aboutusNavHover').removeClass('activeSection')
  });
  $('#aboutusNavHover').hover(function () {
    $('.productsMainDiv').hide('slow');
    $('#aboutusNavHover').addClass('activeSection')
    $('#productsNavHover').removeClass('activeSection')
    $('#contactusNavHover').removeClass('activeSection')
    $('#homeNavHover').removeClass('activeSection')
  });
  $('#contactusNavHover').hover(function () {
    $('.productsMainDiv').hide('slow');
    $('#contactusNavHover').addClass('activeSection')
    $('#productsNavHover').removeClass('activeSection')
    $('#aboutusNavHover').removeClass('activeSection')
    $('#homeNavHover').removeClass('activeSection')
  });
  $('#acProducts').on('click', function () {
    $('#productsView').fadeIn(2000);
  });

  nowuiKit.initSliders();

  function scrollToDownload() {

    if ($('.section-download').length != 0) {
      $("html, body").animate({
        scrollTop: $('.section-download').offset().top
      }, 1000);
    }
  }
});