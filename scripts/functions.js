//
// window.addEventListener("load", function() {
//
//    document.querySelector('.header-1').classList.add('animation');
//    document.querySelector('.header-2').classList.add('animation');
//    document.querySelector('.header-3').classList.add('animation');
//
//   });

$(window).load( function () {

   document.querySelector('.header-1').classList.add('animation');
   document.querySelector('.header-2').classList.add('animation');
   document.querySelector('.header-3').classList.add('animation');

})

var burger = document.querySelector('.burger');

burger.addEventListener('click', hoverBurger);

function hoverBurger() {
  if (burger.classList.contains('is-open')) {
    $('.burger').removeClass('is-open');

    var kicker = document.querySelector('.kicker');
    $('.kicker').css('height', '0px');

    $('.kicker nav a').css({
      color:'transparent',
      top:'90px'
    });

  } else if (!burger.classList.contains('is-open')) {
    $('.burger').addClass('is-open');

    var kicker = document.querySelector('.kicker');
    $('.kicker').css('height', '90px');

    $('.kicker nav a').css({
      color: 'white',
      top: '0px'
    });
  }
}

$(function () {

$('.img-1').on('mouseover', posit);
$('.img-1').on('mouseleave', changeColor);

function posit() {
  $('.before').css('background', '#e9913f');
};

function changeColor() {
  $('.before').css('background', 'transparent');
};



$('.img-2').on('mouseover', posit_1);
$('.img-2').on('mouseleave', changeColor_2);

function posit_1() {
  $('.before').css('background', 'white');
};

function changeColor_2() {
  $('.before').css('background', 'transparent');
};


$('.img-3').on('mouseover', posit_2);
$('.img-3').on('mouseleave', changeColor_3);

function posit_2() {
  $('.before').css('background', 'rgb(134, 57, 175)');
};

function changeColor_3() {
  $('.before').css('background', 'transparent');
};

$('.img-4').on('mouseover', posit_3);
$('.img-4').on('mouseleave', changeColor_4);

function posit_3() {
  $('.before').css('background', 'rgb(158, 133, 152)');
};


function changeColor_4() {
  $('.before').css('background', 'transparent');
};
// $('.before').on('mouseover', transp);
//
// function transp() {
//   $('.before').css('background', 'transparent');
// };

});

//
// $(function () {
//   $('.inp').on('input', addRow);
//
//   function addRow() {
//
//   var text =   $('.inp')
//
//     if (text.val().length < 50) {
//
//       $('.underline_2').remove();
//
//     } else if (text.val().length == 50 && text.val().length < 51) {
//
//       text.attr('rows','3');
//
//       $('.mailWrapper').append('<div class="underline_2"></div>');
//
//
//     };
//
//   };
//
// })


$(function () {

$('.letter, .fore-ground').on('mouseover', letterUp);
$('.letter, .fore-ground').on('mouseout', letterDown);

function letterUp() {

$('.letter').css({

top: '100px'

});

};

function letterDown() {

$('.letter').css({

top: '150px'

});

};




});

$(function () {
  $('.cont:eq(0)').hide();
})


$(function () {
$('.cont:eq(1)').on('click', moveTech);
$('.cont:eq(0)').on('click', moveBack);

  function moveTech() {

    $('.langs').css('left', '0%');
    $('.tech-bg').css({
      left: '-40%',
      transition: '1500ms'
    });

    $('.cont:eq(1)').hide();
    $('.cont:eq(0)').show();


  }

  function moveBack() {

    $('.langs').css('left', '40%');
    $('.tech-bg').css({
      left: '0px',
      transition: '500ms'

    });
      $('.cont:eq(0)').hide();
      $('.cont:eq(1)').show();

  };


});




// function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
