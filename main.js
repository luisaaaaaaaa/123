noseX=0
noseY=0
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){

    var video=createCapture(VIDEO);
    video.size(550,500);

    var canvas=createCanvas(550,500);
canvas.position(560,150)

var poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded() 
{ console.log('PoseNet Is Initialized!');
 }

function draw(){
    background("#FF6600")
    document.getElementById("square_side").innerHTML="A altura e a largura serão: "+difference+"px"
    fill("#009CC")
    stroke("#993300")
    square(noseX,noseY,difference)
}

function gotPoses(results){
if(results.length>0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
}
}