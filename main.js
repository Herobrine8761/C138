img = "";
status = "";
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Objects have been detected."
}

function modelLoaded(){
    console.log("Model has been loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        // Dog Outline
        fill("#FF0000");
        text("Dog", 45, 75);
        noFill();
        stroke("#FF0000");
        rect(30, 60, 450, 350);
    
        // Cat Outline
        fill("#FF0000");
        text("Cat", 320, 120);
        noFill();
        stroke("#FF0000");
        rect(300, 90, 270, 320);

        // Bowl Outline
        fill("#FF0000");
        text("Bowl", 310, 350);
        noFill();
        stroke("#FF0000");
        rect(280, 330, 115, 75)
    }
}