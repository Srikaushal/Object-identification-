img= "";
state="";
objects= [];

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
    if (state !=""){
        for (i=0; i<objects.length ; i++){
            document.getElementById("status").innerHTML = "Status : Objects detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x+5, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x , objects[i].y ,objects[i].width , objects[i].height )
        }
    }

    
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
        objects = results;
    }
    
}

