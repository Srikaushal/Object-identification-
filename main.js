img= "";
state="";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog", 45, 55);
    noFill();
    stroke("#FF0000");
    rect(35,39, 350, 360);

    fill("#0000FF");
    text("Cat", 350, 95);
    noFill();
    stroke("#0000FF");
    rect(300,80, 310, 320);
}

function modelLoaded(){
    console.log("Model Loaded");
    state = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}