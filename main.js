noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(300,150);

    canvas = createCanvas(400,400);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwrist = " +leftWristX + " rightwrist = "+rightWristX + " difference = " + difference);
    }

}
function draw(){
    background("#969A97");
    fill('##299fc3');
    textSize(difference);
    text('Ronav', 50, 200);
    document.getElementById("fontsize").innerHTML = "The font size will be - " + difference+"px";

}

function modelLoaded(){
    console.log("Posenet is intialized!");
}

