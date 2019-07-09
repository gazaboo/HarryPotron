var camera;
let canvas;
 
let i = 3; 
console.log(i); 

function setup() {
    //canvas = createCanvas();
    //canvas.size(640, 480); 
    createCanvas(640, 480);
}

function draw() {
   
    background(128);
    ellipse(50,50,80,80); 
  
    // nous indiquons que nous allons ecrire dans la variable "pixels" pour dessiner dans la fenetre
    //loadPixels();




    // une fois que tout les pixels de la fenetre ont été calculés et écrits dans la variable "pixels"
    // nous informons que la fenetre peut etre déssinée
    ///updatePixels();
}
