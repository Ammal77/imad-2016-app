
var ele=document. getElementById('img');
function moveRight(){
 marginLeft =marginLeft + 10;
 ele.style.marginLeft = marginLeft + 'px';
}
ele.onclick=function(){
    var interval = setInterval(moveRight,50);
};