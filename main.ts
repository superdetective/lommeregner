let tal = 0
input.onButtonPressed(Button.A, function () {
    tal += 2
    basic.showNumber(tal)
})
input.onButtonPressed(Button.AB, function () {
    tal = 0
    basic.showNumber(tal)
})
input.onButtonPressed(Button.B, function () {
    tal += -1
    basic.showNumber(tal)
})
input.onGesture(Gesture.LogoDown, function () {
    tal = tal * 10
    basic.showNumber(tal)
})
