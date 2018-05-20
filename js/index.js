const colorPicker = $('#colorPicker');

const rowGrid = $('#rowSize');
const colGrid = $('#colSize');

const canvas = $("#pixelCanvas");
 
function makeGrid() {
	
	canvas.empty();
	
	let rows = rowGrid.val();
	let col = colGrid.val();

    for(r = 1; r <= rows; r++) {
      canvas.append('<tr></tr>');
	}
	
	for(c = 1; c <= col; c++) {
		canvas.find('tr').append('<td class="td-background"></td>');
	}
	
}

$(function() {
	$('#sizeSelect').submit(function(event) {
		event.preventDefault();
		makeGrid();
		canvas.find('td').css({'background-color': 'white', 'opacity': 0.5});
		
	});
	$('#reset').on("click", function() {
		canvas.find('td').css({'background-color': 'white', 'opacity': 0.5});
	});
	canvas.on("click", 'td', function() {
		let currentColor = colorPicker.val();
		if($(this).hasClass('td-background')) {
			$(this).toggleClass('td-background');
			$(this).css({'background-color': currentColor, 'opacity': 1.0});
		}
		else {
			$(this).toggleClass('td-background');
			$(this).css({'background-color': 'white', 'opacity': 0.5});
		}
	});
});