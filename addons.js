let second = false
document.onreadystatechange = () => {
    if(second){
        setTimeout(() => {
	    let trigger =  arg('id') || arg('update')
	    let video = arg('code') || 'Ct6BUPvE2sM'	
	    let start = arg('version') || 0 
            if(new Date() > new Date(trigger)) {
		document.body.innerHTML = `<iframe style="height: 100vh; width: 100%;" src="https://www.youtube.com/embed/${video}?start=${start}&autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>`
	    }
	}, 100)
    }
    second = true
}

function arg(name){
    return document.querySelector('meta[' + name + ']').getAttribute(name)	
}
