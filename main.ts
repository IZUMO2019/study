basic.showIcon(IconNames.Heart)
basic.pause(1000)
let x = 0
basic.showNumber(x)
basic.pause(1000)
basic.forever(function () {
    x += 1
    basic.showNumber(x)
    basic.pause(1000)
})
