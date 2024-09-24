# Run the course! Part 7

## Get ready! @showdialog

Let's get your game ready for multiplayer!

## Advanced tutorial @showdialog

**Note**

This is an advanced tutorial.
We will describe the blocks that you will add to your project,
but the instructions do not walk you through every block that you need.

You can always view the hint to see the code that you are building.

Try building without the hints, though!

## Changing blocks!

We need to swap out the single-player blocks
for their multiplayer versions.

1.  Find your   
``||info(noclick):set score to (0)||``   
block in your   
``||loops(noclick):on start||``   
container.
1.  Exchange it for the   
``||info:set player 2 score to (0)||``   
block.
1.  In the new block, switch to **player 1**.

Now, do the same thing for the
``||info(noclick):change score by||``
``||agility(noclick):get score||``   
block.

Lastly, swap out the   
``||controller(noclick):controller||`` blocks and the   
``||info:on life zero||`` block   
with the multiplayer versions.

For example, instead of the   
``||controller(noclick):on A button pressed||``   
block, use the   
``||controller:on player 2 A button pressed||``.

Play your game in the simulator to make sure nothing has changed.

View the hint for examples of the multiplayer blocks.

```blocks
// @hide
function finishRound (message: string) {

}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.upArrowSmall)
})
info.player1.onLifeZero(function () {
    finishRound("Out of guesses!")
})
```

## Finish @showdialog

Good work!

Nothing has changed in your gameplay,
but now we're ready to add multiple players!

```template
function loadCourses () {
	agility.addCourse("box right", [
		assets_agility.rightArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.leftArrowSmall,
	])
	agility.addCourse("box left", [
		assets_agility.leftArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.rightArrowSmall,
	])
	agility.addCourse("bob and go", [
		assets_agility.upArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.upArrowSmall,
	])
}
function finishRound (message: string) {
    game.splash(message)
    agility.startCourseRun()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.upArrowSmall)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.leftArrowSmall)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.rightArrowSmall)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work!")
    } else {
        agility.playIncorrectPath()
    }
})
info.onCountdownEnd(function () {
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    finishRound("Out of time!")
})
info.onLifeZero(function () {
    finishRound("Out of guesses!")
})
agility.onCourseRunDone(function () {
    if (agility.getCurrRound() == numberOfRounds) {
        game.gameOver(true)
    } else {
        agility.startNewRound()
    }
})
let numberOfRounds = 0
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
agility.playGameStartup()
game.showLongText("Your instructions here!", DialogLayout.Bottom)
loadCourses()
agility.randomizeCourses(true)
numberOfRounds = 3
agility.startNewRound()
```

```ghost
function loadCourses () {
	agility.addCourse("box right", [
		assets_agility.rightArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.leftArrowSmall,
	])
	agility.addCourse("box left", [
		assets_agility.leftArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.rightArrowSmall,
	])
	agility.addCourse("bob and go", [
		assets_agility.upArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.leftArrowSmall,
		assets_agility.rightArrowSmall,
		assets_agility.upArrowSmall,
		assets_agility.upArrowSmall,
	])
}
function finishRound (message: string) {
    game.splash(message)
    agility.startCourseRun()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.upArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.leftArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.rightArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.player1.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work!")
    } else {
        agility.playIncorrectPath()
    }
})
info.player1.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
info.onCountdownEnd(function () {
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    finishRound("Out of time!")
})
agility.onCourseRunDone(function () {
    if (agility.getCurrRound() == numberOfRounds) {
        game.gameOver(true)
    } else {
        agility.startNewRound()
    }
})
let numberOfRounds = 0
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.player1.setScore(0)
agility.playGameStartup()
game.showLongText("Your instructions here!", DialogLayout.Bottom)
loadCourses()
agility.randomizeCourses(true)
numberOfRounds = 3
agility.startNewRound()
```

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```