# Run the course! Part 8

## Showdown! @showdialog

Let's add another player to the game!

## Advanced tutorial @showdialog

**Note**

This is an advanced tutorial.
We will describe the blocks that you will add to your project,
but the instructions do not walk you through every block that you need.

You can always view the hint to see the code that you are building.

Try building without the hints, though!

## Which player?

Before we add the second player,
we should be more precise in one of our messages.

1.  Locate your   
``||controller(noclick):on player 1 A button pressed||``   
container.
1.  Inside that container, change the message
to something like   
"**Good work, Player 1!**"

Later, when we reuse that block, we can make a simple change for each player.

View the hint if you need any help.

```blocks
// @hide
function finishRound (message: string) {

}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.player1.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        // @highlight
        finishRound("Good work, Player 1!")
    } else {
        agility.playIncorrectPath()
    }
})
```

## Oh ... just one more thing....

We have another small adjustment to make before activating multiplayer.

In the single-player game, when the player runs out of guesses (or lives),
the round ends.

In multiplayer, we should wait until **all** players have run out of guesses.

1.  Locate your   
``||info(noclick):on player 1 life zero||``   
container.
1.  Move your function call inside of an   
``||logic:if (true) then||``   
block.
1.  Use blocks from the   
``||logic:Logic||`` and   
``||agility:Agility||``   
drawers so that the ``||logic(noclick):if||`` block says the following:   
``||logic(noclick):if||``
``||logic:not||``
``||agility:players have life?||``
``||logic(noclick):then||``

Now, we're ready to activate multiplayer!

View the hint if you need help.

```blocks
// @hide
function finishRound (message: string) {

}
info.player1.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
```

## Activate multiplayer!

The built-in extension works slightly differently in multiplayer mode
compared to single-player mode. Let's activate multiplayer mode!

1.  Locate your   
``||loops(noclick):on start||``   
container.
1.  **Just before** the   
``||agility(noclick):start new round||``   
block, add a   
``||agility:set multiplayer (OFF)||``   
block.
1.  Flip the toggle to turn   
``||loops(noclick):ON||`` multiplayer mode!

Check the simulator and you should notice some new elements on the screen.

Let's add the second player!

View the hint if you need any help.

```blocks
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
numberOfRounds = 3
// @highlight
agility.setMultiplayer(true)
agility.startNewRound()
```

## Score!

First, give Player 2 a starting score.

1.  Locate your   
``||loops(noclick):on start||``   
container.
1.  Find the   
``||info(noclick):set player 1 score to (0)||``
1.  **Immediately below** that block, insert a   
``||info:set player 2 score to (0)||``

The block defaults to Player 2, so you don't need to change anything.

Check the simulator and notice that Player 2 now has a score of zero.

Now, let's give Player 2 some controls!

## Introducing Player 2!

You will need to find, duplicate, and adjust the following containers:

-   ``||controller(noclick):on player 1 (up) button pressed||``
-   ``||controller(noclick):on player 1 (left) button pressed||``
-   ``||controller(noclick):on player 1 (right) button pressed||``
-   ``||controller(noclick):on player 1 (B) button pressed||``
-   ``||controller(noclick):on player 1 (A) button pressed||``
-   ``||info(noclick):on player 1 life zero||``

Follow these steps for each of the containers, one at a time:

1.  **Duplicate** the entire container.
1.  In the duplicate container,
change **all** of the blocks to use   
**Player 2** instead.

Give it a try! See if you can build, modify, and submit algorithms
as Player 2!

View the hint for some examples of the blocks for Player 2.

~hint How do I play as Player 2?

-   You can control Player 2 with the keyboard.
    -   **I** is the **up** button.
    -   **J** is the **left** button.
    -   **K** is the **down** button.
    -   **L** is the **right** button.
    -   **U** is the **A** button.
    -   **O** is the **B** button.
-   If you have game controllers compatible with your computer,
then you can connect two controllers to play with two players.
(You need one controller for each player.)
-   You can control Player 2 from the multiplayer controls in the simulator.
    -   Now that we have activated multiplayer mode, you will see
    four new buttons next to the simulator that represent the players.
        -   Player 1 is **red**.
        -   Player 2 is **blue**.
        -   In fullscreen mode, these buttons appear below the screen.
    -   Select the **blue** avatar (the second one) to switch the controls
    to Player 2.   
    Notice the simulator changes color.
    -   The keys on the keyboard work the same as always.
    -   Select the **red** avatar (the first one) to switch back to Player 1.
    Notice again that the simulator changes color.

hint~

~hint How do I duplicate a block?

If your mouse has multiple buttons,
then you can **right-click** (or "alt-click")
on a block. From the menu that appears,
select **Duplicate**.

If your mouse only has one button,
then select the block. On your keyboard,
press **Ctrl+C** (on a Mac, press **Command+C**)
to copy the block, and then **Ctrl+V**
(or **Command+V**) to paste a duplicate
to your workspace.

hint~

```blocks
// @hide
function finishRound (message: string) {

}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(2)) {
        info.player2.changeScoreBy(agility.getScore())
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        finishRound("Good work, Player 2!")
    } else {
        agility.playIncorrectPath()
    }
})
info.player2.onLifeZero(function () {
    if (!(agility.playersHaveLife())) {
        finishRound("Out of guesses!")
    }
})
```

## Finish @showdialog

Good work! Now you can play with two players!

You can even play on separate computers over the Internet!
Details are in the leader guide.

Head to the last tutorial to have up to four players!

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
    finishRound("Out of guesses!")
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

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```