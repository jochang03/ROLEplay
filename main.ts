let random = 0
input.onButtonPressed(Button.A, function () {
    random = randint(1, 6)
    basic.showNumber(random)
})
