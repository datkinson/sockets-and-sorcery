var width = $(window).width();
var height = $(window).height();

// create an new instance of a pixi stage
var stage = new PIXI.Stage(0x6495ED);

var myDisplayResolution = window.devicePixelRatio;
 
// create an options object and include our resolution
var renderOptions = {
    resolution:myDisplayResolution
};
// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(width, height, renderOptions);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

// create a texture from an image path
var texture = PIXI.Texture.fromImage("/img/player.png");

// create many players
var players = [];

// create a new Sprite using the texture
//var player = new PIXI.Sprite(texture);
//
//player.scale.x = 0.5;
//player.scale.y = 0.5;
//
//// center the sprites anchor point
//player.anchor.x = 0.5;
//player.anchor.y = 0.5;
//
//// move the sprite to the center of the screen
//player.position.x = width/2;
//player.position.y = height/2;
//
//stage.addChild(player);

function animate() {

    requestAnimFrame( animate );

//    player.rotation += 0.1;
    
    players.forEach(function(item) {
        item.rotation += 0.1;
    });

    renderer.render(stage);
}

function generatePlayers(number) {
    number+=1;
    for (i = 1; i < number; i++) {
        players[i] = new PIXI.Sprite(texture);
        players[i].scale.x = 0.5;
        players[i].scale.y = 0.5;
        players[i].anchor.x = 0.5;
        players[i].anchor.y = 0.5;
        players[i].position.x = ((width/number)*i);
        players[i].position.y = height/2;
        stage.addChild(players[i]);
    }
}
generatePlayers(3);