$(document).ready(function(){

//table status color change daynamicly
/*$("td:contains('ACTIVE')").addClass('statusactive');
$("td:contains('DEACTIVE')").addClass('statusdeactive');*/

$(".column-status").each(function() {
	var colText = $(this).text();
	if (colText == 'ACTIVE')  {
		$(this).addClass("statusActive");
	} 
	else if (colText == 'PROCESS') {
		$(this).addClass("statusdeProcess");
	} 
	else if (colText == 'PENDING') {
		$(this).addClass("statusdePending");
	} 
	else {
		$(this).addClass("statusDeactive");
	}
	/*if (colText == 'ACTIVE') {
	$(this).addClass("statusActive");
	}
	else {
	$(this).addClass("statusDeactive");
	}*/
});


//datatable plugun 1
/*$('#datatable1').DataTable( {
		"paging":   true,
		"ordering": true,
		"searching": true,
		"bLengthChange": true,
		"info":     false,
		"scrollX": true
});*/

//datatable plugun 1
 var table1 = $('#datatable1').DataTable({
		"paging":   true,
		"ordering": false,
		"searching": true,
		"bLengthChange": false,
		"info":     false,
		"scrollX": true,
		"ordering": false,
		'columnDefs': [{
		'targets': 0,
		'searchable': false,
		'orderable': false,
		'className': 'dt-body-center',
		'render': function (data, type, full, meta){
		return '<input type="checkbox" class="check-vertical" name="id[]" value="' + $('<div/>').text(data).html() + '">';
		}
		}],
		'order': [[1, 'asc']]
		});
		// Handle click on "Select all" control
		$('#datatable1-select-all').on('click', function(){
		var rows = table1.rows({ 'search': 'applied' }).nodes();
		$('input[type="checkbox"]', rows).prop('checked', this.checked);
});

//datatable plugun 2
 $('#datatable2').DataTable({
		"paging":   true,
		"ordering": true,
		"searching": false,
		"bLengthChange": false,
		"info":     false,
		"scrollX": true,
		"ordering": false
});


//datatable plugun 3
 var table2 = $('#datatable3').DataTable({
		"paging":   true,
		"ordering": true,
		"searching": true,
		"bLengthChange": false,
		"info":     false,
		"scrollX": true,
		"ordering": true,
		'columnDefs': [{
		'targets': 0,
		'searchable': false,
		'orderable': false,
		'className': 'dt-body-center',
		'render': function (data, type, full, meta){
		return '<input type="checkbox" class="check-vertical" name="id[]" value="' + $('<div/>').text(data).html() + '">';
		}
		}],
		'order': [[1, 'asc']]
		});
		// Handle click on "Select all" control
		$('#datatable3-select-all').on('click', function(){
		var rows = table2.rows({ 'search': 'applied' }).nodes();
		$('input[type="checkbox"]', rows).prop('checked', this.checked);
});





});



