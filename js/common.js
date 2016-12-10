
function ourProdAdaptive() {
	$(document).ready(function() {
		ourProdWidth();
	})

	$(window).resize(function() {
		ourProdWidth();
	})

	function ourProdWidth() {
		if($(window).width() >= 1200) {
			$(".ourProducts .specItemHeightAnimate .styleH3").each(function(idx, elem) {
				var t = $(this).text();
				var res = $.trim(t);

				if(res.length >= 22) {
					$(this).parent().css({"width":"70%"});
				}
			})
		} else if ($(window).width() < 1200) {
			$(".ourProducts .specItemHeightAnimate .styleH3").each(function(idx, elem) {
				var t = $(this).text();
				var res = $.trim(t);

				if(res.length >= 22) {
					$(this).parent().css({"width":"100%"});
				}
			})
		}
	}
}

ourProdAdaptive();

/*
если нажата все специалисты то h3 показан
если нет то скрыт
*/
/*
$(".ourProducts .specItem").each(function(idx, elem) {
	var $this = $(this);
	var len = $this.find(".styleH3").text().length;

	console.log(len);

})
*/
function zIndex() {
	$(".specItem").hover(
	function() {
		$(this).find(".specItemHeightAnimate").css({"z-index":"10"});
	}, 
	function() {
		$(this).find(".specItemHeightAnimate").css({"z-index":"1"});
	}

	)
}

zIndex();

function footer(){
	console.log("footer");
  var minheight = (typeof window.outerHeight != 'undefined')?Math.max(window.outerHeight, $(window).height()):$(window).height();
  $("body").css({"padding-bottom": $(".footer").outerHeight() + parseInt($(".footer").css("margin-top")), "min-height": $(window).outerHeight});
}
//resize
$(window).resize(function(){
  footer(); 
});

$(window).ready(function(){
  footer(); 
});


function heightItemsPrice() {
	var myEl = $(".price article .row div"),	
			maxHeight = 0;		

	myEl.each(function() {			
		if($(this).height() > maxHeight)	
			maxHeight = $(this).height();				
	})

	$(myEl).height(maxHeight);
}

heightItemsPrice();


function video() {
	if($(".index").length == 1) {
	  var windowW = $(window).width();
	  if(windowW > 992) {
	    $("<video src='upload/logoanima.mp4' type='video/mp4' autoplay class='videoPreload'></video>").prependTo(".index");
	    $("html").css({"overflow-y":"hidden"});

	    var h = $(".videoPreload").height();

	    $("body").height(h).css({"overflow-y":"hidden"});

	    var myTimeout = setTimeout(function() {
	      $(".videoPreload").fadeOut(2000);
	      $(".wrapper").animate({"opacity":"1"});
	      $("html").css({"overflow-y":"visible"});
	      //$("body").height("auto");
	      if($(".index").length == 1) {
	      	$("html").height("auto").css({"overflow-y":"visible"});
	      }
	    }, 6000);

	  } else {
	    $(".wrapper").animate({"opacity":"1"});
	  }

	  $(".videoPreload").click(function() {
	    $(this).css({"display":"none"});
	    $(".wrapper").animate({"opacity":"1"});
	    if($(".index").length == 1) {
	    	$("html").height("auto").css({"overflow-y":"visible"})
	    	$("body").height("100%");
	  	}
	  })

	}
}
/*
$("html").click(function(event) {
	$("body").height("100%");
})*/

if($(".responsive").length > 0) {
	$('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
}

if($(".slickGallery").length > 0) {

	$('.slickGallery').slick({
		  dots: true,
		  infinite: false,
		  speed: 300,
		  rows: 2,
		  slidesToShow: 6,
		  slidesToScroll: 3,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		  ]
		});
	}

//Автоматическая ротация блока
/*
var rotate = function() {
    var arr = $(".articleRight").children(),
        elem = $(".articleRight"), 
        i = -1,
        start = true;

    return function() {
      if (++i < arr.length && start != false) {
      	arr.removeClass("act");
          arr.eq(i).prev().removeClass("act");
          elem.innerHTML = arr.eq(i).addClass("act");
          $(".articleUl__li").eq(i).click();
          setTimeout( arguments.callee, 2000 );

      } else if (++i > arr.length && start != false) {
      	i = 0; 
      	arr.removeClass("act");
      	arr.eq(i).prev().removeClass("act");
          elem.innerHTML = arr.eq(i).addClass("act");
          $(".articleUl__li").eq(i).click();
          setTimeout( arguments.callee, 2000 );
      }

      $(".articleUl__li").on("mouseenter", function() {
      	start = false;

      $(".articleUl__line").css({"width":"20px"}),
			$(".articleUlFigure").css({"opacity":"0"});
			$(".articleUl__line").css({"background":"silver"});
			$(".articleUl__line", this).css({"background":"#2c6e87"});

			if($(window).width() < 992) {
        		$(".articleUl__line").css({"width":"0px"});
        	}
        })

        $(".articleUl__li").on("mouseleave", function() {
        	$(".articleUl__line").css({"background":"silver"});
        })

    }();
}*/
/*
$(".modal").bind("click", function() {
	if( !$(".modal").hasClass(".in") ){
		start = true;
		rotate();
	}
})*/

var rotate = function() {
  var arr = $(".articleRight").children(),
      elem = $(".articleRight"), 
      i = -1,
      start = true;

  return function() {
  	
    if (++i < arr.length && start != false) {
    	arr.removeClass("act");
        arr.eq(i).prev().removeClass("act");
        elem.innerHTML = arr.eq(i).addClass("act");
        $(".articleUl__li").eq(i).click();
        setTimeout( arguments.callee, 2000 );

    } else if (++i > arr.length && start != false) {
    	i = 0; 
    	arr.removeClass("act");
    	arr.eq(i).prev().removeClass("act");
        elem.innerHTML = arr.eq(i).addClass("act");
        $(".articleUl__li").eq(i).click();
        setTimeout( arguments.callee, 2000 );
    }

    
    if($("body").is(".modal-open")) {
    	start = false;
    }

    $(".dropdown-toggle").click(function() {
    	start = false;
    })
    
    $(".articleUl__li").on("mouseenter", function() {
    	start = false;

	    $(".articleUl__line").css({"width":"20px"}),
			$(".articleUlFigure").css({"opacity":"0"});
			$(".articleUl__line").css({"background":"silver"});
			$(".articleUl__line", this).css({"background":"#2c6e87"});

			if($(window).width() < 992) {
	  		$(".articleUl__line").css({"width":"0px"});
	  	}
    })

    $(".articleUl__li").on("mouseleave", function() {
    	$(".articleUl__line").css({"background":"silver"});
    })
  }();
}

//Анимация появления линии при клике
var funcAnimateWidthLine_min992 = function() {
	var widthWindow = $(window).width();

	if(widthWindow > 1200) {
		$(".articleUl__li").click(function() {
			$(".articleUl__line").css({"width":"20px"}),
			$(".articleUlFigure").css({"opacity":"0"}),
			$(".articleUl__line").css({"background":"silver"});

			$(".articleUl__line", this).animate({"width":"114px"}, {duration: 0}),
			$(".articleUl__line", this).css({"background":"#2c6e87"});
			$(".articleUlFigure", this).animate({"opacity":"1", "width":"10px", "height":"10px"}, {duration: 0})
		})
	} else if (widthWindow < 1200 && widthWindow > 992) {
		$(".articleUl__li").click(function() {
			$(".articleUl__line").css({"width":"20px"}),
			$(".articleUlFigure").css({"opacity":"0"}),
			$(".articleUl__line").css({"background":"silver"});

			$(".articleUl__line", this).animate({"width":"30px"}, {duration: 0}),
			$(".articleUl__line", this).css({"background":"#2c6e87"});
			$(".articleUlFigure", this).animate({"opacity":"1", "width":"10px", "height":"10px"}, {duration: 0})
		})
	} else if (widthWindow < 992) {
		$(".articleUl__li").click(function() {
			$(".articleUl__line").css({"width":"0"}),
			$(".articleUlFigure").css({"opacity":"0"}),
			$(".articleUl__line").css({"background":"silver"});

			$(".articleUl__line", this).animate({"width":"0px"}, {duration: 0}),
			$(".articleUl__line", this).css({"background":"#2c6e87"});
			$(".articleUlFigure", this).animate({"opacity":"1", "width":"10px", "height":"10px"}, {duration: 0})
		})
	}
}

var liTab_a = $(".nav.nav-tabs li a"),
	liInput = $(".nav.nav-tabs li a input");

$(liTab_a).click(function() {
	liInput.removeAttr('checked');
	$(this).find("input").attr('checked','checked');

	$(".checkedRbutton").remove();
	$("<div class='checkedRbutton'></div>").prependTo(this);
})

var newSection = "";
$(".flavor-nav a").click(function() {
	$(".all-flavors").fadeTo(100, 0.10);

	$(".flavor-nav a").removeClass("current");
	$(this).addClass("current");

	newSection = $(this).attr("rel");

	$(".flavor").not("."+newSection).hide();
	$("."+newSection).show();

	$(".all-flavors").fadeTo(200, 1);
})

$('a[rel="all"]').click();

var landingAnimate = function() {
	$(document).ready(function() {
		$(".list")
			.delay(1000)
			.animate(
				{
					"opacity":"1"
				}
			)
		
		$(".amenitiesList img")
			.delay(2100)
			.animate(
				{
					"opacity":"1"
				}
			)
	})
}

var specAnimate = function() {
	$(document).ready(function() {
		$(".specialistItem")
			.delay(600)
			.animate(
				{
					"opacity":"1"
				}
			)
	})
}

//Переключение рыжей иконки в меню
var funcClickMenu768 = function() {
	function funcHoverMeny() {

	//ИКОНКИ МЕНЮ
	$(".navbar-nav li").on("click", function() {		
		$(this).siblings().find("a span").removeClass("caretMyOverLayer");
		$(".caretMy", this).toggleClass("caretMyOverLayer");	
	})

	//УДАЛЕНИЕ РЫЖЕЙ ИКОНКИ ПРИ КЛИКЕ НА DOCUMENT
	$(document).on("click", function() {							
		if($("span")) {
			$("span").removeClass("caretMyOverLayer");
			}
		})
	}

	funcHoverMeny();
}

//АНИМАЦИЯ ПОЯВЛЕНИЯ ПРАВОГО БЛОКА. НАШИ НАПРАВЛЕНИЯ
$(".articleUl__li").on("mouseenter", function() {
	$(".articleRightContent, .articleGirl")
		.animate(
			{
				opacity: .5
			},
			{
				duration: 0
			}
		)
		.animate(
			{
				opacity: 1
			},
			{
				duration: 1000,
				queue: false
			}
		)
})

//АНИМАЦИЯ ЛИНИЙ ПРИ ПРОКРУТКЕ СЛАЙДЕРА REVIEVS
$('#carousel-example-generic_3').on('slide.bs.carousel', function () {
  	$(".revievs .blockLine:first")
		.animate(
			{
				"left": "-254px"
			},
			{
				duration: 0
			}
		)
		.animate(
			{
				"left": "0px"
			},
			{
				duration: 1000,
				queue: false
			}
		)
	$(".revievs .lineBottom")
		.animate(
			{
				"right": "-310px"
			},
			{
				duration: 0
			}
		)
		.animate(
			{
				"right": "0px"
			},
			{
				duration: 1000,
				queue: false
			}
		)
})

//ЗАМЕНА КОНТЕНТА В БЛОКЕ СПРАВА ПРИ :HOVER
function replaceContent() {	
	$(".articleUl").each(function() {					
		var $this = $(this);							

		$this.find(".articleUl__li").eq(0).addClass("act");				
		$(".articleRightContent").eq(0).addClass("act");		

		$this.find(".articleUl__li").mouseenter(function() {	
			if(!$(this).hasClass("act")) {					
				$this.find(".articleUl__li").removeClass("act");		
				$(this).addClass("act");					

				$(".articleRightContent").removeClass("act");	
				$(".articleRightContent").eq($(this).index()).addClass("act");	
			}
			return false;
		})
	})
}

//ПЕРЕНОС КНОПОК ПО DOM
var adaptive = function() {
	var windowWidth = $(window).width();
	var specialists__button_topOne = $(".specialists__button_topOne");
	var gellary__button = $(".gallery .specialists__button");
	var reviews__button = $(".revievs .specialists__button");

	if(windowWidth <= 750) {
		specialists__button_topOne.insertAfter(".specialists .style__h2, .specialists .styleH2");
		gellary__button.insertAfter(".gallery .style__h2");
		reviews__button.insertAfter(".revievs .style__h2, .revievs .styleH2");
		console.log("Yes");
	} else {
		specialists__button_topOne.insertBefore(".specialists .style__h2, .specialists .styleH2");
		gellary__button.insertBefore(".gallery .style__h2");
		reviews__button.insertBefore(".revievs .style__h2, .revievs .styleH2");
	}
}

function menuMobile() {
	$(".dropdown").click(function() {
		$(this).siblings().removeClass("dropdownMobile");
		$(this).toggleClass("dropdownMobile");
	})

	$(document).on("click", function() {							
		if($(".dropdownMobile")) {
			$(".dropdownMobile").removeClass("dropdownMobile");
		}
	})
}


var myMap, 
    myPlacemark;

function init() { 
  myMap = new ymaps.Map("map", {
      center: [52.61697075858002,39.562680974868755],
      zoom: 16
  }); 
  
  myPlacemark = new ymaps.Placemark([52.61697075858002,39.562680974868755], {
      hintContent: 'г.Липецк ул.Космонавтов, 42'
  });
  
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

/*
//Проверка формы заказать звонок
var callTest = function() {
	var validName = false,
		validEmail = false,
		validCheckbox = false;

	$(".callForm").submit(function(event) {
		event.preventDefault();

		var name = $(".callForm .formName").val(),
			phone = $(".callForm .phoneForm").val(),
			checkbox = $(".callForm .check");

		if(name == "") {
			$(".callForm .formName").removeClass("has-error").addClass("has-error");
			$(".callForm .divName .myError").remove();
			$(".callForm .divName").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".callForm .formName").removeClass("has-error").addClass("has-success");
			$(".callForm .divName .myError").remove();

			validName = true;
		}

		if(phone == "") {
			$(".callForm .phoneForm").removeClass("has-success").addClass("has-error");
			$(".callForm .divPhone .myError").remove();
			$(".callForm .divPhone").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".callForm .phoneForm").removeClass("has-error").addClass("has-success");
			$(".callForm .divPhone .myError").remove();

			validEmail = true;
		}

		if(checkbox.prop("checked")) {
			validCheckbox = true;
			$("#myDataForm").removeClass("has-error");
		} else {
			validCheckbox = false;
			$("#myDataForm").addClass("has-error");
		}

		if(validName == true && validEmail == true && validCheckbox == true) {
			$(".callForm").unbind("submit").submit();
		}
		
	})
}

//Проверка формы записаться на прием
var receptionTest = function() {
	var validName = false,
		validPhone = false,
		validSpecialization = false,
		validNameSpecialist = false,
		validCheckbox = false;

	$(".formReception").submit(function(event) {
		event.preventDefault();

		var name = $(".formReception .formName").val(),
			phone = $(".formReception .phoneInput").val(),
			specialization = $(".formReception .selSpecialization").val(),
			nameSpecialist = $(".formReception .selNameSpecialist").val(),
			checkbox = $(".formReception .check");

		if(name == "") {
			$(".formReception .formName").removeClass("has-error").addClass("has-error");
			$(".formReception .receptionNameBlock .myError").remove();
			$(".formReception .receptionNameBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".formReception .formName").removeClass("has-error").addClass("has-success");
			$(".formReception .receptionNameBlock .myError").remove();

			validName = true;
		}
		
		if(phone == "") {
			$(".formReception .phoneInput").removeClass("has-success").addClass("has-error");
			$(".formReception .receptionPhoneBlock .myError").remove();
			$(".formReception .receptionPhoneBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".formReception .phoneInput").removeClass("has-error").addClass("has-success");
			$(".formReception .receptionPhoneBlock .myError").remove();

			validPhone = true;
		}

		if(checkbox.prop("checked")) {
			validCheckbox = true;
			$("#myDataReception").removeClass("has-error");
		} else {
			validCheckbox = false;
			$("#myDataReception").addClass("has-error");
		}

		if(validName == true && validPhone == true && validCheckbox == true) {
			$(".formReception").unbind("submit").submit();
		}
		
	})
}

//Проверка формы оставить отзыв
var reviewsTest = function() {
	var validName = false,
		validEmail = false,
		validSpecialization = false,
		validTextArea = false,
		validCheckbox = false;

	$(".reviewsForm").submit(function(event) {
		event.preventDefault();

		var name = $(".reviewsForm .formName").val(),
			email = $(".reviewsForm .forMali").val(),
			textarea = $(".reviewsForm .formTextArea").val(),
			check = $(".reviewsForm .check");

		if(name == "") {
			$(".reviewsForm .formName").removeClass("has-error").addClass("has-error");
			$(".reviewsForm .reviewsFormBlock .myError").remove();
			$(".reviewsForm .reviewsFormBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".reviewsForm .formName").removeClass("has-error").addClass("has-success");
			$(".reviewsForm .reviewsFormBlock .myError").remove();

			validName = true;
		}

		if(email == "") {
			$(".reviewsForm .forMali").removeClass("has-error").addClass("has-error");
			$(".reviewsForm .reviewsEmailBlock .myError").remove();
			$(".reviewsForm .reviewsEmailBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".reviewsForm .forMali").removeClass("has-error").addClass("has-success");
			$(".reviewsForm .reviewsEmailBlock .myError").remove();

			validEmail = true;
		}

		if(textarea == "") {
			$(".reviewsForm .formTextArea").removeClass("has-error").addClass("has-error");
			$(".reviewsForm .reviewsTextAreaBlock .myError").remove();
			$(".reviewsForm .reviewsTextAreaBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".reviewsForm .formTextArea").removeClass("has-error").addClass("has-success");
			$(".reviewsForm .reviewsTextAreaBlock .myError").remove();

			validTextArea = true;
		}

		if(check.prop("checked")) {
			validCheckbox = true;
			$("#myDataQuest").removeClass("has-error");
		} else {
			validCheckbox = false;
			$("#myDataQuest").addClass("has-error");
		}

		if(validName == true && validTextArea == true && validCheckbox == true) {
			$(".reviewsForm").unbind("submit").submit();
		}

	})
}

//Проверка формы спросить у специалиста
var specialistTest = function() {
	var validName = false,
		validEmail = false,
		validTitle = false,
		validTextArea = false,
		validCheckbox = false;

	$(".formSpecialistTest").submit(function(event) {
		event.preventDefault();

		var name = $(".formSpecialistTest .formName").val(),
			email = $(".formSpecialistTest .forMali").val(),
			theme = $(".formSpecialistTest .theme").val(),
			textarea = $(".formSpecialistTest .ta").val(),
			check = $(".formSpecialistTest .check");

		if(name == "") {
			$(".formSpecialistTest .formName").removeClass("has-error").addClass("has-error");
			$(".formSpecialistTest .specTestBlock .myError").remove();
			$(".formSpecialistTest .specTestBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".formSpecialistTest .formName").removeClass("has-error").addClass("has-success");
			$(".formSpecialistTest .specTestBlock .myError").remove();

			validName = true;
		}

		if(email == "") {
			$(".formSpecialistTest .forMali").removeClass("has-error").addClass("has-error");
			$(".formSpecialistTest .specTestMail .myError").remove();
			$(".formSpecialistTest .specTestMail").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".formSpecialistTest .forMali").removeClass("has-error").addClass("has-success");
			$(".formSpecialistTest .specTestMail .myError").remove();

			validEmail = true;
		}

		if(theme == "") {
			$(".formSpecialistTest .theme").removeClass("has-error").addClass("has-error");
			$(".formSpecialistTest .specThemeBlock .myError").remove();
			$(".formSpecialistTest .specThemeBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".formSpecialistTest .theme").removeClass("has-error").addClass("has-success");
			$(".formSpecialistTest .specThemeBlock .myError").remove();

			validTitle = true;
		}

		if(textarea == "") {
			$(".formSpecialistTest .ta").removeClass("has-error").addClass("has-error");
			$(".formSpecialistTest .taTestBlock .myError").remove();
			$(".formSpecialistTest .taTestBlock").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".formSpecialistTest .ta").removeClass("has-error").addClass("has-success");
			$(".formSpecialistTest .taTestBlock .myError").remove();

			validTextArea = true;
		}

		if(check.prop("checked")) {
			validCheckbox = true;
			$("#myDataGetReviews").removeClass("has-error");
		} else {
			validCheckbox = false;
			$("#myDataGetReviews").addClass("has-error");
		}

		if(validName == true && validEmail == true && validTitle == true && validTextArea == true && validCheckbox == true) {
			$(".formSpecialistTest").unbind("submit").submit();
		}
	})
}

//Проверка формы страница с контактами
var contactsFormPage = function() {
	var validName = false,
		validEmail = false,
		validTextArea = false,
		validCheckbox = false;

	$(".contactsForm").submit(function(event) {
		event.preventDefault();

		var name = $(".contactsForm .contactsFormName").val(),
			email = $(".contactsForm .contactsFormMail").val(),
			textarea = $(".contactsForm .contactsTextarea").val(),
			check = $(".contactsForm .check");

		if(name == "") {
			$(".contactsForm .contactsFormName").removeClass("has-error").addClass("has-error");
			$(".contactsForm .contFormNameBlc .myError").remove();
			$(".contactsForm .contFormNameBlc").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".contactsForm .contactsFormName").removeClass("has-error").addClass("has-success");
			$(".contactsForm .contFormNameBlc .myError").remove();

			validName = true;
		}

		if(email == "") {
			$(".contactsForm .contactsFormMail").removeClass("has-error").addClass("has-error");
			$(".contactsForm .contactsFormMailBlc .myError").remove();
			$(".contactsForm .contactsFormMailBlc").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".contactsForm .contactsFormMail").removeClass("has-error").addClass("has-success");
			$(".contactsForm .contactsFormMailBlc .myError").remove();

			validEmail = true;
		}

			
		if(textarea == "") {
			$(".contactsForm .contactsTextarea").removeClass("has-error").addClass("has-error");
			$(".contactsForm .contactsFormTaBlc .myError").remove();
			$(".contactsForm .contactsFormTaBlc").append("<span class='myError'>Неверно заполненное поле</span>");
		} else {
			$(".contactsForm .contactsTextarea").removeClass("has-error").addClass("has-success");
			$(".contactsForm .contactsFormTaBlc .myError").remove();

			validTextArea = true;
		}

		if(check.prop("checked")) {
			validCheckbox = true;
			$("#myData").removeClass("has-error");
		} else {
			$("#myData").addClass("has-error");
			validCheckbox = false;
		}

		if(validName == true && validEmail == true && validTextArea == true && validCheckbox == true) {
			$(".contactsForm").unbind("submit").submit();
		}
	})
}*/

$("#formReception").validate({
  rules: {
  	name: {
  		required: true
  	},
  	phone: {
  		required: true
  	},
    date: {
      required: true
    },
    time: {
      required: true
    },
    specialization: {
      required: true
    },
    nameSpecialist: {
    	required: true
    },
    myData: {
    	required: true
    }
  },
  messages: {
  	name: {
  		required: "Заполните поле"
  	},
  	phone: {
  		required: "Заполните поле"
  	},
    date: {
      required: "Заполните поле"
    },
    time: {
      required: "Заполните поле"
    },
    specialization: {
      required: "Заполните поле"
    },
    nameSpecialist: {
    	required: "Заполните поле"
    },
    myData: {
    	required: "Заполните поле"
    }
  }
})

$(function() {
	rotate();
	placeholder();
	funcClickMenu768();
	landingAnimate();
	specAnimate();
	video();
	$("a.fancyimage").fancybox({
		padding : 0,
	    helpers: {
				overlay: {
				  locked: false
			}
		}
	});
	replaceContent();	
	/*
	parallax();*/

	$(window).on({
		resize: function() {
			adaptive();
			funcAnimateWidthLine_min992();
		},
		load: function() {
			adaptive();
			ymaps.ready(init);
			funcAnimateWidthLine_min992();
		}
	});

	new WOW().init();
	menuMobile();
	//callTest();
	//receptionTest();
	//reviewsTest();
	//specialistTest();
	//contactsFormPage();

	if( $("select").length > 0 ) {
		$("select").selecter();
	}

	if($("input").is("#datetimepicker")) {
		jQuery.datetimepicker.setLocale('ru');
		jQuery('#datetimepicker').datetimepicker({
		 i18n:{
		  de:{
		   months:[
		    'Januar','Februar','März','April',
		    'Mai','Juni','Juli','August',
		    'September','Oktober','November','Dezember',
		   ],
		   dayOfWeek:[
		    "So.", "Mo", "Di", "Mi", 
		    "Do", "Fr", "Sa.",
		   ]
		  }
		 },
		 timepicker:false,
		 format:'d.m.Y'
		});
		    
		jQuery('#time').datetimepicker({
		  datepicker:false,
		  format:'H:i'
		});

	}

	if($("input").is(".phone")) {
		jQuery(function($){
		   $(".phone").mask("+7 (999) - 999 - 99 - 99");
		}); 
	}
})


$(".allspecialists article .sort a").bind("click", function() {
	if($(".allspecialists .sort div:first-child ul li:first-child a").hasClass("current")) {
		$(".allspecialists article .styleH3").css({"display":"block"});
	} else {
		$(".allspecialists article .styleH3").css({"display":"none"});
	}
})

/* placeholder */
function placeholder(){
	$('input[placeholder], textarea[placeholder]').placeholder();
}
/* placeholder end */
/*------------------------ 1. Placeholder ------------------------*/
(function(c){function f(a){this.input=a;"password"==a.attr("type")&&this.handlePassword();c(a[0].form).submit(function(){a.hasClass("placeholder")&&a[0].value==a.attr("placeholder")&&(a[0].value="")})}var d=window.navigator.userAgent.match(/MSIE *\d+\.\w+/i),op_b = navigator.userAgent,start_index = op_b.indexOf('Opera'),op_b = navigator.userAgent,e=!0;op_b = op_b.substr(start_index, 5);if("MSIE 6.0"==d||"MSIE 7.0"==d||"MSIE 8.0"==d||"Opera"==op_b)e=!1;f.prototype={show:function(a){if(""===this.input[0].value||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");
this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(!e&&
a[0].outerHTML){var b=c(a[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=b.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");c(this).hide()});c(a[0].form).submit(function(){b.remove();a.show()})}}};var g=!!("placeholder"in document.createElement("input"));c.fn.placeholder=function(){return g?this:this.each(function(){var a=c(this),b=new f(a);b.show(!0);a.focus(function(){b.hide()});a.blur(function(){b.show(!1)});e||(c(window).load(function(){a.val()&&
a.removeClass("placeholder");b.show(!0)}),a.focus(function(){if(""==this.value){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);
/*------------------------ 1. Placeholder end ------------------------*/

/*
сами функции
ready, в нем мы вызываем функции
libs
*/