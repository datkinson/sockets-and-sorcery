window.onload = function() {

    var socket = io.connect(window.location.origin);
    var frame = document.getElementById("frame");

    socket.on('message', function (data) {
        if(typeof(data.width) !== 'undefined' && data.width.indexOf('px') > -1){
            data.width = data.width + 'px';
            jQuery('#frame').css('width', data.width);
        }

        if(typeof(data.height) !== 'undefined' && data.height.indexOf('px') > -1){
            data.height = data.height + 'px';
            jQuery('#frame').css('height', data.height);
        }

        if(typeof(data.left) !== 'undefined' && data.left.indexOf('px') > -1){
            data.left = data.left + 'px';
            jQuery('#frame').css('left', data.left);
        }

        if(typeof(data.top) !== 'undefined' && data.top.indexOf('px') > -1){
            data.top = data.top + 'px';
            jQuery('#frame').css('top', data.top);
        }

        jQuery('#frame').attr('src', data.url);
    });


};
