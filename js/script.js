const calculator = {
  "product": {
    "tShirt_1": {
      "xs": {
        "color_1": 69,
        "color_2": 65,
        "color_3": 60,
        "color_4": 79,
        "color_5": 68,
      },
      "s": {
        "color_1": 84,
        "color_2": 84,
        "color_3": 83,
        "color_4": 81,
        "color_5": 80,
      },
      "m": {
        "color_1": 98,
        "color_2": 88,
        "color_3": 85,
        "color_4": 85,
        "color_5": 97,
      },
      "xl": {
        "color_1": 93,
        "color_2": 93,
        "color_3": 93,
        "color_4": 93,
        "color_5": 93,
      },
      "xxl": {
        "color_1": 123,
        "color_2": 124,
        "color_3": 125,
        "color_4": 126,
        "color_5": 127,
      },
    },
    "tShirt_2": {
      "xs": {
        "color_1": 120,
        "color_2": 125,
        "color_3": 121,
        "color_4": 131,
        "color_5": 126,
      },
      "s": {
        "color_1": 84,
        "color_2": 84,
        "color_3": 83,
        "color_4": 81,
        "color_5": 80,
      },
      "m": {
        "color_1": 98,
        "color_2": 88,
        "color_3": 85,
        "color_4": 85,
        "color_5": 97,
      },
      "xl": {
        "color_1": 93,
        "color_2": 93,
        "color_3": 93,
        "color_4": 93,
        "color_5": 93,
      },
      "xxl": {
        "color_1": 123,
        "color_2": 124,
        "color_3": 125,
        "color_4": 126,
        "color_5": 127,
      },
    },
    "tShirt_3": {
      "xs": {
        "color_1": 96,
        "color_2": 75,
        "color_3": 60,
        "color_4": 79,
        "color_5": 68,
      },
      "s": {
        "color_1": 84,
        "color_2": 84,
        "color_3": 83,
        "color_4": 81,
        "color_5": 80,
      },
      "m": {
        "color_1": 98,
        "color_2": 88,
        "color_3": 85,
        "color_4": 85,
        "color_5": 97,
      },
      "xl": {
        "color_1": 93,
        "color_2": 93,
        "color_3": 93,
        "color_4": 93,
        "color_5": 93,
      },
      "xxl": {
        "color_1": 123,
        "color_2": 124,
        "color_3": 125,
        "color_4": 126,
        "color_5": 127,
      },
    },
    "tShirt_4": {
      "xs": {
        "color_1": 59,
        "color_2": 65,
        "color_3": 60,
        "color_4": 79,
        "color_5": 68,
      },
      "s": {
        "color_1": 34,
        "color_2": 84,
        "color_3": 83,
        "color_4": 81,
        "color_5": 80,
      },
      "m": {
        "color_1": 68,
        "color_2": 88,
        "color_3": 85,
        "color_4": 85,
        "color_5": 97,
      },
      "xl": {
        "color_1": 93,
        "color_2": 93,
        "color_3": 93,
        "color_4": 93,
        "color_5": 93,
      },
      "xxl": {
        "color_1": 123,
        "color_2": 124,
        "color_3": 125,
        "color_4": 126,
        "color_5": 127,
      },
    },
  }
};

$(document).ready(function () {
  $("form.cardTShirt").change(function () {
    var brandName = $("input[name='product']", this).val(),
      size = $("input[name='sizes']:checked", this).val(),
      color = $("input[name='colors']:checked", this).val(),
      calculationPrice = 0;

    calculationPrice += calculator.product[brandName][size][color];

    var d = $(".catalog__price", this),
      calculatorPriceNew = $(".price", this);
    d.addClass("animated faster pulse");
    d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
      d.removeClass("animated faster pulse")
    });

    brandName = 0 < calculatorPriceNew.data("animateFrom") ? calculatorPriceNew.data("animateFrom") : 0;

    $({ animateNumber: brandName }).animate({ animateNumber: calculationPrice }, {
      duration: 800, step: function (brandName) {
        calculatorPriceNew.text(Number(brandName).toFixed());
      },
      complete: function () {
        calculatorPriceNew.data("animateFrom", Number(calculationPrice).toFixed())
      }
    })
  });
  $("form.cardTShirt").change()

});

function changeImageSrc_1(anything) {
  document.querySelector('#cardImg_1').src = anything;
};
function changeImageSrc_2(anything) {
  document.querySelector('#cardImg_2').src = anything;
};
function changeImageSrc_3(anything) {
  document.querySelector('#cardImg_3').src = anything;
};
function changeImageSrc_4(anything) {
  document.querySelector('#cardImg_4').src = anything;
};