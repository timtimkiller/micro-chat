input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
radio.sendString("Bruh")
radio.setGroup(14)
basic.forever(function () {
	
})
