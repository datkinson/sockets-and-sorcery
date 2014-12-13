window.onload = function() {

    var socket = io.connect(window.location.origin);
    var url = document.getElementById("url");
    var width = document.getElementById("width");
    var height = document.getElementById("height");
    var left = document.getElementById("left");
    var top = document.getElementById("top");
    var sendButton = document.getElementById("send");

    sendButton.onclick = sendMessage = function() {
        socket.emit('send', { message: 'changes', url: url.value, width: width.value, height: height.value, left: left.value, top: top.value, });
    };

};
