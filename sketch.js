let camera;
let canvas;
let capture;

function setup() {
    canvas = createCanvas(320, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide(); 
    frameRate(60); 

}

function draw() {
   
    background(128);

    // nous indiquons que nous allons ecrire dans la variable "pixels" pour dessiner dans la fenetre
    capture.loadPixels();

    for (let i = 0; i<320; i++){
        for (let j = 0; j<240; j++){
            var index = (i+j*width)*4;
            var brightness = (capture.pixels[index + 0] + capture.pixels[index + 1] + capture.pixels[index + 2])/3;  
            if (brightness > 200){
                capture.pixels[index + 1] = 0;
            }
        }        
    }

    capture.updatePixels(); 
    image(capture, 0, 0);

  





    // une fois que tout les pixels de la fenetre ont été calculés et écrits dans la variable "pixels"
    // nous informons que la fenetre peut etre déssinée
    ///updatePixels();
}
