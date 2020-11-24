window.takeScreenShot = function() {
    html2canvas(document.getElementById("target"), {
        onrendered: function (canvas) {
            document.body.appendChild(canvas);
        },
        width:320,
        height:220
    });
}