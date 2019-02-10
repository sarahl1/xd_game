const width = 800;
const height = 600;
const xvel = 300;
const yvel = 300;
var max = 0;

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
        leftWall.size = { width: 420, height: height };
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
        topWall.size = { width: width, height: 430 };
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
        botWall.size = { width: width, height: 10 };
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
        player.pos = { x: width / 2, y: height / 2 - 100 };
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
        coin.pos = { x: 400, y: 450 };
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
        compost.pos = { x: width / 3, y: height / 2 };
        compost.size = { width: 12, height: 16 };
        compost.asset = new PixelJS.AnimatedSprite();
        compost.asset.prepare({
            name: 'compost.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var garbage = itemLayer.createEntity();
        garbage.pos = { x: width / 2 + 20, y: height / 2 };
        garbage.size = { width: 10, height: 16 };
        garbage.asset = new PixelJS.AnimatedSprite();
        garbage.asset.prepare({
            name: 'garbage.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var recycling = itemLayer.createEntity();
        recycling.pos = { x: (width * 2) / 3 + 20, y: height / 2 };
        recycling.size = { width: 12, height: 16 };
        recycling.asset = new PixelJS.AnimatedSprite();
        recycling.asset.prepare({
            name: 'recycling.png',
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

        var pickupLayer = game.createLayer('pickup');
        var water_bottle = pickupLayer.createEntity();
        water_bottle.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        water_bottle.size = { width: 10, height: 35 };
        water_bottle.asset = new PixelJS.AnimatedSprite();
        water_bottle.asset.prepare({
            name: 'water_bottle.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var cup = pickupLayer.createEntity();
        cup.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        cup.size = { width: 10, height: 35 };
        cup.asset = new PixelJS.AnimatedSprite();
        cup.asset.prepare({
            name: 'cup.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        cup.opacity = 0;

        var pweeza = pickupLayer.createEntity();
        pweeza.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        pweeza.size = { width: 40, height: 40 };
        pweeza.asset = new PixelJS.AnimatedSprite();
        pweeza.asset.prepare({
            name: 'pweeza.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        pweeza.opacity = 0;

        var collectSound = game.createSound('collect');
        collectSound.prepare({ name: 'coin.mp3' });

        var temp = "";
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
            if (entity == water_bottle && temp == "") {
                temp = "water bottle";
                holdingLayer.redraw = true;
                holdingLayer.drawText(
                    'Holding: ' + temp,
                    50,
                    80,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
                water_bottle.dispose();
                water_bottle = null;
            }
            if (entity == cup && temp == "") {
                temp = "styrofoam cup";
                holdingLayer.redraw = true;
                holdingLayer.drawText(
                    'Holding: ' + temp,
                    50,
                    80,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
                cup.dispose();
                cup = null;
            }
            if (entity == pweeza && temp == "") {
                temp = "pweeza";
                holdingLayer.redraw = true;
                holdingLayer.drawText(
                    'Holding: ' + temp,
                    50,
                    80,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
                pweeza.dispose();
                pweeza = null;
            }
            if (entity === compost || entity === recycling || entity === garbage) {
                player.velocity = { x: 0, y: 0 };
                setTimeout(function () {
                    player.velocity = { x: xvel, y: yvel };
                }, 500);
                if (entity === recycling) {
                    if (temp === "water bottle") {
                        collectSound.play();
                        temp = "";
                        //update score
                        score += 5;
                        scoreLayer.redraw = true;
                        scoreLayer.drawText(
                            'Coins: ' + score,
                            50,
                            50,
                            '14pt "Trebuchet MS", Helvetica, sans-serif',
                            '#FFFFFF',
                            'left'
                        );
                        //update holding
                        holdingLayer.redraw = true;
                        holdingLayer.drawText(
                            'Holding: ' + temp,
                            50,
                            80,
                            '14pt "Trebuchet MS", Helvetica, sans-serif',
                            '#FFFFFF',
                            'left'
                        );
                        //show next item
                        pickupLayer.registerCollidable(cup);
                        cup.opacity = 1;
                    }
                }
                if (entity === garbage) {
                    if (temp === "styrofoam cup") {
                        collectSound.play();
                        temp = "";
                        score += 5;
                        scoreLayer.redraw = true;
                        scoreLayer.drawText(
                            'Coins: ' + score,
                            50,
                            50,
                            '14pt "Trebuchet MS", Helvetica, sans-serif',
                            '#FFFFFF',
                            'left'
                        );
                        holdingLayer.redraw = true;
                        holdingLayer.drawText(
                            'Holding: ' + temp,
                            50,
                            80,
                            '14pt "Trebuchet MS", Helvetica, sans-serif',
                            '#FFFFFF',
                            'left'
                        );
                        pickupLayer.registerCollidable(pweeza);
                        pweeza.opacity = 1;
                    }
                }
                if (entity === compost) {
                    if (temp === "pweeza") {
                        collectSound.play();
                        temp = "";
                        score += 5;
                        scoreLayer.redraw = true;
                        scoreLayer.drawText(
                            'Coins: ' + score,
                            50,
                            50,
                            '14pt "Trebuchet MS", Helvetica, sans-serif',
                            '#FFFFFF',
                            'left'
                        );
                        holdingLayer.redraw = true;
                        holdingLayer.drawText(
                            'Holding: ' + temp,
                            50,
                            80,
                            '14pt "Trebuchet MS", Helvetica, sans-serif',
                            '#FFFFFF',
                            'left'
                        );
                    }
                }
            } if (entity === rightWall) {
                player.pos.x = rightWall.pos.x - 68;
            } if (entity === leftWall) {
                player.pos.x = leftWall.pos.x + 425;
            } if (entity === topWall) {
                player.pos.y = topWall.pos.y + 435;
            } if (entity === botWall) {
                player.pos.y = botWall.pos.y - 68;
            }

        });

        backgroundLayer.registerCollidable(rightWall);
        backgroundLayer.registerCollidable(leftWall);
        backgroundLayer.registerCollidable(topWall);
        backgroundLayer.registerCollidable(botWall);
        backgroundLayer.registerCollidable(compost);
        backgroundLayer.registerCollidable(garbage);
        backgroundLayer.registerCollidable(recycling);

        playerLayer.registerCollidable(player);
        itemLayer.registerCollidable(coin);
        itemLayer.registerCollidable(compost);

        pickupLayer.registerCollidable(water_bottle);


        var score = 0;
        var scoreLayer = game.createLayer("score");
        scoreLayer.static = true;


        var holdingLayer = game.createLayer("holding");
        holdingLayer.static = true;

        var timer = 0;
        var timerLayer = game.createLayer("timer");
        timerLayer.static = true;

        var gameOverLayer = game.createLayer("gameover");
        gameOverLayer.static = true;


        function updateTime() {
            playerLayer.visible = false;
            itemLayer.visible = false;
            itemLayer1.visible = true;
            pickupLayer.visible = false;
            gameOverLayer.redraw = true;
            gameOverLayer.drawText(
                'GAME OVER',
                width / 2 - 45,
                height - 40,
                '14pt "Trebuchet MS", Helvetica, sans-serif',
                '#FFFFFF',
                'left'
            )
        }

        var timeGiven = 40000;
        game.loadAndRun(function (elapsedTime, dt) {
            // setInterval(function () {
            //     timerLayer.redraw = true;
            //     timerLayer.drawText(
            //         timer++,
            //         50,
            //         550,
            //         '14pt "Trebuchet MS", Helvetica, sans-serif',
            //         '#FFFFFF',
            //         'left'
            //     );
            // }, 1000);
            scoreLayer.redraw = true;
            scoreLayer.drawText(
                'Coins: ' + score,
                50,
                50,
                '14pt "Trebuchet MS", Helvetica, sans-serif',
                '#FFFFFF',
                'left'
            );
            holdingLayer.redraw = true;
            holdingLayer.drawText(
                'Holding: ' + temp,
                50,
                80,
                '14pt "Trebuchet MS", Helvetica, sans-serif',
                '#FFFFFF',
                'left'
            );

            setTimeout(function () {
                updateTime();
            }, timeGiven);
        });
    }
}