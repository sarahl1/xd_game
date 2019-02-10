const width = 800;
const height = 600;
const xvel = 300;
const yvel = 300;

export default class Player{
    constructor(playerLayer){
        
    }

    static createPlayer(playerLayer){
        this.playerLayer = playerLayer;
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

        return player;
    }
}

        