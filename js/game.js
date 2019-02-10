document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var game = new PixelJS.Engine();
        game.init({
            container: 'game_container',
            width: 800,
            height: 600
        });


        var backgroundLayer = game.createLayer('background');
        var grass = backgroundLayer.createEntity();
        backgroundLayer.static = true;
        grass.pos = { x: 0, y: 0 };
        grass.asset = new PixelJS.Tile();
        grass.asset.prepare({
            name: 'grass.png',
            size: {
                width: 800,
                height: 600
            }
        });

        var playerLayer = game.createLayer("players");
        var player = new PixelJS.Player();
        player.addToLayer(playerLayer);
        player.pos = { x: 250, y: 300 };
        player.size = { width: 64, height: 64 };
        player.velocity = { x: 200, y: 200 };
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

        var itemLayer1 = game.createLayer('items1');
        var fire = itemLayer1.createEntity();
        fire.pos = { x: 200, y: 100};
        fire.size = {width: 16, height: 16};
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
            }

        });

        playerLayer.registerCollidable(player);
        itemLayer.registerCollidable(coin);



        var score = 0;
        var scoreLayer = game.createLayer("score");
        scoreLayer.static = true;

        var holding = "";
        var holdingLayer = game.createLayer("holding");
        holdingLayer.static = true;


        function updateTime(){
                playerLayer.visible = false;
                itemLayer.visible = false;
                itemLayer1.visible = true;
        }

        game.loadAndRun(function (elapsedTime, dt) {
            setTimeout(function(){
                updateTime();
            }, 2000);

        });
    }
}