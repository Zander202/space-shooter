def CRASH():
    global ENEMY, CAN_SHOOT
    if BULLET.is_touching(ENEMY):
        game.add_score(1)
        BULLET.delete()
        ENEMY.delete()
        ENEMY = game.create_sprite(randint(0, 4), 0)
        CAN_SHOOT = True
    elif BULLET.get(LedSpriteProperty.Y) == 0:
        BULLET.delete()
        CAN_SHOOT = True

def on_button_pressed_a():
    global BULLET, CAN_SHOOT
    canShoot = 0
    if canShoot:
        BULLET = game.create_sprite(SPACESHIP.get(LedSpriteProperty.X),
            SPACESHIP.get(LedSpriteProperty.Y))
        BULLET.turn(Direction.LEFT, 90)
        CAN_SHOOT = False
input.on_button_pressed(Button.A, on_button_pressed_a)

BULLET: game.LedSprite = None
CAN_SHOOT = False
ENEMY: game.LedSprite = None
SPACESHIP: game.LedSprite = None
SPACESHIP = game.create_sprite(2, 4)
ENEMY = game.create_sprite(randint(0, 4), 0)
CAN_SHOOT = True
game.start_countdown(10000)

def on_forever():
    SPACESHIP.move(1)
    SPACESHIP.if_on_edge_bounce()
    if BULLET:
        BULLET.move(1)
        CRASH()
    basic.pause(200)
basic.forever(on_forever)
