function palo() {
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, 900, 900);

	var arreglopersonas = new Array (5);
	for (var i = 0; i <= 5-1; i++) {
	arreglopersonas[i] = new persona("Raul" + i,
								22+i,"blue",100+1,
								50+i,10+(i*120),10);
	}
	arreglopersonas.forEach(
		function(element) {
	  		element.Dibujar(context);
		}
	); }

function arbolera() {
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
		context.clearRect(0, 0, 900, 900);

		var arregloarboles = new Array(
			new arbol("yellow", 80, 50, 10, 10, 5, 1),
			new arbol("black", 70, 60, 100, 10, 5, 1),
			new arbol("blue", 80, 60, 200, 10, 5, 1),
			new arbol("grey", 70, 50, 300, 10, 5, 1),
			new arbol("cyan", 90, 90, 400, 10, 5, 1),
			new arbol("red", 80, 90, 550, 10, 5, 1)
		);
	for (var i = arregloarboles.length - 1; i >= 0; i--) {
		arregloarboles[i].Dibujar(context);
	}
	
}
function caja(){
		
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
		context.clearRect(0, 0, 900, 900);

		var arregloarboles = new Array(
			new caja3d("yellow", 80, 50, 25, 10, 10),
			new caja3d("black", 70, 60, 35, 110, 10),
			new caja3d("blue", 80, 60, 15, 220, 10),
			new caja3d("grey", 70, 50, 45, 330, 10),
			new caja3d("cyan", 90, 90, 25, 440, 10),
			new caja3d("red", 80, 90, 35, 570, 10)
		);
	for (var i = arregloarboles.length - 1; i >= 0; i--) {
		arregloarboles[i].Dibujar(context);
	}
	
}