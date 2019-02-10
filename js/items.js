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

        var garbage = this.itemLayer.createEntity();
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

        var recycling = this.itemLayer.createEntity();
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

        return [coin, compost, garbage, recycling];
    }
}

        