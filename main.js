ilaya_nila="";
believer="";
function preload(){
    ilaya_nila=loadSound("ilaya-nila.mp3");
    believer=loadSound("believer.mp3");
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
}
function draw() 
{
    image(video,0,0,500,500);
}