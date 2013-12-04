$(document).on("ready", function() {

			// Setting the slides total for the counter
			$("#toGo").html($("#theslides").children().length);

			// When the page is reloaded, scroll to tpo (to avoid slide count issues)
			$('html, body').animate({ scrollTop: 0 }, 'fast');
			function nextSlide(thisElement){
				nextId = parseInt($(thisElement).attr('id').substring(2,3), 10) + 1;
				console.log(nextId);
				// Setting the counter value
				if(nextId<=$("#toGo").html()){
					$("#current").html(nextId);
				}else{
					console.log("Final slide")
				}
				// The sliding thanks to Adam Pope's code found at http://www.stormconsultancy.co.uk/blog/development/code-snippets/scroll-an-element-into-view-programmatically-with-javascript/
				$('html:not(:animated), body:not(:animated)').animate({
				scrollTop: $("#s_"+nextId+"").offset().top
				}, 1000);

			}
			$(".slide").click(function(){
				nextSlide($(this));
			});
			
			$('body').on('keyup', function(e) {
			    if (e.which == 37 || e.which == 38) {
			        e.preventDefault();

			        previousSlide = $("#current").html() - 1;
			        $("#current").html(previousSlide);

					$('html:not(:animated), body:not(:animated)').animate({
						scrollTop: $("#s_"+previousSlide+"").offset().top
					}, 1500);
			        
			        console.log(previousSlide);
			    }
			    return false;
			});
			




		});
