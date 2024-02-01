class Scene2 extends Phaser.Scene {
  constructor () {
    super('playGame')
  }

  create () {
    this.background = this.add.image(0, 0, 'background')
    this.background.setOrigin(0, 0)

    this.ground = this.add.image(Math.random() * 800, -300, 'ground')
    this.count = 0
    this.speedIncrease = 0

    this.bee = this.add.image(config.width / 2, config.height / 2, 'bee')
    this.bee.setScale(0.1)

    this.add.text(20, 20, 'Playing game', {
      font: '25px, Arial',
      fill: 'yellow',
    })
  }

  moveBee (direction, speed) {
    this.resetBeePos()
    if (direction === 'left') {
      this.bee.x -= speed
    }
    if (direction === 'right') {
      this.bee.x += speed
    }
    if (direction === 'up') {
      this.bee.y -= speed
    }
    if (direction === 'down') {
      this.bee.y += speed
    }
  }

  moveGround () {
    if (this.ground.y > config.height) {
      this.count++
      this.ground.x = Math.random() * 800
      this.ground.y = 0
      if (this.count % 5 === 0) {
        this.speedIncrease += 2
      }
      console.log(this.count)
    }
    this.ground.y += 5 + this.speedIncrease
  }

  resetBeePos () {
    if (this.bee.y > config.height) {
      this.bee.y = config.height - 10
    }
    if (this.bee.y < 0) {
      this.bee.y = 10
    }
    if (this.bee.x > config.width) {
      this.bee.x = config.width - 10
    }
    if (this.bee.x < 0) {
      this.bee.x = 10
    }
  }

  listenBeeDies () {
    if (
      this.bee.x > this.ground.x - this.ground.width / 2 &&
      this.bee.x < this.ground.x + this.ground.width / 2 &&
      this.bee.y > this.ground.y - this.ground.height / 2 &&
      this.bee.y < this.ground.y + this.ground.height / 2
    ) {
      this.scene.start('gameOver')
    }
  }

  update () {
    this.input.keyboard.on('keydown-LEFT', () => {
      this.moveBee('left', 0.1)
    })
    this.input.keyboard.on('keydown-RIGHT', () => {
      this.moveBee('right', 0.1)
    })
    this.input.keyboard.on('keydown-UP', () => {
      this.moveBee('up', 0.1)
    })
    this.input.keyboard.on('keydown-DOWN', () => {
      this.moveBee('down', 0.1)
    })
    this.moveGround()
    this.listenBeeDies()
  }
}