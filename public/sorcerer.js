var stage = new PIXI.Stage(0x66FF99);
 
// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

function animate() {

    requestAnimFrame( animate );

    // render the stage   
    renderer.render(stage);
}