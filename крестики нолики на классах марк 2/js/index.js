
var map = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
]



class crossZero{

	constructor(container, map){
		this.container = document.querySelector(container)
		this.map = map
		this.cell = null
		this.init()
	}

	createCell(type){
		var place = document.createElement("div")
		place.classList.add(type)
		return place
	}

	renderCell(){
		this.container.innerHTML = ""
		for(var i = 0; i < this.map.length; i++){
			for(var j = 0; j < this.map[i].length; j++){
				var place = this.createCell("cell")
				this.container.appendChild(place)
				this.cell = place
				place.setAttribute("i", i)
				place.setAttribute("j", j)
				if(this.map[i][j] === 0){
					this.cell.innerHTML = ""
				} else if(this.map[i][j] === 1){
					this.cell.innerHTML = "X"
				} else if(this.map[i][j] === 2){
					this.cell.innerHTML = "O"
				}
				
			}
			
		}

	}

	cancellationEvent(){
		this.container.addEventListener("contextmenu", function(){
			event.preventDefault()
		})
	}

	playerOne(){
		this.container.addEventListener("click", handler.bind(this))

		function handler(event){
			var places = event.target
			var i = +places.getAttribute("i")	
			var j = +places.getAttribute("j")
			if(this.map[i][j] === 0){
				this.map[i][j] = 1
				
			}else {
				alert("Место занято")
			}
		this.renderCell()
		}
			
	}

	playerTwo(){
		this.container.addEventListener("contextmenu", handler.bind(this))

		function handler(event){
			var places = event.target
			var i = +places.getAttribute("i")	
			var j = +places.getAttribute("j")
			if(this.map[i][j] === 0){
				this.map[i][j] = 2
				
			} else {
				alert("Место занято")
			}
		this.renderCell()
		}
	}



	init(){
		this.createCell()
		this.renderCell()
		this.cancellationEvent()
		this.playerOne()
		this.playerTwo()
	
	}

}



var crosZero = new crossZero(".field", map)































































/*console.log(this.map)
			var places = event.target
			var i = +places.getAttribute("i")	
			var j = +places.getAttribute("j")
			if(map[i][j] === 0){
				map[i][j] = 1
				
			}
			if(map[i][j] === 1){
				places.innerHTML = "X"
			}*/