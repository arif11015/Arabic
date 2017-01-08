
$(document).ready(function(){
	$('#nav').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce"
	});
	$('.slicknav_menu').append('<div class="mobile_flag"><i class="i fa fa-flag"></div></i><div class="mobile_search"><i class="i fa fa-search"></div></i>');
	$('.mobile_search i').click(function(){
		$('.main_munu_area').toggle(1000);
	});
	$('.mobile_flag i').click(function(){
		$('.translate').toggle(1000);
	});
	
	
    $('#options').flagStrap({
        countries: {
            "QA": "Arbia",
            "GB": "English",
        },
        buttonSize: "btn-sm",
        buttonType: "btn-info",
        labelMargin: "10px",
        scrollable: false,
        scrollableHeight: "350px"
    });	
	
	
	//nivo slider
	$(window).load(function() {
        $('#slider').nivoSlider({
		controlNav:false,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
		pauseTime:3000,
		//manualAdvance:true
		});
		
        $('#slider_one').nivoSlider({
		controlNav:false,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
		pauseTime:3000,
		//manualAdvance:true
		});
		
        $('#slider_two').nivoSlider({
		controlNav:false,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
		pauseTime:3000,
		//manualAdvance:true
		});
		
        $('#slider_three').nivoSlider({
		controlNav:false,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
		pauseTime:3000,
		//manualAdvance:true
		});
		
        $('#slider_four').nivoSlider({
		controlNav:false,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
		pauseTime:3000,
		//manualAdvance:true
		});
		
        $('#slider_five').nivoSlider({
		controlNav:false,
		nextText:'<i class="fa fa-angle-right"></i>',
		prevText:'<i class="fa fa-angle-left"></i>',
		pauseTime:3000,
		//manualAdvance:true
		});
    });	




     
		$("#owl-demo").owlCarousel({
		navigation:true,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		 pagination: false,
		navigationText: [
		  "<i class='fa fa-angle-left'></i>",
		  "<i class='fa fa-angle-right'></i>"
		],		
		afterInit : function(elem){
		var that = this
		that.owlControls.prependTo(elem)
		}
		
		});

			$('.bxslider').bxSlider({
			  nextSelector: '#slider-next',
			  prevSelector: '#slider-prev',
			  minSlides: 3,
			  moveSlides: 1,
			  auto: true,
			  maxSlides: 3,
			  slideWidth: 300,
			  slideMargin: 10,			  
			  nextText: '<i class="fa fa-angle-right"></i>',
			  prevText: '<i class="fa fa-angle-left"></i>'
			});


	
});