// 创建内存中的div
var div1 = document.createElement('div');
div1.className = "demo";


document.body.appendChild(div1);

var dragging = false;  //标志是否移动
var lastX, lastY;

// 鼠标按下可以移动
div1.onmousedown = function (e) {
    lastX = e.clientX;
    lastY = e.clientY;
    dragging = true;
}

// 鼠标抬起不能移动
div1.onmouseup = function () {
    dragging = false;
}

document.onmousemove = function (e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX;
        var deltaY = e.clientY - lastY;
        var top = parseInt(div1.style.top) || 0;
        var left = parseInt(div1.style.left) || 0;
        var resultX = left + deltaX;
        var resultY = top + deltaY;
        if (resultX < 0) {
            resultX = 0;
        }
        if (resultY < 0) {
            resultY = 0;
        }
        div1.style.top = resultY + 'px';
        div1.style.left = resultX + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
    }

}