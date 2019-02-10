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

        function initPickups(entity, width, height) {
            var entity = pickupLayer.createEntity();
            entity.pos = {
                x: Math.floor(Math.random() * (700 - 100 + 1) + 100),
                y: Math.floor(Math.random() * (500 - 100 + 1) + 100)
            };
            entity.size = { width: 10, height: 35 };
            entity.asset = new PixelJS.AnimatedSprite();
            entity.asset.prepare({
                name: entity + '.png',
                frames: 1,
                rows: 1,
                speed: 80,
                defaultFrame: 0
            });
        }

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
            if (entity == glass_bottle && temp == "") {
                temp = "glass bottle";
                holdingLayer.redraw = true;
                holdingLayer.drawText(
                    'Holding: ' + temp,
                    50,
                    80,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
                glass_bottle.dispose();
                glass_bottle = null;
            }
            if (entity == paper_bag && temp == "") {
                temp = "paper bag";
                holdingLayer.redraw = true;
                holdingLayer.drawText(
                    'Holding: ' + temp,
                    50,
                    80,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
                paper_bag.dispose();
                paper_bag = null;
            }
            if (entity == newspaper && temp == "") {
                temp = "newspaper";
                holdingLayer.redraw = true;
                holdingLayer.drawText(
                    'Holding: ' + temp,
                    50,
                    80,
                    '14pt "Trebuchet MS", Helvetica, sans-serif',
                    '#FFFFFF',
                    'left'
                );
                newspaper.dispose();
                newspaper = null;
            }
            if (entity === compost || entity === recycling || entity === garbage) {
                player.velocity = { x: 0, y: 0 };
                setTimeout(function () {
                    player.velocity = { x: xvel, y: yvel };
                }, 500);
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
                    }
                }
                if (entity === garbage) {
                    if (temp === "styrofoam cup") {
                        updateScoreHolding();
                        pickupLayer.registerCollidable(pweeza);
                        pweeza.opacity = 1;
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

        var updateTimer = function (elapsedTime) {
            scoreLayer.redraw = true;
            scoreLayer.drawText(
                'Timer: ' + Math.round(elapsedTime / 1000),
                50,
                570,
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

            setTimeout(function () {
                updateTime();
            }, timeGiven);
        });
    }
}