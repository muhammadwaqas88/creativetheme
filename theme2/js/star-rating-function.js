$(document).ready(function(){

//rating stars 
$('.kv-fa').rating({
    theme: 'krajee-fa',
    showCaption: false,
    showClear: false, 
    filledStar: '<i class="fa fa-star"></i>',
    emptyStar: '<i class="fa fa-star-o"></i>'
});

//rating Hearts 
$('.kv-gly-heart').rating({
    containerClass: 'is-heart',
    showCaption: false,
    showClear: false, 
    defaultCaption: '{rating} hearts',
    starCaptions: function (rating) {
    return rating == 1 ? 'One heart' : rating + ' hearts';
    },
    filledStar: '<i class="glyphicon glyphicon-heart"></i>',
    emptyStar: '<i class="glyphicon glyphicon-heart-empty"></i>'
});

//rating Unicode Rook 
$('.kv-uni-rook').rating({
    theme: 'krajee-uni',
    showCaption: false,
    showClear: false, 
    defaultCaption: '{rating} rooks',
    starCaptions: function (rating) {
    return rating == 1 ? 'One rook' : rating + ' rooks';
    },
    filledStar: '&#9820;',
    emptyStar: '&#9814;'
});


$('.rating,.kv-gly-star,.kv-gly-heart,.kv-uni-star,.kv-uni-rook,.kv-fa,.kv-fa-heart,.kv-svg,.kv-svg-heart').on(
	'change', function () {
	console.log('Rating selected: ' + $(this).val());
});

});
