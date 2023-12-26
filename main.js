
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,450);
 
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
   
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX +" difference = " + difference);
    }
}

function draw() {
    background('#00FFFF');

    document.getElementById("font").innerHTML = "Font size of the Text will be = " + difference +"px";
    fill('#FFF1DC');
    textSize(difference);
    text('HEMANG', 50, 400);
}