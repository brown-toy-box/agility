# Run the course! Part 6

## Go! Go! Go! @showdialog

You've done most of the hard work already!

In this tutorial, we'll run multiple courses in your game!

## How many rounds?

For now, we'll run three rounds in your game so that the player can see
all three of your courses.

1.  In the   
``||variables:Variables||``   
drawer, select the   
**Make a Variable...**   
button.
1.  Create a variable named something like   
``||variables:numberOfRounds||``.
1.  In your   
``||loops(noclick):on start||``   
block,
**just before** the   
``||agility(noclick):start new round||``   
block, add a   
``||variables:set numberOfRounds to (0)||``   
block.
1.  Set the number of rounds to   
**3**.

View the hint if you need any help.

We have a variable to keep track of how many rounds to run.
Now we just need to use it!

```blocks
// @hide
function loadCourses () {
}
let numberOfRounds = 0
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
agility.playGameStartup()
game.showLongText("Your instructions here!", DialogLayout.Bottom)
loadCourses()
agility.randomizeCourses(true)
// @highlight
numberOfRounds = 3
agility.startNewRound()
```

## Are we done yet?

Now, we need to start a new round when the previous one ends.

1.  Locate your   
``||agility(noclick):on course run done||``   
container.
1.  Add and rearrange blocks in that container to follow this logic:
    -   ``||logic:If||``   
    ``||agility:get current round||``   
    is equal to   
    ``||variables:numberOfRounds||``,   
    then end the game with a   
    ``||loops(noclick):WIN||``.
    -   Otherwise,   
    ``||agility:start new round||``.

That's it!

Check the simulator. Your game should run through
all three of your courses
in a random order.

View the hint if you need any help.

```block
agility.onCourseRunDone(function () {
    if (agility.getCurrRound() == numberOfRounds) {
        game.gameOver(true)
    } else {
        agility.startNewRound()
    }
})
let numberOfRounds = 0
```

## More courses!

Now that the game runs the same courses every time,
you should add some courses to the catalog
so that the game is different each time!

-   In your   
``||functions(noclick):loadCourses||``   
function, place more   
``||agility:add course||``   
blocks with new courses.

Now, your game should select three courses at random from your catalog.
The game should be different each time!

## Finish @showdialog

Congratulations! You've built the intermediate game!

Share your game with famly and friends! See if they can figure out
your agility courses!

There are additional tutorials in the skillmap
that enhance your game even further.

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
    game.gameOver(true)
})
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
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
agility.playGameStartup()
game.showLongText("Your instructions here!", DialogLayout.Bottom)
agility.randomizeCourses(true)
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

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```