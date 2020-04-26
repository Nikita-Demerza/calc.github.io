function a(i){
    var b = $("#result");
    b.append(i);
}
function del(){
    $("#result").empty();
}
function back(){
    document.getElementById("result").innerHTML =document.getElementById("result").innerHTML.substring(0,document.getElementById("result").innerHTML.length-1);
}
function eq(){
    var h = $("#result").text();
    var g = eval(h);
    $("#result").text(g);
}
function sin(num){
    return Math.sin(num)
}
function cos(num){
    return Math.cos(num)
}
function tan(num){
    return Math.tan(num)
}
function cot(num){
    return 1/Math.tan(num)
}
function asin(num){
    return Math.asin(num)
}
function acos(num){
    return Math.acos(num)
}
function atan(num){
    return Math.atan(num)
}
function acot(num){
    return Math.PI / 2 - Math.atan(num)
}

