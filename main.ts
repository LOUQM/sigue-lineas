input.onButtonPressed(Button.A, function () {
    cuteBot.motors(100, 100)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.stopcar()
    }
})
