import { Player } from '../GameObjects/Player.js'

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');

    }

    create() {
       this.add.image(400, 300, 'sky');
       this.platforms = this.physics.add.staticGroup();
       this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
       this.platforms.create(600, 400, 'ground');
       this.platforms.create(50, 250, 'ground');

       this.platforms.create(750, 220, 'ground');

       // 🌟 Paso 2: Crear una instancia del sonido y pasársela al jugador
       this.sfxFootstep = this.sound.add('footstep', { volume: 0.2, loop: false });
       this.sfxBomby = this.sound.add('bomby', { volume: 0.5, loop: false });

       // agregar un jugador a la escena
       this.player = new Player(this, 100, 450, this.sfxFootstep);
       // Efecto para que el jugador quede parado sobre la plataforma
       this.physics.add.collider(this.player, this.platforms);
       // Definir entradas del teclado para mover al jugador
       this.cursors = this.input.keyboard.createCursorKeys();

       this.stars = this.physics.add.group(
        {
            key: 'star',
            repeat: 11,
            setXY: {
                x:12,
                y:0,
                stepX:70
            }
        });

        this.stars.children.iterate( child => {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.bombs = this.physics.add.group();
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
    }

    update(time) {
        if(this.cursors.left.isDown)
            this.player.moveLeft();
        else if (this.cursors.right.isDown)
            this.player.moveRight();
        else
            this.player.idle();
        if(this.cursors.up.isDown)
            this.player.jump();
    }

    collectStar(player, star){
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
        if(this.stars.countActive(true)===0){
            this.stars.children.iterate(function (child){
                child.enableBody(true, child.x, 0, true, true);
            });
            this.releaseBomb();
        }
    }

    hitBomb(player, bomb){
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.time.delayedCall(2000, () =>{
            this.scene.start('GameOver');
        });
    }

    releaseBomb(){
        // 🌟 Reproducir el sonido antes de liberar la bomba
        this.sfxBomby.play();
        let x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        let bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }

    
}
