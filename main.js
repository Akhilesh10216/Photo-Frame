function preload(){

}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
}

function draw(){
    circle(30, 30, 30);
    c = color(255, 204, 0);
    fill(c);

    circle(30, 280, 30);
    c = color(255, 204, 0);;
    fill(c);

    circle(280, 280, 30);
    c = color(255, 204, 0);
    fill(c);

    circle(280, 30, 30);
    c = color(255, 204, 0);
    fill(c);

    rect(60, 30, 55, 55);
}