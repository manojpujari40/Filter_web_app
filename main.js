mouthX=0;
mouthY=0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Intailized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mouthX = results[0].pose.nose.x + 15;
        mouthY = results[0].pose.nose.y + 50;
        console.log("mouth x =" + mouthX);
        console.log("mouth y =" + mouthY);
    }
}
function draw(){
    image(video, 0, 0, 380, 380);
    image(mustache, mouthX, mouthY, 50, 40);
}
function take_snapshot(){
    save("filter.png");
}