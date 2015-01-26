jQuery ($) ->
	$(".description:first").show()
	
	$(".btn").on "click", ->
	  link = $(this).attr("href")
	  $(".description").hide()
	  $(link).fadeIn()
	  return false