let camera;
let canvas;
let capture;
let threshSlider; 

function setup() {
    canvas = createCanvas(320, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide(); 
    frameRate(60); 

    threshSlider = createSlider(0, 255, 100);
    threshSlider.position(20, 210);
    textSize(12);
    noStroke();
  


}

function draw() {
   
    background(128);

    capture.loadPixels();
    const thresh = threshSlider.value();
    for (let i = 0; i<320; i++){
        for (let j = 0; j<240; j++){
            var index = (i+j*width)*4;
            var brightness = (capture.pixels[index + 0] + capture.pixels[index + 1] + capture.pixels[index + 2])/3;  
            if (brightness > thresh){
                capture.pixels[index + 1] = 0;
            }
        }        
    }

    capture.updatePixels(); 
    image(capture, 0, 0);
    text('Brightness threshold', 180, 225);






    // une fois que tout les pixels de la fenetre ont été calculés et écrits dans la variable "pixels"
    // nous informons que la fenetre peut etre déssinée
    ///updatePixels();
}
