function background_line_init(){
//    var screen_width = window.innerWidth*1.01;
    var screen_width = window.innerWidth*1.345;

    var canvas_1 = document.getElementById("canvas-block-1");
    var canvas_3 = document.getElementById("canvas-block-3");
    var canvas_4 = document.getElementById("canvas-block-4");
    if (canvas_1.getContext) {
        var ctx_1 = canvas_1.getContext("2d");
        var ctx_3 = canvas_3.getContext("2d");
        var ctx_4 = canvas_4.getContext("2d");
        ctx_1.lineWidth   = 1;
        ctx_1.strokeStyle = '#777777'; // blue
        //test
        //line
        ctx_1.moveTo(screen_width/28,20);
        ctx_1.lineTo(screen_width/28,34);
        ctx_1.lineTo(screen_width/5.56,34);
        ctx_1.lineTo(screen_width/5.56,99);
        ctx_1.lineTo(screen_width/28,99);
        ctx_1.lineTo(screen_width/28,150);
        ctx_1.stroke();
        //down array
        //top one
        ctx_1.moveTo(screen_width*0.178,79);
        ctx_1.lineTo(screen_width*0.18,84);
        ctx_1.lineTo(screen_width*0.182,79);
        ctx_1.stroke();
        //down one
        ctx_1.moveTo(screen_width*0.034,145);
        ctx_1.lineTo(screen_width*0.036,150);
        ctx_1.lineTo(screen_width*0.038,145);
        ctx_1.stroke();
        //right array
        //left one
        ctx_1.moveTo(screen_width*0.086,30);
        ctx_1.lineTo(screen_width*0.088,34);
        ctx_1.lineTo(screen_width*0.086,38);
        ctx_1.stroke();
        //right one
        ctx_1.moveTo(screen_width*0.1585,30);
        ctx_1.lineTo(screen_width*0.1605,34);
        ctx_1.lineTo(screen_width*0.1585,38);
        ctx_1.stroke();
        //left array
        //right one
        ctx_1.moveTo(screen_width*0.130,95);
        ctx_1.lineTo(screen_width*0.128,99);
        ctx_1.lineTo(screen_width*0.130,103);
        ctx_1.stroke();
        //left one
        ctx_1.moveTo(screen_width*0.0578,95);
        ctx_1.lineTo(screen_width*0.0558,99);
        ctx_1.lineTo(screen_width*0.0578,103);
        ctx_1.stroke();

        ctx_3.lineWidth   = 1;
        ctx_3.strokeStyle = '#777777'; // blue
        //line
        ctx_3.moveTo(screen_width/28,0);
        ctx_3.lineTo(screen_width/28,18);
        ctx_3.lineTo(screen_width/5.56,18);
        ctx_3.lineTo(screen_width/5.56,93);
        ctx_3.lineTo(screen_width/28,93);
        ctx_3.lineTo(screen_width/28,150);
        ctx_3.stroke();
        //down array
        //top one
        ctx_3.moveTo(screen_width*0.178,70);
        ctx_3.lineTo(screen_width*0.18,75);
        ctx_3.lineTo(screen_width*0.182,70);
        ctx_3.stroke();
        //right array
        //left one
        ctx_3.moveTo(screen_width*0.086,14);
        ctx_3.lineTo(screen_width*0.088,18);
        ctx_3.lineTo(screen_width*0.086,22);
        ctx_3.stroke();
        //right one
        ctx_3.moveTo(screen_width*0.1585,14);
        ctx_3.lineTo(screen_width*0.1605,18);
        ctx_3.lineTo(screen_width*0.1585,22);
        ctx_3.stroke();
        //left array
        //right one
        ctx_3.moveTo(screen_width*0.130,89);
        ctx_3.lineTo(screen_width*0.128,93);
        ctx_3.lineTo(screen_width*0.130,97);
        ctx_3.stroke();
        //left one
        ctx_3.moveTo(screen_width*0.0578,89);
        ctx_3.lineTo(screen_width*0.0558,93);
        ctx_3.lineTo(screen_width*0.0578,97);
        ctx_3.stroke();

        ctx_4.lineWidth   = 1;
        ctx_4.strokeStyle = '#777777'; // blue
        ctx_4.moveTo(screen_width/28,0);
        ctx_4.lineTo(screen_width/28,18);
        ctx_4.lineTo(screen_width/9.2,18);
        ctx_4.lineTo(screen_width/9.2,93);
        ctx_4.stroke();
        //down one
        ctx_4.moveTo(screen_width*0.1065,63);
        ctx_4.lineTo(screen_width*0.1085,68);
        ctx_4.lineTo(screen_width*0.1105,63);
        ctx_4.stroke();
    }
}