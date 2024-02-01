class Scene1 extends Phaser.Scene {
  constructor () {
    super('gameOver')
  }

  create() {
    this.add.text(350, 150, 'Проиграл(((')
  }
}