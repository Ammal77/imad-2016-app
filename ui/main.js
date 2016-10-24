
var ele=document.getElementById('img');
var marginLeft = 0;
function moveRight(){
 marginLeft =marginLeft + 1;
 ele.style.marginLeft = marginLeft + 'px';
}
ele.onclick=function(){
    var interval = setInterval(moveRight,5);
};
