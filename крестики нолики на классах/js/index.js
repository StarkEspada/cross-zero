class crossZero {

	constructor(container){
		this.container = document.querySelector(container)
		this.cell = null
		this.number = null
		this.init()
	}

	createCell(){
 		for(var i = 0; i < 9; i++){
 			var cell = document.createElement("div")
 			cell.classList.add("cell")
 			this.cell = cell
 			this.container.appendChild(cell)
 		}
	}

	cancellationEvent(){
		this.container.addEventListener("contextmenu", handler.bind(this))
		function handler(event){
			event.preventDefault()
		}
	}

	testO(){
		this.cell = event.target
		this.cell.innerHTML = "O"
	}

	testX(){
		this.cell = event.target	
		this.cell.innerHTML = "X"
	}


	clickX(){
		this.container.addEventListener("click", handler.bind(this))

			function handler(event){
			this.cell = event.target	
			/*this.cell.innerHTML = "X"*/
			if(this.cell.innerHTML === "X" || this.cell.innerHTML === "O"){
				alert("Место занято")
			} else {
				this.testX()
			}
		}
	}


	clickO(){
		this.container.addEventListener("contextmenu", handler.bind(this))

		function handler(event){
			this.cell = event.target
			/*this.cell.innerHTML = "O"*/
			if(this.cell.innerHTML === "O" || this.cell.innerHTML === "X"){
				alert("Место занято")
			} else {
				this.testO()
			}
		}
	}


	/*check(){
		this.clickO()
		this.clickX()
		this.number = 0
		if(this.number === 0){
			this.number++
			console.log(this.number)
		} else if(this.number === 1){
			console.log(this.number)
		}

	}*/




	init(){
		this.createCell()
		this.cancellationEvent()
		/*this.check()*/
		this.clickO()
		this.clickX()
	}


}


var crosZero = new crossZero(".field")