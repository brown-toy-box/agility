# Run the course! Part 5

## Ready! Set @showdialog

In this tutorial, we'll do some preparation to your project
to get it ready to run multiple rounds.

## Move those courses!

First, let's create a function that builds your courses
so that we can move those blocks out of the way for now.

1.  If it's closed, open the   
**Advanced**   
section of the toolbox.
1.  In the   
``||functions:Functions||``   
drawer, select the   
**Make a Function...**   
button.
1.  Name your function something like   
``||functions(noclick):loadCourses||``.
1.  Select the green   
**Done**   
button.
1.  **Move** the   
``||agility(noclick):add course||``   
blocks from your   
``||loops(noclick):on start||``   
container into your new function.
1.  **In place** of those blocks in   
``||loops(noclick):on start||``,   
insert a   
``||functions:call loadCourses||``   
block.

Check the simulator to make sure you game has not changed.

View the hint if you need help.

```blocks
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
}
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
// @highlight
loadCourses()
agility.randomizeCourses(true)
game.showLongText("Your instructions here!", DialogLayout.Bottom)
agility.startNewRound()
```

## Finish the course!

We have some duplicated code that we should cleanup a bit.

1.  Create another function.
    1.  In the   
    ``||functions:Functions||``   
    drawer, select the   
    **Make a Function...**   
    button.
    1.  Name your function something like   
    ``||functions(noclick):finishCourse||``.
    1.  Select the   
    **Text**   
    button at the top of the window
    to add a parameter to your function.
    1.  Name the parameter something like   
    **message**.
    1.  Select the green   
    **Done**   
    button.
1.  Add two blocks to your function.
    1.  ``||game:splash ("")||``
    1.  ``||agility:start course run||``
1.  Drag a   
``||variables(noclick):message||``   
block from the top of your function
into your   
``||game(noclick):splash||``   
block.

View the hint to verify your function.

Now, in the following three places, **replace** the redundant blocks
with a call to your new function.
Enter an appropriate message in the function call.

-   ``||controller(noclick):on A button pressed||``
-   ``||info(noclick):on life zero||``
-   ``||info(noclick):on countdown end||``

Check the simulator to make sure your game functions the same as before.
Again, view the hint if you need any help.

```blocks
function finishRound (message: string) {
    game.splash(message)
    agility.startCourseRun()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.changeScoreBy(agility.getScore())
        // @highlight
        finishRound("Good work!")
    } else {
        agility.playIncorrectPath()
    }
})
info.onCountdownEnd(function () {
    // @highlight
    finishRound("Out of time!")
})
info.onLifeZero(function () {
    // @highlight
    finishRound("Out of guesses!")
})
```

## Finish @showdialog

Good work! You're ready to have multiple rounds in your game!

```template
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
        agility.startCourseRun()
    } else {
        agility.playIncorrectPath()
    }
})
info.onCountdownEnd(function () {
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
    game.splash("Out of time!")
    agility.startCourseRun()
})
info.onLifeZero(function () {
    game.splash("Out of guesses!")
    agility.startCourseRun()
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

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```