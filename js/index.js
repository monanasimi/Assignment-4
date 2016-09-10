$(document).ready(start)

function start() {
  $(".readmore").click(showMore)
  $(".readless").click(showLess)
  $(".learnmore").click(learnMore)
  $(".learnless").click(learnLess)
}

function showMore(e) {
	e.preventDefault()
    $("#show-this-on-click").slideDown()
    $(this).hide()
    $('.readless').show()

}

function showLess(e) {
	e.preventDefault()
	$("#show-this-on-click").slideUp()
	$(this).hide()
	$('.readmore').show()

}

function learnMore(e) {
	e.preventDefault()
    $("#learnmoretext").slideDown()
    $(this).hide()
    $('.learnless').show()

}

function learnLess(e) {
	e.preventDefault()
	$("#learnmoretext").slideUp()
	$(this).hide()
	$('.learnmore').show()

}