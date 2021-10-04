// Recibe el valor de Nivel de Agua
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.clearScreen()
})
// Recibe el valor de Humedad
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.clearScreen()
})
// Recibe el valor de la temperatura
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showString("" + (value))
    basic.showString("C")
    basic.clearScreen()
})
// Establece canal de comunicación en el canal 7 con la otra micro:bit, es decir la de origen
radio.setGroup(7)
