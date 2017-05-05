$(document).ready(function(){

// bootstrap carousel plugin
$('.carousel').carousel({
	interval: 5000,
	pause : ""
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//navbar cross plugin
$(".navbar-toggle").on("click", function () {
	$(this).toggleClass("active");
});

 // nice scrollable bar	
$(".navigate-scroll").niceScroll({cursorborder:"",cursorcolor:"#ccc",boxzoom:false,});
$(".data-scroll1").niceScroll({cursorborder:"",cursorcolor:"#ccc",boxzoom:false,});

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {*/
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
/*});*/

// jQuery for page scrolling active - position jQuery Easing plugin
$('body').scrollspy({
     target: '.navbar-fixed-top',
     offset: 51
});

//counter plugin 
$('.scroe-box').each(function(i) {
i = i+1;
$(this).addClass('scroeboxcolor-' + i);
});

//collapse active
$('.panel-headings').click(function(){
$('.panel-headings').each(function(index, element) {
$(this).removeClass("active");
$(this).children("img").attr("src","images/acc-up.png");
});
$(this).addClass("active");
$(this).children("img").attr("src","images/acc-down.png");
});

//menu plugin
$(".left_block ul li ul:first").slideDown(200);
$(".left_block ul li a:first").addClass("arrow-down active").removeClass("arrow-up");
$(".left_block ul li:not(:first)").has("ul").find("a:first").addClass("arrow-up");

/*portlet window*/
$('.left_block ul li a').click(function (event) {

//Close all opened UL 
if ($(this).siblings("ul").length ==1) {
	$(".left_block ul li ul").slideUp(200);
	$(".left_block ul li").has("ul").find("a:first").removeClass("arrow-down active").addClass("arrow-up"); 
	$(".left_block ul li").not(':has(ul)').find("a:first").removeClass("active");
	//Parent level Href clicked
	//If current ul is closed, open it
		if ($(this).next("ul").is(":hidden")) {
			$(this).next("ul").slideDown(200);
			$(".left_block ul li ul li a ").removeClass("active");
			$(this).addClass("arrow-down active").removeClass("arrow-up");
		} else {
			//if current ul is opened, close it
			$(this).next("ul").slideUp(200);
		}
}else {

	$(".left_block ul li").has("ul:hidden ").find("a:first").removeClass("active");
	$(".left_block ul li").not(':has(ul)').find("a:first").removeClass("active");
	$(this).closest("li").siblings("li").find("a").removeClass("active");
	$(".left_block ul li ul").slideUp(0);
	if ($(this).closest("ul").is(":hidden")) {
				$(this).closest("ul").slideDown(0);
	}
	$(".left_block ul li").has("ul:hidden").find("a:first").removeClass("arrow-down active").addClass("arrow-up"); 
		$(this).addClass(" active");
	}
});

//expend menu plugin
$("#menu_bar").click(function () {
	if ($(".left_block").hasClass("left_block_collapsed")) {
	   $(".left_block").removeClass("left_block_collapsed");
	   $(".logo-area").removeClass("logo-area_collapsed");
	   $(".left_block ul li a title").removeClass("attxthide");
	   $(".left_block ul li span").removeClass("il-space");
	   $(".last-visible").show();
	   $(".left_block ul li ul").removeClass("last-visible"); 
	   //$(".left_block ul li dd").show("favorites-icon");
	   
	   if(window.innerWidth<767){
	   $(".left_block").removeClass("left_block_collapsed");
	   }
	} 
	 else {
	   $(".left_block").addClass("left_block_collapsed");
	   $(".logo-area").addClass("logo-area_collapsed");
	   $(".left_block ul li a title").addClass("attxthide");
	   $(".left_block ul li span").addClass("il-space");
	   $(".left_block ul li ul").find(":visible").addClass("last-visible").hide();
	   //$(".left_block ul li dd").hide("favorites-icon");
	   
	   if(window.innerWidth<767){
	   $(".left_block").addClass("left_block_collapsed");
	   }
	}
});

//mobile devices menu close plugin
$(".left_block ul li ul li a").click(function(){
   $(".left_block").removeClass("left_block_collapsed");
});

//navigate menu js
$('.detail-nav').on('click', function(e) {
$menu_box = $(this).closest('div');
$menu_box.siblings().find('.header-navlink-details').hide();
$menu_box.find('.header-navlink-details').toggle();
e.stopPropagation();
});
$("body").on("click",function(){
	$(".header-navlink-details:visible").hide();
	$("div.hnactive").removeClass("hnactive");
});
$('.header-navlink').click(function(){
$('.header-navlink').each(function(index, element) {
$(this).removeClass("hnactive");
});
$(this).addClass("hnactive");
});
//navigate menu js end


//add action menu plugin
$('.header-add-btn').on('click', function(g) {
$menu_box2 = $(this).closest('div');
$menu_box2.siblings().find('.header-add-btn-details').hide();
$menu_box2.find('.header-add-btn-details').toggle();
g.stopPropagation();
});
$("body").on("click",function(){
	$(".header-add-btn-details:visible").hide();
});


//card action menu plugin
$('.card-menu-btn').on('click', function(g) {
$menu_box3 = $(this).closest('div');
$('.card-menu-details').hide();
$menu_box3.find('.card-menu-details').toggle();
g.stopPropagation();
});
$("body").on("click",function(){
	$(".card-menu-details:visible").hide();
});

//tooltip plugin
 $('[data-toggle="tooltip"]').tooltip();   

//popover plugin
$('[data-toggle="popover"]').popover(); 

//portlets events

/*resize window*/
$('.portlet-resize').click(function(e){
$(this).parent().parent().toggleClass('fullscreen'); 
});

/*close window*/
$( ".portlet-close" ).click(function() {
$(this).parent().parent().hide();
});

/*portlet window*/
$('.portlet-open').click(function (event) {
	if ($(this).parent().next("div.portlet-body").is(":hidden")) {
	$(this).parent().next("div.portlet-body").slideDown(200);
	$(this).removeClass("portlet-arrow-up");
} else {
	
	$(this).parent().next("div.portlet-body").slideUp(200);
	$(this).addClass("portlet-arrow-up");
}
});

//tree data table plugin
$('.tree1').treegrid({
expanderExpandedClass: 'icon-minus-sign',
initialState: 'collapsed',
expanderCollapsedClass: 'icon-plus-sign'
});

//jquery text edito plugin
$('.jqte-test1').jqte();
$('.jqte-test2').jqte();

/*refresh window*/
$('.portlet-refresh').click(function(){
	var mask = $(this).parent().siblings('div.portlet-mask');       
	var loader = $(this).parent().siblings('div.portlet-mask').children("div.portlet-loader");
	mask.fadeTo('slow', 0.8);
	loader.fadeIn('slow');	
	closePopup(mask,loader);
});

function closePopup(mask, loader){
	setTimeout(function(){
		mask.fadeOut('slow');
		loader.fadeOut('slow');
	},1000);
}

//portlets events end

//datepicker plugin
$('.form_date').datetimepicker({
	weekStart: 1,
	todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0,
	pickerPosition: "bottom-left"
});
//datepicker plugin end

//select2 filter dropdown menu plugin
$(".js-example-basic-single").select2();

$(".js-example-basic-multiple").select2({
  placeholder: "Select a Group"
});
//select2 filter dropdown menu plugin end

//sparkline chart plugin

$("#linechart").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
	type: 'line',
	width: '100',
	height: '30',
	spotRadius: 3,
	lineWidth: 2,
	spotColor: '#f36a5b',
	highlightSpotColor: '#f36a5a',
	fillColor: '#a0c5e1',
	lineColor: '#204562'});

$("#barchart").sparkline([95,100,80,70,-60,120,-40,80,-45,65,95,100,80,70,60], {
    type: 'bar',
    height: '30',
    barColor: '#204562',
    negBarColor: '#f36a5b'});


$("#tristatechart").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1], {
    type: 'tristate',
    height: '30',
    posBarColor: '#204562',
    negBarColor: '#f36a5b',
    zeroBarColor: '#5c91b6'});


$("#discretechart").sparkline([4,6,7,7,4,3,2,1,4,4], {
    type: 'discrete',
    width: '30',
    height: '30',
    lineColor: '#204562',
    thresholdValue: NaN,
    thresholdColor: '#f36a5a'});

$("#bulletchart").sparkline([10,12,12,9,7], {
    type: 'bullet',
    targetColor: '#f36a5b',
    performanceColor: '#204562',
    rangeColors: ['#8fa3b2','#658399','#4b6c84']});

$("#piechart").sparkline([1,1,2], {
    type: 'pie',
    height: '30',
	borderWidth: 2,
	borderColor: '#ccc',
    sliceColors: ['#f36a5b','#5a8eae','#204562'],
    borderColor: '#204562'});

$("#boxplotchart").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
    type: 'box',
    raw: false});

//sparkline chart plugin end

//loading button plugin
$('.loading-button').click(function(){
	var loader = $(this).children('img.loader');   
	loader.fadeIn('slow');
	loadinghide(loader);
});
function loadinghide(loader){
	setTimeout(function(){
	loader.fadeOut('slow');
	},1000);
}


//custom accordion plugin
$(".accordion-content").css("display", "none");
	//$(".accordion-content:first").css("display", "block");
$('.accordion-btn').click(function() {
	if( $(this).next(".accordion-content").is(":hidden") ) {
		$('.accordion-btn').children("img").attr("src","images/plus-cricle.png");
		$(".accordion-content").slideUp(200);	
		$(this).next(".accordion-content").slideDown(200);	
		$(this).children("img").attr("src","images/minus-cricle.png");
	}
	else
	{
		$(this).next(".accordion-content").slideUp(200);
		$(this).children("img").attr("src","images/plus-cricle.png");
	}
});

//bootstrap timepicker plugin
$('#timepicker1').timepicker();
$('#timepicker2').timepicker();
$('#timepicker3').timepicker();
$('#timepicker4').timepicker();

//bootstrap touchspin plugin
//TouchSpin 1
$("input[name='demo_vertical1']").TouchSpin({
	verticalbuttons: true
});

//TouchSpin 2
$("input[name='demo_vertical2']").TouchSpin({
	verticalbuttons: true,
	verticalupclass: 'glyphicon glyphicon-plus',
	verticaldownclass: 'glyphicon glyphicon-minus'
});

//TouchSpin 3
 $("input[name='demo1']").TouchSpin();

//TouchSpin 4
$("input[name='demo2']").TouchSpin({
	initval: 40
});
//bootstrap touchspin plugin end

//sortable portlets events 
/*resize window*/
$('.sortable-portlet-resize').click(function(e){
$(this).parent().parent().parent().parent().toggleClass('sortable-fullscreen'); 
});
/*close window*/
$( ".sortable-portlet-close" ).click(function() {
$(this).parent().parent().hide();
});
/*portlet window*/
$('.sortable-portlet-open').click(function (event) {
	if ($(this).parent().next("div.sortable-portlet-body").is(":hidden")) {
	$(this).parent().next("div.sortable-portlet-body").slideDown(200);
	$(this).removeClass("sortable-portlet-arrow-up");
	var current=	$(this).parent().parent().parent().parent();
	current.attr("data-gs-height",	current.attr("data-gs-old-height"));	
	var newY=parseInt(current.attr("data-gs-height"))-1;
	$(".grid-stack-item").each(function() {
		var iX = $( this ).attr("data-gs-x");
		var cX = current.attr("data-gs-x"); 
		var cWidth = current.attr("data-gs-width");
		
	if(iX == cX )//|| (iX >= cX && iX <= cWidth && cWidth>4)
	{
		var y = parseInt($( this ).attr("data-gs-y"));
		if(y!=0 && y > parseInt(current.attr("data-gs-y") ))
		{
			$( this ).attr("data-gs-y",parseInt($( this ).attr("data-gs-y"))+newY);
		}
	}});

} else {
	
	$(this).parent().next("div.sortable-portlet-body").slideUp(200);
	$(this).addClass("sortable-portlet-arrow-up");
	var current =	$(this).parent().parent().parent().parent();
	var newY=parseInt(current.attr("data-gs-height"))-1;
	var oldHeight = current.attr("data-gs-height");
	current.attr("data-gs-old-height",	oldHeight);	
	current.attr("data-gs-height",	1);	
	$(".grid-stack-item").each(function() {
		var iX = $( this ).attr("data-gs-x");
		var cX =current.attr("data-gs-x");
		var iWidth = $( this ).attr("data-gs-width"); 
		var cWidth = current.attr("data-gs-width");
		var iY = parseInt($( this ).attr("data-gs-y"));
		var cY = parseInt(current.attr("data-gs-y") );
		console.log("not returning...."+iWidth+" : "+cWidth);
		if(iX == cX )//&& iWidth<=cWidth) || (iX >= cX && iX <= cWidth && cWidth>4)
		{
			if(iY!=0 && iY > cY && iY > newY)
			{
				$( this ).attr("data-gs-y",iY-newY);
			}
		}
});
}
});
/*refresh window*/
$('.sortable-portlet-refresh').click(function(){
	var mask1 = $(this).parent().siblings('div.sortable-portlet-mask');       
	var loader1 = $(this).parent().siblings('div.sortable-portlet-mask').children("div.sortable-portlet-loader");
	mask1.fadeTo('slow', 0.8);
	loader1.fadeIn('slow');	
	closePopup1(mask1,loader1);
});
function closePopup1(mask1, loader1){
	setTimeout(function(){
		mask1.fadeOut('slow');
		loader1.fadeOut('slow');
	},1000);
}
//sortable portlets events end


//owl plugin
$("#owl-demo1").owlCarousel({
	autoPlay: 3000, 
	items : 4,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3]
});

$("#owl-demo2").owlCarousel({
      navigation : false, 
	  autoPlay: 2500, 
	  pagination:true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

//summernote plugin
$('.summernote').summernote({
	height: 150
});

//collapsed plugin 1
$('#collapsed-block1-btn').click(function() {
	if( $(".collapsed-block1").is(":hidden") ) {
		$(".collapsed-block1").slideDown(200);	
		$("#collapsed-img1").attr("src","images/collapsed-up.png");
	}
	else
	{
		$(".collapsed-block1").slideUp(200);
		$("#collapsed-img1").attr("src","images/collapsed-down.png");
	}
});

//grid stack plugin
var options = {
resizable: {
enabled: false,
handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],		
start: function(event, $element, widget) {}, // optional callback fired when resize is started,
resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
},
handle: '.sortable-portlet-title',
};
$('.grid-stack').gridstack(options); 


//Virtual Keyboard plugin

$('.softkeys').softkeys({
target : $('.softkeys').data('target'),
layout : [
	[
		['`','~'],
		['1','!'],
		['2','@'],
		['3','#'],
		['4','$'],
		['5','%'],
		['6','^'],
		['7','&amp;'],
		['8','*'],
		['9','('],
		['0',')'],
		['-', '_'],
		['=','+'],
		'delete'
	],
	[
		'q','w','e','r','t','y','u','i','o','p',
		['[','{'],
		[']','}']
	],
	[
		'capslock',
		'a','s','d','f','g','h','j','k','l',
		[';',':'],
		["'",'&quot;'],
		['\\','|']
	],
	[
		'shift',
		'z','x','c','v','b','n','m',
		[',','&lt;'],
		['.','&gt;'],
		['/','?'],
		['@']
	]
]
});

//Virtual Keyboard plugin end

//draggable plugin
  $( function() {
  $( ".column" ).sortable({
  connectWith: ".column",
  handle: ".portlet-header",
  placeholder: "portlet-placeholder ui-corner-all"
  });

  $( ".portlet" )
  .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
  .find( ".portlet-header")
  .addClass( "ui-widget-header ui-corner-all" )
  .prepend( "<a href='javascript:;' class='draggable-close'></a>")
  .prepend( "<a href='javascript:;' class='draggable-refresh'></a>")
  .prepend( "<a href='javascript:;' class='draggable-resize'></a>")
  .prepend( "<a href='javascript:;' class='draggable-collapse'></a>");
    
  $('.draggable-resize').click(function(e){
  $(this).parent().parent().toggleClass('draggable-fullscreen'); 
  });
    
  $( ".draggable-close" ).click(function() {
  $(this).parent().parent().hide();
  });

  $('.draggable-refresh').click(function(){
  var mask2 = $(this).parent().siblings('div.draggable-mask');       
  var loader2 = $(this).parent().siblings('div.draggable-mask').children("div.draggable-loader");
  mask2.fadeTo('slow', 0.8);
  loader2.fadeIn('slow');	
  closePopup2(mask2,loader2);
  });
  function closePopup2(mask2, loader2){
  setTimeout(function(){
  mask2.fadeOut('slow');
  loader2.fadeOut('slow');
  },1000);
  }
   
  $('.draggable-collapse').click(function (event) {
  if ($(this).parent().next("div.portlet-content").is(":hidden")) {
  $(this).parent().next("div.portlet-content").slideDown(200);
  $(this).removeClass("draggable-arrow-up");
  } else {

  $(this).parent().next("div.portlet-content").slideUp(200);
  $(this).addClass("draggable-arrow-up");
  }
  });

  });
  //draggable plugin end





});


