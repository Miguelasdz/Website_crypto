let contador = 0;
let act=[];
var pos=20;
var posy=10;
var espacio=900; 
var tareas_i=[];
let tareas_f=[];
let myText = "";

// Estar por hacer las funciones de ordenado por hora de termino para despues animarlos ordenandose y finalmente hacer la animacion de greedy
function setup() {
  let myCanvas =  createCanvas(1000, 1000);
  myCanvas.parent('canvas');
  fill(0, 102);
  textSize(10);
  textAlign(CENTER);
}
function draw() {

} // Empty draw() keeps the program running

function myCalculo(){
    
    var n, n1, i, i2, k,k2, aux,aux2;
    n = tareas_i.length;
    
    console.log(tareas_i,tareas_f); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if(tareas_f[i] == tareas_f[i + 1]){
              if(tareas_i[i] > tareas_i[i + 1]){
                aux = tareas_f[i];
                tareas_f[i] = tareas_f[i + 1];
                tareas_f[i + 1] = aux;

                aux2 = tareas_i[i];
                tareas_i[i] = tareas_i[i + 1];
                tareas_i[i + 1] = aux2;
              }
            }
            else if (tareas_f[i] > tareas_f[i + 1]) {
                aux = tareas_f[i];
                tareas_f[i] = tareas_f[i + 1];
                tareas_f[i + 1] = aux;

                aux2 = tareas_i[i];
                tareas_i[i] = tareas_i[i + 1];
                tareas_i[i + 1] = aux2;
            }
        }
    }
    console.log(tareas_i,tareas_f); // Mostramos, por consola, la lista ya ordenada
    contador=0;
    paso2(tareas_i,tareas_f);
}


function paso2(tareas_i,tareas_f){
  
var ancho=100;
n2 = tareas_i.length;
    for (k = 0; k < n2; k++){
       z= ` ${tareas_i[k]},  ${tareas_f[k]}`;
           
       
       if(espacio>=ancho){
          espacio=ancho-20;
         agrega(pos,posy,ancho,z);//x,y,ancho,ide
          pos=200;
        }else{
          espacio=900;
         pos=20;
          posy=posy+100;
          agrega(pos,posy,ancho,z);
          pos=pos+ancho+20;
        }
    }
    paso3(tareas_i,tareas_f);
}

function paso3(tareas_i,tareas_f){
  
  var ancho=50;
  n2 = tareas_i.length;
  var z= ` ${tareas_i[0]},  ${tareas_f[0]}`;
  var aux=tareas_i[0];
  if(espacio>=ancho){
          espacio=ancho-20;
         agrega(pos,posy,ancho,z);//x,y,ancho,ide
          pos=200;
        }else{
          espacio=900;
         pos=20;
          posy=posy+100;
          agrega(pos,posy,ancho,z);
          pos=pos+ancho+20;
        }

        for (k = 1; k < n2; k++){
        z= ` ${tareas_i[k]},  ${tareas_f[k]}`;   
        if(aux<tareas_i[k]){
          if(espacio>=ancho){
           espacio=ancho-20;
            agrega(pos,posy,ancho,z);//x,y,ancho,ide
           pos=200;
           }else{
            espacio=900;
            pos=20;
            posy=posy+100;
            agrega(pos,posy,ancho,z);
            pos=pos+ancho+20;
            }
        }
        aux=tareas_i[k];
      }   
}






function myFunction(){
			var inicio = document.getElementById("start").value;
			var fin = document.getElementById("end").value;
      if(inicio>=fin){
        alert("no puedes poner un valor mayor o igual que inicio")
      }
      else{
		  	var z= inicio +"-"+ fin;

        var largo=longitud(inicio,fin);   
       var ancho=largo*40;
       if(espacio>=ancho){
          espacio=espacio-ancho-20;
         agrega(pos,posy,ancho,z);//x,y,ancho,ide
          pos=pos+ancho+20;
        }else{
          espacio=900;
         pos=20;
          posy=posy+100;
          agrega(pos,posy,ancho,z);
          pos=pos+ancho+20;
        }
      }
    }

function longitud(inicio, fin){
			inicioMinutos = parseInt(inicio.substr(3,2));
  			inicioHoras = parseInt(inicio.substr(0,2));
  
  			finMinutos = parseInt(fin.substr(3,2));
  			finHoras = parseInt(fin.substr(0,2));
        aux1=(inicioMinutos)*0.01;
        aux2=(finMinutos)*0.01;

        tareas_i[contador]=inicioHoras+aux1;
        console.log(inicioMinutos);
        console.log(tareas_i);

        tareas_f[contador]=finHoras+aux2;
        

  			transcurridoMinutos = finMinutos - inicioMinutos;
  			transcurridoHoras = finHoras - inicioHoras;
        console.log(transcurridoHoras);
        console.log(transcurridoMinutos);
  			if (transcurridoMinutos < 0) {
    			transcurridoHoras--;
    			transcurridoMinutos = 60 + transcurridoMinutos;
  			}
  			horas = transcurridoHoras.toString();
  			minutos = transcurridoMinutos.toString();
        console.log(horas);
        console.log(minutos);
  			if (horas.length < 2) {
    			horas = "0"+horas;
  			}
  			if (horas.length < 2) {
    			horas = "0"+horas;
			 }
         
        
			return horas;
		}
function agrega(x,y,largo,z){
  if(mouseIsPressed === false){
    act[contador]= new cuadro(
      x,
      y,
      largo,
      z,
      "cuadro"+contador
    );
    act[contador].colorea();
    act[contador].display();
    console.log(act[contador].staticMethod()+" "+contador);
    contador+=1;
  }
}
class cuadro {
  constructor(x,y,l,desc,ide) {
    this.x = x;
    this.y = y;
    this.alto=60;
    this.largo=l;
    this.speed = 1;
    this.desc=desc;
    this.ide=ide;
  }
  display() {
    console.log(this.ide);
    rect(this.x, this.y, this.largo, this.alto);
    this.ponerEtiqueta();
  }
  colorea(){
    var r = random(255);
    var  g = random(255);
    var  b = random(255); 
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127)
  }
  staticMethod() {
    return this.ide;
  }
  ponerEtiqueta(){
    fill(0);
    text(this.desc,pos+20, posy+80);
  }
}

function quickSort(array,array2) {

  if (array.length < 1) {
    return [];
  }

  var left = [];
  var left2 = [];
  var right = [];
  var right2 = [];
  var pivot = array[0];
  var pivot2 = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
      left2.push(array2[i]);
    }
    else {
      right.push(array[i]);
      right2.push(array2[i]);
    }
  }

  return [].concat(quickSort(left, left2), pivot, pivot2, quickSort(right, right2));

}

  