radio.setGroup(77)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(10000)
})
