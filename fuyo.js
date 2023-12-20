var img="";
var objects=[];
var status="";

function preload () {
video=createVideo("bugatti.mp4")
}

function setup () {
canvas=createCanvas(500,600);
canvas.center();
video.hide();
}
function draw () {
image(video,0,0,500,600);
}
function licuuf () {
objectDetector=ml5.objectDetector("cocossd",jax);
document.getElementById("status").innerHTML="ojecto tetectado";
}
function jax () {
console.log("cargado modelo");
status=true;
video.loop();
video.speed(1);
video.volume(2);
}
function lambo (error,results){
if(error){
console.log("error");
}
else{
console.log("results");
objects=results;
}
}
function draw (){
image(video,0,0,500,600);
if (status!="") {
objectDetector.detect(video,lambo);
    for (var i = 0; i < objects.length; i++) {
    
    fill(255, 0, 0);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke(255,0,0);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
    }
    
    }
    }