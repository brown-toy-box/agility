# Run the course! Part 4

## Show me the steps! @showdialog

We'll finish the game in this tutorial by checking the player's
algorithm and adding more courses.

## Did I get it right?

When the player presses **A**, let's check their algorithm.

In the   
``||agility(noclick):Agility||`` drawer, there is a   
``||agility(noclick):check algorithm for player(1)||`` block.
If that is   
``||logic(noclick):true||``, then the player's algorithm is correct!

We'll give them a score based on how much time they take.

1.  Add an   
``||controller:on A button pressed||``   
container to your workspace.
1.  Inside the new container, add an   
``||logic:if (true) then||``   
block.
1.  Drop a   
``||agility:check algorithm for player (1)||``   
block in place of the   
``||logic(noclick):true||``   
block.
1.  Inside of the   
``||logic(noclick):if||``   
container, add these blocks:
    -   ``||info:change score by (1)||``
    -   ``||agility:start course run||``
1.  Drop a   
``||agility:get score||``   
block from the   
``||agility:Agility||``   
drawer in place of the   
``||info:(1)||``.

Give it a try! In the simulator, enter the correct algorithm
and then press **A**. You should get a score based on time, and
you should see the football player run the course!

View the hint if you need any help.

```block
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (agility.checkPlayerAlgo(1)) {
        info.changeScoreBy(agility.getScore())
        agility.startCourseRun()
    }
})
```

## Game over!

When the football player has run the course, we should end the game.

1.  From the   
``||agility:Agility||``   
drawer, add an   
``||agility:on course run done||``   
container to your workspace.
1.  Inside the new container, add a   
``||game:game over||``
``||loops(game):WIN||``   
block.

Check the simulator to make sure the game ends when
you enter the correct algorithm.

View the hint if you need any help.

```block
agility.onCourseRunDone(function () {
    game.gameOver(true)
})
```

## Out of time!

Two other things can end the game. If the player runs out of time
or out of guesses, then we should end the game, too.

1.  Add an   
``||info:on countdown end||``   
container to your workspace.
1.  Also add an   
``||info:on life zero||``   
container to your workspace.
1.  In **both** of these containers, add these blocks:
    -   ``||game:splash ("")||`` with an appropriate message
    -   ``||agility:start course run||``

Check the simulator and test your game. When the player enters
three guesses (and runs out of lives), or when the timer expires,
then the game should end.

View the hint if you need any help.

```blocks
info.onCountdownEnd(function () {
    game.splash("Out of time!")
    agility.startCourseRun()
})
info.onLifeZero(function () {
    game.splash("Out of guesses!")
    agility.startCourseRun()
})
```

## What do I do?

Players who have never played your game will need some instructions.

Let's give them some!

1.  Locate your   
``||loops(noclick):on start||``   
container.
1.  **Just above** the   
``||agility(noclick):start new round||``   
block, add a   
``||game:show long text ("") bottom||``   
block.

Use this block to display instructions to the player before the game starts.

Check the simulator to make sure your instructions appear
before the game starts.

View the hint if you need any help.

~hint What should I include in my instructions?

-   Describe the player's goal:
Create an algorithm that the football player
can follow to run the course.
-   List the three directions: up, left, and right.
-   Explain that **down** is **never** used.
-   Explain that **B** deletes the last step if the
player makes a mistake.
-   Explain that **A** checks the algorithm.

hint~

```blocks
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
agility.addCourse("short course", [
	assets_agility.rightArrowSmall,
	assets_agility.rightArrowSmall,
])
// @highlight
game.showLongText("Your instructions here!", DialogLayout.Bottom)
agility.startNewRound()
```

## Sounds!

We have included a couple of sounds that you can use in your game.

-   There is a "startup" sound that you can play at the beginning of the game.
-   There is a sound that you can play when the player enters
an incorrect algorithm.

Feel free to add these blocks to your project in appropriate places.

You can use other sounds, too, in these and other places in your game!

Next, we'll add more courses to your game for the player to guess!

## More courses!

Add two more courses to your game to give the player more courses to run.

1.  Locate the   
``||agility(noclick):add course with name ("") steps||``
``||arrays(noclick):array of [] []||``   
block in your   
``||loops(noclick):on start||``   
container.
1.  In the same place in your   
``||loops(noclick):on start||``   
container, add   
**two more**   
``||agility:add course||``   
blocks.
1.  Create two more courses and give them names.
1.  **After** the blocks for your three courses, add a   
``||agility:randomize courses||``
``||loops(agility):ON||``   
block.

Check the simulator. Your project will select one of your courses
at random for the player to complete.

Give all three of your courses a try!

View the hint if you need any help.

```blockconfig.local
agility.randomizeCourses(true)
```

```blocks
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
agility.addCourse("short course 1", [
	assets_agility.rightArrowSmall,
	assets_agility.rightArrowSmall,
])
// @highlight
agility.addCourse("short course 2", [
	assets_agility.upArrowSmall,
	assets_agility.rightArrowSmall,
])
// @highlight
agility.addCourse("short course 3", [
	assets_agility.leftArrowSmall,
	assets_agility.leftArrowSmall,
])
// @highlight
agility.randomizeCourses(true)
game.showLongText("Your instructions here!", DialogLayout.Bottom)
agility.startNewRound()
```

## Finish @showdialog

Congratulations! You've completed the introductory game!

Share your game with famly and friends! See if they can figure out
your agility courses!

There are additional tutorials in the skillmap that enhance your game.

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
agility.startNewRound()
```

```ghost
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

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```