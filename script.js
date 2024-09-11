$(Window).on('scroll', function () {
    if ($(Window).scrollTop()) {
        $('nav').addClass('purple');
    }
    else {
        $('nav').removeClass('purple')
    }
});
// $('.slider').slick({
//   centerMode: true,
//   dots: true,
//   autoplay: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [{
//     breakpoint: 768,
//     settings: {
//       arrows: false,
//       centerMode: true,
//       centerPadding: '40px',
//       Infinity: true,
//       slidesToShow: 1
//     },
//   }]
// });
// reservation form plugin 
$( document ).ready(function() {
  $("#booking").validate({
      rules:{
      name:{
         minlength:2
      },
      email:{
          required:true,
         email:true
      },
     dob:"required",
     people:"required",
     mobile:{
      required:true,
      digits:true,
     }
      },
      messages:{
        name:{
            required:"please enter your name",
            minlength:"name at least 2 characters"
        },
        email:"please enter your email",
        dob:"please enter reserved date",
        peopple:"plesase enter number of people",
        mobile:"please enter correct number",
      },



      submitHandler: function(form) {
        form.submit();
      }
     });
});
// contact us
$( document ).ready(function() {
  $("#query").validate({
      rules:{
      fullname:{
         minlength:2
      },
      subject:"required"
      },
      messages:{
        name:{
            required:"please enter your name",
            minlength:"name at least 2 characters"
        },
        subject:"please enter your email",
      },



      submitHandler: function(form) {
        form.submit();
      }
     });
    });
    // faqs
    $(document).ready(function () {
      $("#faqs").accordion({
      } );
  })
  // Menu
  $(document).ready(function() {
    $('input[name="filter"]').on('change', function() {
        var filterValue = $(this).val();
        
        if (filterValue === 'all') {
            $('.card').show();
        } else {
            $('.card').hide();
            $('.' + filterValue).show();
        }
    });
});
// blog
$('.slider').slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesToShow: 1
    },
  }]
});
// Add to Card
    $( document ).ready(function() {
        $("#addcartfood").validate({
            rules:{
            name:{
               minlength:2
            },
            email:{
                required:true,
               email:true
            },
            address:"required",
            city:"required",
            state:"required",
            zipcode:{
                zipcode:true,
                maxlength:5
            },
            cardnumber:{
                cardnumber:required,
                minlength:8
            },
            expmonth:"required",
            expyear:"required",
            cvv:"required"
            },
            messages:{
              name:{
                  required:"please enter your name",
                  minlength:"name at least 2 characters"
              },
              email:"please enter your email",
              address:"please enter your address",
              city:"your city name",
              state:" please select your state",
              zipcode:"please enter zip code",
              cardnumber:"please enter Card Number",
              expmonth:"please enter expire month",
              expyear:"please enter expire year",
              cvv:"Enter your cvv"
            },
    
    
    
            submitHandler: function(form) {
              form.submit();
            }
           });
    });
