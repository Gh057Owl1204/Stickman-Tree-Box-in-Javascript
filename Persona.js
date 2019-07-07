	class persona {
	constructor(n, e, c, al, an, x, y){
		this.Nombre = n;
		this.Edad = e;
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}
	Saludar(mensaje){
		alert(mensaje);


	}
	Dibujar(dibujo){	
		var myCanvas = document.getElementById("myCanvas");
		var context = myCanvas.getContext("2d");	
		//Crear una pluma con el color
		dibujo.strokeStyle = this.Color;
			dibujo.beginPath();
		var rad = this.Ancho/2;
        dibujo.arc(this.X+this.Ancho, 
        					 this.Y+rad,
            				 rad,
            				 0,
            				 2*3.1416,
            				 true);
	dibujo.stroke();
//Dibujar el tronco
	dibujo.beginPath();
		dibujo.moveTo(this.X+this.Ancho,this.Y+this.Altura/2);
		dibujo.lineTo(this.X+this.Ancho,this.Y+(3*this.Altura)/2);
		dibujo.stroke();
//Dibujar manos
	dibujo.beginPath();
		dibujo.moveTo(this.X,this.Altura);
		dibujo.lineTo(2*this.Ancho+this.X,this.Altura);
		dibujo.stroke();
//Dibujar pierna izquierda
	dibujo.beginPath();
		dibujo.moveTo(this.X+this.Ancho,this.Y+(3*this.Altura)/2);
		dibujo.lineTo(this.X,(2.5*this.Altura));
		dibujo.stroke();
//Dibujar pierna derecha
	dibujo.beginPath();
		dibujo.moveTo(this.X+this.Ancho,this.Y+(3*this.Altura)/2);
		dibujo.lineTo(this.X+this.Ancho*2,(2.5*this.Altura));
		dibujo.stroke();
	dibujo.beginPath();
//Escribir Nombre de la Persona
		dibujo.font = "12px Arial";
		dibujo.fillText(this.Nombre,this.X,this.Y);
			dibujo.stroke();
	dibujo.beginPath();

	}
}
