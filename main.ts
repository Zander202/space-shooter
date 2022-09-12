function CRASH () {
    if (BULLET.isTouching(ENEMY)) {
        game.addScore(1)
        BULLET.delete()
        ENEMY.delete()
        ENEMY = game.createSprite(randint(0, 4), 0)
        canShoot = true
    } else if (BULLET.get(LedSpriteProperty.Y) == 0) {
        BULLET.delete()
        canShoot = true
    }
}
input.onButtonPressed(Button.A, function () {
    if (canShoot) {
        BULLET = game.createSprite(SPACESHIP.get(LedSpriteProperty.X), SPACESHIP.get(LedSpriteProperty.Y))
        BULLET.turn(Direction.Left, 90)
        canShoot = false
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1600, 1, 255, 0, 700, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
let BULLET: game.LedSprite = null
let canShoot = false
let ENEMY: game.LedSprite = null
let SPACESHIP: game.LedSprite = null
SPACESHIP = game.createSprite(2, 4)
ENEMY = game.createSprite(randint(0, 4), 0)
canShoot = true
game.startCountdown(20000)
basic.forever(function () {
    SPACESHIP.move(1)
    SPACESHIP.ifOnEdgeBounce()
    if (BULLET) {
        BULLET.move(1)
        CRASH()
    }
    basic.pause(200)
})
