$(document).ready(function(){
	var blockRow = "<div class = 'row'></div>";
	var divBlock = "<div class = 'etchBlock'></div>";

	function createGrid(gridH, gridW){
		$('#container').empty();
		for (j = 1; j <= gridH; j++) {
			$('#container').append($(blockRow));
			for (i = 1; i <= gridW; i++){
				$('.row').last().append($(divBlock));
			}
		}
		$('.row').css('height', 600/gridH);
		$('.etchBlock').css('width', 600/gridW);
		$('.etchBlock').hover(function(){
			$(this).css('opacity', +($(this).css('opacity')) + 0.1);
		});	
	}

createGrid(16,16);

$('#ngbutton').click(function(event){
	event.preventDefault();
	var newh = $("#newgridh").val();
	var neww = $("#newgridw").val();
	createGrid(newh,neww);
});

});