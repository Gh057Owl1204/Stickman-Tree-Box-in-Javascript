	class arbol {
	constructor(co, al, an, x, y, rr, dcop){
		this.Color = co;
		this.Altura = al;
		this.Ancho = an;		
		this.X = x;
		this.Y = y;
		var rad = this.Ancho/2;
		this.radcopa = rad;
		this.radrueda = rr;
		this.Distanciacopa = dcop;

	}
	
	Dibujar(dibujo){
		
		//Crear una pluma con el color
		dibujo.strokeStyle = this.Color;
		var xa = 0;
        var ya = 0;
        var xi = 0;
        var yi = 0;
        var xc = this.X + this.radcopa;
        var yc = this.Y + this.radcopa;
        var isPrimerPunto = true;
		for (var alfa = 0; alfa <= 2*Math.PI; alfa=alfa+0.01) {
            xi = xc + ((this.radcopa+this.radrueda)*Math.sin(alfa))-(this.radrueda*Math.sin(alfa*(1+(this.radcopa/this.radrueda))));
            yi = yc + ((this.radcopa+this.radrueda)*Math.cos(alfa))-(this.radrueda*Math.cos(alfa*(1+(this.radcopa/this.radrueda))));
		   
		   if(!isPrimerPunto){
                //Trazar línea
                dibujo.beginPath();
                dibujo.moveTo(xa, ya);
                dibujo.lineTo(xi, yi);
                dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(this.radcopa+this.X, (2*this.radcopa)+this.Y);
				dibujo.lineTo(this.radcopa+this.X, (this.radcopa*3)+this.Y);
				dibujo.stroke();
				dibujo.beginPath();
				dibujo.moveTo(1.5*this.radcopa+this.X, (2.14*this.radcopa)+this.Y);
				dibujo.lineTo(1.5*this.radcopa+this.X, (this.radcopa*3)+this.Y);
				dibujo.stroke();
            }
            isPrimerPunto=false;
            xa = xi;
            ya = yi;			
		}
	}
	}