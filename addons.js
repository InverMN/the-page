$(() => {
	let today = new Date()
	let trigger =  $('meta[id]').attr('id')
	if(today > trigger) {
		$('body > *').hide()
		$('body').append('<iframe style="height: 100vh; width: 100%;" src="https://www.youtube.com/embed/Ct6BUPvE2sM?start=4&autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>')
	}
})