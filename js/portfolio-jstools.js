//opt-in tooltip/popover function to use. 
$(function() {
  		$('[data-toggle="tooltip"]').tooltip()
			})
			$(function() {
  		$('[data-toggle="popover"]').popover()
			})

//Show the short description of each project when the modal is opened.
$(document).on('click','.featured-work-title', function (event) {
    var projTitle = $(this).attr('data-proj-title')
    var projDescription = $(this).attr('data-proj-description')
    $('#projTitle.modal-title').text(projTitle)
    $('#projDescription.row').text(projDescription)
  	});