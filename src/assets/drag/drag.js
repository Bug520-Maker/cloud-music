window.onload=function() {
    var box = document.querySelector("#app");
    box.onmousedown = function (event) {
        event = event || window.event;
        let ol = event.clientX - box.offsetLeft;
        let ot = event.clientY - box.offsetTop;
        document.onmousemove = function (event) {
            event = event || window.event;
            let x = event.clientX - ol;
            let y = event.clientY - ot;
            box.style.left = x + "px";
            box.style.top = y + "px";
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}