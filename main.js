function preload(){
    clown_nose = loadImage("https://i.postimg.cc/sDWnqBbG/Movember-Mustache-PNG-Clipart-Image.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet positive');
}

function draw(){
    image(video, 0,0,300,300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save("myFilterImage.png");
}
 
function gotPoses(){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y;
    }
}