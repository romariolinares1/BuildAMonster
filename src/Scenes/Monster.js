class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        
        this.leftKey = null;
        this.rightKey = null;

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 330;
        
        this.armRX = this.bodyX + 90;
        this.armRY = this.bodyY + 80;

        this.armLX = this.bodyX - 90;
        this.armLY = this.bodyY + 80;

        this.legRX = this.bodyX + 30;
        this.legRY = this.bodyY + 160;

        this.legLX = this.bodyX - 30;
        this.legLY = this.bodyY + 160;

        this.eyeRX = this.bodyX + 40;
        this.eyeRY = this.bodyY - 20;

        this.eyeLX = this.bodyX - 40;
        this.eyeLY = this.bodyY - 20;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 50;

        this.hornRX = this.bodyX + 50;
        this.hornRY = this.bodyY - 90;

        this.hornLX = this.bodyX - 50;
        this.hornLY = this.bodyY - 90;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.input.keyboard.on("keydown-S", (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");
            my.sprite.mouth.x = my.sprite.body.x;
        });

        this.input.keyboard.on("keydown-F", (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthJ.png");
            my.sprite.mouth.x = my.sprite.body.x;
        });

        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.armR = this.add.sprite(this.armRX, this.armRY, "monsterParts", "arm_redD.png");
        my.sprite.armL = this.add.sprite(this.armLX, this.armLY, "monsterParts", "arm_redD.png");
        my.sprite.armL.flipX = true;
        my.sprite.legR = this.add.sprite(this.legRX, this.legRY, "monsterParts", "leg_redA.png");
        my.sprite.legL = this.add.sprite(this.legLX, this.legLY, "monsterParts", "leg_redA.png");
        my.sprite.legL.flipX = true;
        
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        
        my.sprite.eyeR = this.add.sprite(this.eyeRX, this.eyeRY, "monsterParts", "eye_human_blue.png");
        my.sprite.eyeL = this.add.sprite(this.eyeLX, this.eyeLY, "monsterParts", "eye_human_blue.png");
        my.sprite.eyeL.flipX = true;
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.detailR = this.add.sprite(this.hornRX, this.hornRY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.detailL = this.add.sprite(this.hornLX, this.hornLY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.detailL.flipX = true;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.leftKey.isDown) {
            for(let parts in my.sprite) {
                my.sprite[parts].x -= 3;
            }
            
        } else if(this.rightKey.isDown) {
            for(let parts in my.sprite) {
                my.sprite[parts].x += 3;
            }
        }
    }

}