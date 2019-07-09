let camera;
let canvas;
let capture;
let threshSlider; 

function setup() {
    canvas = createCanvas(320, 240);
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide(); 
    img = loadImage('img/pamplemousse.jpg'); 
    threshSlider = createSlider(0, 255, 100);
    threshSlider.position(20, 210);
    textSize(12);
    frameRate(60);  
}

function draw() {
   
    capture.loadPixels();
    const thresh = threshSlider.value();
    for (let i = 0; i<width; i++){
        for (let j = 0; j<height; j++){
            var index = (i+j*width)*4;
            var brightness = (capture.pixels[index + 0] + capture.pixels[index + 1] + capture.pixels[index + 2])/3;  
            if (brightness > thresh){
                capture.pixels[index + 3] = 0;
            }
        }        
    }

    capture.updatePixels(); 
    image(img, 0, 0, width, height); 
    image(capture, 0, 0);
    text('Brightness threshold', 180, 225);
}
