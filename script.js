// Canvas
// canvas setup
var cnv = document.getElementById("canva");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// The Background
ctx.fillStyle = " lightblue";
ctx.fillRect(0, 0, 500, 500);

// Frame
ctx.fillStyle = "mediumPurple";
ctx.beginPath();
ctx.arc(210, 175, 160, 0, 2 * Math.PI);
ctx.fill();

// Square #1
ctx.fillStyle = "pink";
ctx.fillRect(90, 73, 90, 90);

// Square #2
ctx.fillStyle = "LightGoldenRodYellow";
ctx.fillRect(225, 100, 90, 90);

// Square #3
ctx.fillStyle = "PaleTurquoise";
ctx.fillRect(115, 210, 90, 90);

// Circle #1
ctx.fillStyle = "PaleTurquoise";
ctx.beginPath();
ctx.arc(135, 118, 25, 0, 2 * Math.PI);
ctx.fill();

// Circle #2

ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(270, 145, 25, 0, 2 * Math.PI);
ctx.fill();

// Circle #3

ctx.fillStyle = "LightGoldenRodYellow";
ctx.beginPath();
ctx.arc(157, 255, 25, 0, 2 * Math.PI);
ctx.fill();

// Pot #1
ctx.fillStyle = "SaddleBrown";
ctx.fillRect(0, 380, 130, 500);

// Pot #2
ctx.fillStyle = "SaddleBrown";
ctx.fillRect(370, 380, 500, 500);

// Plant #1
ctx.fillStyle = "OliveDrab";
ctx.fillRect(20, 300, 80, 80);

// Plant #2
ctx.fillStyle = "OliveDrab";
ctx.fillRect(400, 300, 80, 80);

//  Butterfly Image
var butterfly = document.getElementById("butterfly");
ctx.drawImage(butterfly, 360, 0, 139, 100);

// Text
ctx.fillStyle = "black";
ctx.font = "25px Brush Script MT";
ctx.fillText("Art by A.Muhumed", 0, 25);