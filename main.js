cradles = "";
faded = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    cradles = loadSound("Cradles.mp3");
    faded = loadSound("Faded.mp3");
}

function setup(){
    canvas = createCanvas(550,550);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}

function gotposes(results){
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function modelLoaded(){
    console.log("model is working neat and fine")
}

function draw(){
    image(video,0,0,560,550);
}