import StaticEnvironment from "./staticEnvironment.js";
import ItemCreator from "./items.js";
import Player from "./player.js";

const width = 800;
const height = 600;
const xvel = 300;
const yvel = 300;


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var game = new PixelJS.Engine();
        game.init({
            container: 'game_container',
            width: width,
            height: height
        });

        var backgroundLayer = game.createLayer('background');
        backgroundLayer.static = true;

        var staticEnvironment = new StaticEnvironment(backgroundLayer);
        var rightWall, leftWall, topWall, botWall;
        var grass;

        [rightWall, leftWall, topWall, botWall] = staticEnvironment.createWalls();
        grass = staticEnvironment.createGrass();

        var playerLayer = game.createLayer("players");
        var player = Player.createPlayer(playerLayer);

        var itemLayer = game.createLayer('items');
        var itemCreator = new ItemCreator(itemLayer);

        var coin, compost, garbage, recycling;
        [coin, compost, garbage, recycling] = itemCreator.createItems()


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

        var glass_bottle = pickupLayer.createEntity();
        glass_bottle.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        glass_bottle.size = { width: 20, height: 40 };
        glass_bottle.asset = new PixelJS.AnimatedSprite();
        glass_bottle.asset.prepare({
            name: 'glass_bottle.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        glass_bottle.opacity = 0;


        var paper_bag = pickupLayer.createEntity();
        paper_bag.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        paper_bag.size = { width: 20, height: 40 };
        paper_bag.asset = new PixelJS.AnimatedSprite();
        paper_bag.asset.prepare({
            name: 'paper_bag.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        paper_bag.opacity = 0;

        var newspaper = pickupLayer.createEntity();
        newspaper.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        newspaper.size = { width: 50, height: 35 };
        newspaper.asset = new PixelJS.AnimatedSprite();
        newspaper.asset.prepare({
            name: 'newspaper.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        newspaper.opacity = 0;

        var soda_can = pickupLayer.createEntity();
        soda_can.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        soda_can.size = { width: 35, height: 45 };
        soda_can.asset = new PixelJS.AnimatedSprite();
        soda_can.asset.prepare({
            name: 'soda_can.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        soda_can.opacity = 0;

        var pizza_box = pickupLayer.createEntity();
        pizza_box.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        pizza_box.size = { width: 50, height: 30 };
        pizza_box.asset = new PixelJS.AnimatedSprite();
        pizza_box.asset.prepare({
            name: 'pizza_box.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        pizza_box.opacity = 0;

        var mug = pickupLayer.createEntity();
        mug.pos = {
            x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
            y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
        };
        mug.size = { width: 50, height: 30 };
        mug.asset = new PixelJS.AnimatedSprite();
        mug.asset.prepare({
            name: 'mug.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });
        mug.opacity = 0;


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
                tempRedraw();
                water_bottle.dispose();
                water_bottle = null;
            }
            if (entity == cup && temp == "") {
                temp = "styrofoam cup";
                tempRedraw();
                cup.dispose();
                cup = null;
            }
            if (entity == pweeza && temp == "") {
                temp = "pweeza";
                tempRedraw();
                pweeza.dispose();
                pweeza = null;
            }
            if (entity == glass_bottle && temp == "") {
                temp = "glass bottle";
                tempRedraw();
                glass_bottle.dispose();
                glass_bottle = null;
            }
            if (entity == paper_bag && temp == "") {
                temp = "paper bag";
                tempRedraw();
                paper_bag.dispose();
                paper_bag = null;
            }
            if (entity == newspaper && temp == "") {
                temp = "newspaper";
                tempRedraw();
                newspaper.dispose();
                newspaper = null;
            }
            if (entity == soda_can && temp == "") {
                temp = "soda can";
                tempRedraw();
                soda_can.dispose();
                soda_can = null;
            }
            if (entity == pizza_box && temp == ""){
                temp = "dirty pizza box";
                tempRedraw();
                pizza_box.dispose();
                pizza_box = null;
            }
            if (entity == mug && temp == ""){
                temp = "broken glass mug";
                tempRedraw();
                mug.dispose();
                mug = null;
            }

            if (entity === compost || entity === recycling || entity === garbage) {
                
                if (entity === recycling) {
                    if (temp === "water bottle") {
                        updateScoreHolding();
                        //show next item
                        pickupLayer.registerCollidable(cup);
                        cup.opacity = 1;
                    }
                    if (temp === "glass bottle") {
                        updateScoreHolding();
                        //show next item
                        pickupLayer.registerCollidable(paper_bag);
                        paper_bag.opacity = 1;

                    }
                    if (temp === "newspaper") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(soda_can);
                        soda_can.opacity = 1;
                    }
                    if (temp === "soda can") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(pizza_box);
                        pizza_box.opacity = 1;
                    }
                }
                if (entity === garbage) {
                    if (temp === "styrofoam cup") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(pweeza);
                        pweeza.opacity = 1;
                    }
                    if (temp === "broken glass mug") {
                        updateScoreHolding();
                    }

                }
                if (entity === compost) {
                    if (temp === "pweeza") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(glass_bottle);
                        glass_bottle.opacity = 1;
                    }
                    if (temp === "paper bag") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(newspaper);
                        newspaper.opacity = 1;
                    }
                    if (temp === "dirty pizza box") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(mug);
                        mug.opacity = 1;
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

        var gameOverLayer = game.createLayer("gameover");
        gameOverLayer.static = true;

        function updateScoreHolding(){
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

        function tempRedraw(){
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

        function displayGameOver() {
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

        var updateTimer = function (elapsedTime) {
            scoreLayer.redraw = true;
            scoreLayer.drawText(
                'Timer: ' + Math.round(elapsedTime / 1000),
                700,
                50,
                '14pt "Trebuchet MS", Helvetica, sans-serif',
                '#FFFFFF',
                'left'
            );
        }

        var timeGiven = 40000;
        game.loadAndRun(function (elapsedTime, dt) {
            updateTimer(elapsedTime);
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

            if (player.collidesWith(compost) || player.collidesWith(recycling) || player.collidesWith(garbage)){
                player.canMoveDown = false;
            } else {
                player.canMoveDown = true;
            }
            setTimeout(function () {
                displayGameOver();
            }, timeGiven);
        });
    }
}