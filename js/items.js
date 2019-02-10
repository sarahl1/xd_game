const width = 800;
const height = 600;
const xvel = 300;
const yvel = 300;

export default class ItemCreator{
    constructor(itemLayer){
        this.itemLayer = itemLayer;
    }

    createItems(){
        var coin = this.itemLayer.createEntity();
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

        var compost = this.itemLayer.createEntity();
        compost.pos = { x: 0, y: height - 72 };
        compost.size = { width: 266, height: 50 };
        compost.asset = new PixelJS.AnimatedSprite();
        compost.asset.prepare({
            name: 'compostRow.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var garbage = this.itemLayer.createEntity();
        garbage.pos = { x: 266, y: height - 72 };
        garbage.size = { width: 266, height: 50 };
        garbage.asset = new PixelJS.AnimatedSprite();
        garbage.asset.prepare({
            name: 'garbageRow.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        var recycling = this.itemLayer.createEntity();
        recycling.pos = { x: 266 * 2, y: height - 72 };
        recycling.size = { width: 266, height: 50 };
        recycling.asset = new PixelJS.AnimatedSprite();
        recycling.asset.prepare({
            name: 'recyclingRow.png',
            frames: 1,
            rows: 1,
            speed: 80,
            defaultFrame: 0
        });

        return [coin, compost, garbage, recycling];
    }
}

        