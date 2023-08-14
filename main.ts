input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let Picker = game.createSprite(2, 2)
let litter = game.createSprite(2, input.acceleration(Dimension.X))
game.setScore(0)
game.startCountdown(60000)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 100) {
        Picker.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -100) {
        Picker.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 100) {
        Picker.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -100) {
        Picker.change(LedSpriteProperty.Y, -1)
    }
    if (Picker.isTouching(litter)) {
        game.addScore(1)
        litter.delete()
        litter = game.createSprite(randint(0, 4), randint(0, 4))
    }
    basic.pause(500)
})
