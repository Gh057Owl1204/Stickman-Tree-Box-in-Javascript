class caja3d{
	constructor(co, la, an, al, x, y){
		this.Color = co;
		this.Altura = la;
		this.Ancho = an;
		this.Largo = al;
		this.X = x;
		this.Y = y;
		var volumen = this.Altura*this.Ancho*this.Largo;
		this.radiocopa = volumen;

	}
	
	Dibujar(dibujo){
		
		//Crear una pluma con el color
		dibujo.strokeStyle = this.Color;
        var isPrimerPunto = true;
		for (var alfa = 0; alfa <= 2; alfa++) {   
		   if(!isPrimerPunto){
                //Trazar cuadro 1
				dibujo.beginPath();
				dibujo.moveTo(this.X, this.Y);
				dibujo.lineTo(this.X, this.Y+this.Altura);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Ancho, this.Y);
				dibujo.lineTo(this.X+this.Ancho, this.Y+this.Altura);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X, this.Y);
				dibujo.lineTo(this.X+this.Ancho, this.Y);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X, this.Y+this.Altura);
				dibujo.lineTo(this.X+this.Ancho, this.Y+this.Altura);
				dibujo.stroke();
				//Trazar cuadro 2
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Largo, this.Y+this.Largo);
				dibujo.lineTo(this.X+this.Largo, this.Y+this.Altura+this.Largo);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Ancho+this.Largo, this.Y+this.Largo);
				dibujo.lineTo(this.X+this.Ancho+this.Largo, this.Y+this.Altura+this.Largo);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Largo, this.Y+this.Largo);
				dibujo.lineTo(this.X+this.Ancho+this.Largo, this.Y+this.Largo);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Largo, this.Y+this.Altura+this.Largo);
				dibujo.lineTo(this.X+this.Ancho+this.Largo, this.Y+this.Altura+this.Largo);
				dibujo.stroke();
				//Trazar conectores
				dibujo.beginPath();
				dibujo.moveTo(this.X, this.Y);
				dibujo.lineTo(this.X+this.Largo, this.Y+this.Largo);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Ancho, this.Y);
				dibujo.lineTo(this.X+this.Ancho+this.Largo, this.Y+this.Largo);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X, this.Y+this.Altura);
				dibujo.lineTo(this.X+this.Largo, this.Y+this.Altura+this.Largo);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.X+this.Ancho, this.Y+this.Altura);
				dibujo.lineTo(this.X+this.Ancho+this.Largo, this.Y+this.Altura+this.Largo);
				dibujo.stroke();
            }
            isPrimerPunto=false;		
		}
	}
}