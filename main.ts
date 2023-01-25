radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
        basic.showString("switch")
    }
})
basic.forever(function () {
    radio.setGroup(88)
})
