const width = 800;
const height = 600;
const xvel = 300;
const yvel = 300;

export default class StaticEnvironment{
    constructor(backgroundLayer){
        this.backgroundLayer = backgroundLayer;
    }

    createWalls(){
        var rightWall = this.backgroundLayer.createEntity();
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

        var leftWall = this.backgroundLayer.createEntity();
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

        var topWall = this.backgroundLayer.createEntity();
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

        var botWall = this.backgroundLayer.createEntity();
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

        return [rightWall, leftWall, topWall, botWall];
    }

    createGrass(){
        
        var grass = this.backgroundLayer.createEntity();
        
        grass.pos = { x: 0, y: 0 };
        grass.asset = new PixelJS.Tile();
        grass.asset.prepare({
            name: 'grass.png',
            size: {
                width: width,
                height: height
            }
        });
        return grass;
    }
}

        