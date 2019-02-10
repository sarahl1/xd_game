const width = 800;
const height = 600;
const xvel = 200;
const yvel = 200;

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var game = new PixelJS.Engine();
        game.init({
            container: 'game_container',
            width: width,
            height: height
        });


        var backgroundLayer = game.createLayer('background');
        var grass = backgroundLayer.createEntity();
        backgroundLayer.static = true;
        grass.pos = { x: 0, y: 0 };
        grass.asset = new PixelJS.Tile();
        grass.asset.prepare({
            name: 'grass.png',
            size: {
                width: width,
                height: height
            }
        });

        var rightWall = backgroundLayer.createEntity();
        rightWall.pos = { x: width, y: 0 };
        rightWall.size = { width: 10, height: height };
        rightWall.asset = new PixelJS.AnimatedSprite();
        rightWall.asset.prepare({
            name: 'garbagefire.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var leftWall = backgroundLayer.createEntity();
        leftWall.pos = { x: -420, y: 0 };
        leftWall.size = {width: 420, height: height};
        leftWall.asset = new PixelJS.AnimatedSprite();
        leftWall.asset.prepare({
            name: 'garbagefire.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var topWall = backgroundLayer.createEntity();
        topWall.pos = { x: 0, y: -430 };
        topWall.size = {width: width, height: 430};
        topWall.asset = new PixelJS.AnimatedSprite();
        topWall.asset.prepare({
            name: 'garbagefire.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var botWall = backgroundLayer.createEntity();
        botWall.pos = { x: 0, y: height };
        botWall.size = {width: width, height: 10};
        botWall.asset = new PixelJS.AnimatedSprite();
        botWall.asset.prepare({
            name: 'garbagefire.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var playerLayer = game.createLayer("players");
        var player = new PixelJS.Player();
        player.addToLayer(playerLayer);
        player.pos = { x: 250, y: 300 };
        player.size = { width: 64, height: 64 };
        player.velocity = { x: xvel, y: yvel };
        player.asset = new PixelJS.AnimatedSprite();
        player.asset.prepare({
            name: 'char.png',
            frames: 4,
            rows: 4,
            speed: 50,
            defaultFrame: 1
        });


        var itemLayer = game.createLayer('items');
        var coin = itemLayer.createEntity();
        coin.pos = { x: 400, y: 150 };
        coin.size = { width: 12, height: 16 };
        coin.asset = new PixelJS.AnimatedSprite();
        coin.asset.prepare({
            name: 'coin.png',
            frames: 8,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var compost = itemLayer.createEntity();
        compost.pos = { x: 420, y: 170 };
        compost.size = { width: 16, height: 16 };
        compost.asset = new PixelJS.AnimatedSprite();
        compost.asset.prepare({
            name: 'compost.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var itemLayer1 = game.createLayer('items1');
        var fire = itemLayer1.createEntity();
        fire.pos = { x: 200, y: 100 };
        fire.size = { width: 16, height: 16 };
        fire.asset = new PixelJS.AnimatedSprite();
        fire.asset.prepare({
            name: 'garbagefire.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        itemLayer1.visible = false;

        var collectSound = game.createSound('collect');
        collectSound.prepare({ name: 'coin.mp3' });

        player.onCollide(function (entity) {
            if (entity === coin) {
                collectSound.play();
                coin.pos = {
                    x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
                    y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
                };
                score += 1;
                scoreLayer.redraw = true;
                scoreLayer.drawText(
                    'Coins: ' + score,
                    50,
                    50,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
            } if (entity === compost) {
                player.pos = { x: 0, y: 0 };
                setTimeout(function () {
                    player.velocity = { x: xvel, y: yvel };
                }, 500);
            } if (entity === rightWall){
                player.pos.x = rightWall.pos.x-68;
            } if (entity === leftWall){
                player.pos.x = leftWall.pos.x+425;
            } if (entity === topWall){
                player.pos.y = topWall.pos.y+435;
            } if (entity === botWall){
                player.pos.y = botWall.pos.y-68;
            }

        });

        backgroundLayer.registerCollidable(rightWall);
        backgroundLayer.registerCollidable(leftWall);
        backgroundLayer.registerCollidable(topWall);
        backgroundLayer.registerCollidable(botWall);
        
        playerLayer.registerCollidable(player);
        itemLayer.registerCollidable(coin);
        itemLayer.registerCollidable(compost);




        var score = 0;
        var scoreLayer = game.createLayer("score");
        scoreLayer.static = true;

        var holding = "";
        var holdingLayer = game.createLayer("holding");
        holdingLayer.static = true;


        function updateTime() {
            playerLayer.visible = false;
            itemLayer.visible = false;
            itemLayer1.visible = true;
        }

        game.loadAndRun(function (elapsedTime, dt) {
            setTimeout(function () {
                updateTime();
            }, 60000);

        });
    }
}