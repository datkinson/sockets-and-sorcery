window.onload = function() {

    var socket = io.connect(window.location.origin);
    var frame = document.getElementById("frame");

    socket.on('message', function (data) {
        
	if(typeof(data.width) !== 'undefined') {
	    if(data.width.indexOf('px') == -1 && data.width.indexOf('%') == -1){
                data.width = data.width + 'px';
	    }
            jQuery('#frame').css('width', data.width);
        }

        if(typeof(data.height) !== 'undefined') {
	    if(data.height.indexOf('px') == -1 && data.height.indexOf('%') == -1){
                data.height = data.height + 'px';
	    }
            jQuery('#frame').css('height', data.height);
        }

        if(typeof(data.top) !== 'undefined') {
	    if(data.top.indexOf('px') == -1 && data.top.indexOf('%') == -1){
                data.top = data.top + 'px';
	    }
            jQuery('#frame').css('top', data.top);
        }

        if(typeof(data.left) !== 'undefined') {
	    if(data.left.indexOf('px') == -1 && data.left.indexOf('%') == -1){
                data.left = data.left + 'px';
	    }
            jQuery('#frame').css('left', data.left);
        }

        jQuery('#frame').attr('src', data.url);
    });


};
