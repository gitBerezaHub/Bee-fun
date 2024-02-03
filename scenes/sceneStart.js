class SceneStart extends Phaser.Scene {
  constructor () {
    super('bootGame')
  }

  preload() {
    this.load.image('background', 'assets/sky.png')
    this.load.image('bee', 'assets/bee.png')
    this.load.image('ground', 'assets/ground.png')
  }
  create() {
    this.add.text(350, 150, 'Loading game...')
    this.scene.start('playGame')
  }
}