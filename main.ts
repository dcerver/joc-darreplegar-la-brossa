input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let Picker = game.createSprite(2, 2)
let litter = game.createSprite(2, input.acceleration(Dimension.X))
game.setScore(0)
game.startCountdown(60000)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 100) {
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Picker.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -100) {
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Picker.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 100) {
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Picker.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -100) {
        music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Picker.change(LedSpriteProperty.Y, -1)
    }
    if (Picker.isTouching(litter)) {
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.addScore(1)
        litter.delete()
        litter = game.createSprite(randint(0, 4), randint(0, 4))
    }
    basic.pause(500)
})
