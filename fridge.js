img="";
status="";
objects=[];
function preload() {
    img=loadImage("fridge.jpg")
}
function setup() {
        canvas=createCanvas(400,309);
        canvas.center();
        objectDetector =ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}