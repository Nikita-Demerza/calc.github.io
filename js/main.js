function a(i){
    var b = $("#result");
    b.append(i);
}
function del(){
    $("#result").empty();
}
function eq(){
    var h = $("#result").text();
    var g = eval(h);
    $("#result").text(g);
}
