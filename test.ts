controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.upArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.upArrowSmall)
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(3, assets_agility.upArrowSmall)
})
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(4, assets_agility.upArrowSmall)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.leftArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.leftArrowSmall)
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(3, assets_agility.leftArrowSmall)
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(4, assets_agility.leftArrowSmall)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.rightArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.rightArrowSmall)
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(3, assets_agility.rightArrowSmall)
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(4, assets_agility.rightArrowSmall)
})

controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.player1.changeScoreBy(agility.getScore())
        agility.runCourse()
        game.splash("Good work, Player 1!")
        startNewRound()
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(2)) {
        info.player2.changeScoreBy(agility.getScore())
        agility.runCourse()
        game.splash("Good work, Player 2!")
        startNewRound()
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(3)) {
        info.player3.changeScoreBy(agility.getScore())
        agility.runCourse()
        game.splash("Good work, Player 3!")
        startNewRound()
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(4)) {
        info.player4.changeScoreBy(agility.getScore())
        agility.runCourse()
        game.splash("Good work, Player 4!")
        startNewRound()
    } else {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(1)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(2)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(3)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(4)
})
function startNewRound() {
    if (agility.getCurrRound() == agility.numCourses()) {
        game.gameOver(true)
    } else {
        agility.startNewRound()
    }
}
let ROUNDS = 3
let pattern: Image[] = []
for (let index = 0; index < ROUNDS; index++) {
    pattern = []
    for (let index = 0; index < 6; index++) {
        let tile: number = randint(0, 2)
        if (tile == 0) {
            pattern.push(assets_agility.upArrowSmall)
        } else if (tile == 1) {
            pattern.push(assets_agility.leftArrowSmall)
        } else {
            pattern.push(assets_agility.rightArrowSmall)
        }
    }
    agility.addCourse("Random #" + agility.numCourses(), pattern)
}
scene.setBackgroundImage(assets_agility.field)
game.showLongText("Use up, left, and right to create an algorithm that matches the course!\\n \\nPress A to check it.\\n \\nPress B to erase the last step.", DialogLayout.Full)
let fbPlayer = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayer)
info.player1.setScore(0)
info.player2.setScore(0)
info.player3.setScore(0)
info.player4.setScore(0)
info.player1.setLife(3)
info.player2.setLife(3)
info.player3.setLife(3)
info.player4.setLife(3)
agility.startNewRound()
