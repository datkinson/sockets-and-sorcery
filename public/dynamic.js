window.onload = function() {

    var socket = io.connect('http://localhost:3700');
    var frame = document.getElementById("frame");

    socket.on('message', function (data) {
        jQuery('#frame').attr('src', data.url);
        jQuery('#frame').css('width', data.width + 'px');
        jQuery('#frame').css('height', data.height + 'px');
        jQuery('#frame').css('left', data.left + 'px');
        jQuery('#frame').css('top', data.top + 'px');
    });


};
