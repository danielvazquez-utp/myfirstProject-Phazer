export class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, footstepSound){
        super(scene, x, y, 'dude');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setBounce(0.2);
        this.setCollideWorldBounds(true);

        // 🌟 Almacena la referencia al objeto de audio
        this.footstepSFX = footstepSound; 
        this.walking = false; // Bandera para controlar la reproducción
        
        
        this.initAnimations();
    }

    initAnimations(){
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        
    }

    // 🌟 Reproduce el sonido de paso si no se está reproduciendo
    playFootstep() {
        // Verifica si el audio está sonando y si el jugador está en el suelo
        if (!this.walking && this.body.blocked.down) { 
            this.footstepSFX.play();
            this.walking = true;
            // Usa un temporizador para simular un paso (reproducir cada ~300ms)
            this.scene.time.delayedCall(300, () => { 
                this.walking = false;
            });
        }
    }

    moveLeft() {
        this.setVelocityX(-200);
        this.anims.play('left', true);
        this.playFootstep(); // 🌟 Llama al nuevo método
    }

    moveRight() {
        this.setVelocityX(200);
        this.anims.play('right', true);
        this.playFootstep(); // 🌟 Llama al nuevo método
    }

    idle() {
        this.setVelocityX(0);
        this.anims.play('turn');
    }

    jump() {
        if(this.body.blocked.down)
            this.setVelocityY(-500);
    }
}