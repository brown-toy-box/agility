# Run the course! Part 9

## More players! @showdialog

Let's add the other two players to the game!

## Advanced tutorial @showdialog

**Note**

This is an advanced tutorial.
We will describe the blocks that you will add to your project,
but the instructions do not walk you through every block that you need.

You can always view the hint to see the code that you are building.

Try building without the hints, though!

## Lots more duplicating!

Now that you've added Player 2 to the game,
repeat the same process for the other two players!

Be sure to test your game after each of these tasks.

As a reminder,
you will need to find, duplicate, and adjust the following blocks:

-   ``||info(noclick):set player 1 score to (0)||``
-   ``||controller(noclick):on player 1 (up) button pressed||``
-   ``||controller(noclick):on player 1 (left) button pressed||``
-   ``||controller(noclick):on player 1 (right) button pressed||``
-   ``||controller(noclick):on player 1 (B) button pressed||``
-   ``||controller(noclick):on player 1 (A) button pressed||``
-   ``||info(noclick):on player 1 life zero||``

Give it a try! See if you can build, modify, and submit algorithms
as all four players!

If you need help, then go back to the previous tutorial
for some reminders.

View the hint for some examples of the blocks.

~hint How do I play as Players 3 and 4?

-   If you have game controllers compatible with your computer,
then you can connect four controllers to play with four players.
(You need one controller for each player.)
-   You can control Players 3 and 4 from the multiplayer controls in the simulator.
    -   Now that we have activated multiplayer mode, you will see
    four new buttons next to the simulator that represent the players.
        -   Player 1 is **red**.
        -   Player 2 is **blue**.
        -   Player 3 is **orange**.
        -   Player 4 is **green**.
        -   In fullscreen mode, these buttons appear below the screen.
    -   Select the **orange** avatar (the third one) to switch the controls
    to Player 3.   
    Notice the simulator changes color.
    -   Select the **green** avatar (the fourth one) to switch the controls
    to Player 4.
    -   The keys on the keyboard work the same as always.

hint~

```blocks
// @hide
function finishRound (message: string) {

}
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(3)) {
        info.player3.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 3!")
    } else {
        agility.playIncorrectPath()
    }
})
info.player4.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
```

## More courses!

In your   
``||functions(noclick):loadCourses||``   
function, be sure to add some new courses!

Also, check the   
``||agility:Agility||``   
drawer for a new block that creates   
**random** courses!

Random courses can be **really** difficult, especially longer ones!

Try adding one more more random courses with 5 to 8 steps!

```block
function loadCourses () {
    agility.addCourse("short course 1", [
        assets_agility.rightArrowSmall,
        assets_agility.rightArrowSmall,
    ])
    agility.addCourse("short course 2", [
        assets_agility.upArrowSmall,
        assets_agility.rightArrowSmall,
    ])
    agility.addCourse("short course 3", [
        assets_agility.leftArrowSmall,
        assets_agility.leftArrowSmall,
    ])
    // @highlight
    agility.addRandomCourse(randint(5, 8))
}
```

## Finish @showdialog

Congratulations! You've built the advanced game!

Share your game with famly and friends! See if they can figure out
your agility courses!

Feel free to try these additional customizations.

-   Add even more rounds and courses.
-   Add more sound effects.
-   Use the other blocks in the   
``||agility(noclick):Agility||`` drawer to change the game!
    -   Create your own images for the directions and the course steps.
    -   Change the number of guesses per round.
    -   Change the length of the timer.
-   Add the **down** direction for your courses.
    -   You will need to add new images for the **down** direction.
    -   Random courses will **not** use the down direction.
    Only the courses that you create!
    -   The **down** direction can make the course algorithms
    **much** more difficult.

Have fun!

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
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.upArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.upArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.leftArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.upArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.rightArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.rightArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(1)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(2)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.player1.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 1!")
    } else {
        agility.playIncorrectPath()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(2)) {
        info.player2.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 2!")
    } else {
        agility.playIncorrectPath()
    }
})
info.player1.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
info.player2.onLifeZero(function () {
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
info.player2.setScore(0)
agility.playGameStartup()
game.showLongText("Your instructions here!", DialogLayout.Bottom)
loadCourses()
agility.randomizeCourses(true)
agility.setMultiplayer(true)
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
    randomCourses = 3
    for (let index = 0; index < randomCourses; index++) {
        agility.addRandomCourse(randint(5, 8))
    }
}
function finishRound (message: string) {
    game.splash(message)
    agility.startCourseRun()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
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
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.leftArrowSmall)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(2, assets_agility.upArrowSmall)
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(3, assets_agility.leftArrowSmall)
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(4, assets_agility.leftArrowSmall)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
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
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(1)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(2)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(3)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(4)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.player1.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 1!")
    } else {
        agility.playIncorrectPath()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(2)) {
        info.player2.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 2!")
    } else {
        agility.playIncorrectPath()
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(3)) {
        info.player3.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 3!")
    } else {
        agility.playIncorrectPath()
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(4)) {
        info.player4.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 4!")
    } else {
        agility.playIncorrectPath()
    }
})
info.player1.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
info.player2.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
info.player3.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
info.player4.onLifeZero(function () {
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
let randomCourses = 0
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.player1.setScore(0)
info.player2.setScore(0)
info.player3.setScore(0)
info.player4.setScore(0)
agility.playGameStartup()
game.showLongText("Your instructions here!", DialogLayout.Bottom)
loadCourses()
agility.randomizeCourses(true)
agility.setMultiplayer(true)
numberOfRounds = 3
agility.startNewRound()
```

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```