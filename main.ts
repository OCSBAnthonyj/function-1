function Audio1 () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(0 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("go")
}
Audio1()
