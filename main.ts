input.onButtonPressed(Button.A, function () {
    Kjør_sekvens_1 = !(Kjør_sekvens_1)
})
synthBlocks.parallellSequence(sequences.sequenceThree, function () {
    orchestra.note(
    69 + 5,
    400,
    127,
    SynthPreset.Preset2
    )
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
    orchestra.note(
    69 + 5,
    stepLength,
    127,
    SynthPreset.Preset2
    )
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
})
input.onButtonPressed(Button.AB, function () {
    Kjør_sekvens_3 = !(Kjør_sekvens_3)
})
input.onButtonPressed(Button.B, function () {
    Kjør_sekvens_2 = !(Kjør_sekvens_2)
})
synthBlocks.parallellSequence(sequences.sequenceTwo, function () {
    orchestra.playSample(Sample.BassDrum, 1)
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
    orchestra.playSample(Sample.SnareDrum, 1)
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
})
synthBlocks.parallellSequence(sequences.sequenceOne, function () {
    orchestra.note(
    69,
    100,
    127,
    SynthPreset.Preset1
    )
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
    orchestra.note(
    69 + 12,
    stepLength,
    127,
    SynthPreset.Preset1
    )
    basic.pause(stepLength)
    basic.pause(stepLength)
    basic.pause(stepLength)
})
let Kjør_sekvens_3 = false
let Kjør_sekvens_2 = false
let Kjør_sekvens_1 = false
let stepLength = 0
basic.showLeds(`
    . . # . .
    # . # . #
    . # . # .
    . . . . .
    . . . . .
    `)
stepLength = 300
Kjør_sekvens_1 = false
Kjør_sekvens_2 = false
Kjør_sekvens_3 = false
loops.everyInterval(8 * stepLength, function () {
    basic.clearScreen()
    if (Kjør_sekvens_1) {
        led.plot(0, 0)
        synthBlocks.startParallelSequence(sequences.sequenceOne)
    }
    if (Kjør_sekvens_2) {
        led.plot(2, 0)
        synthBlocks.startParallelSequence(sequences.sequenceTwo)
    }
    if (Kjør_sekvens_3) {
        led.plot(4, 0)
        synthBlocks.startParallelSequence(sequences.sequenceThree)
    }
})
