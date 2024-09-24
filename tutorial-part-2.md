# Run the course! Part 2

## Run a course @showdialog

In this tutorial, you will create an agility course
and run the football player through it!

## Build the course

First, you need to create a course for the player to run.

1.  Add an   
``||agility:add course with name ("") steps||``
``||arrays(agility):array of [] []||``   
block to your   
``||loops(noclick):on start||``   
container.
1.  Select a small arrow (up, left, or right)
from the gallery
for each of the two images
in your course.
1.  Give your course a name.

Your course is short for now.
You can make it longer (and more difficult) later!

Next, we'll draw the course on the screen.

View the hint if you need any help.

```blocks
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
// @highlight
agility.addCourse("short course", [
	assets_agility.upArrowSmall,
	assets_agility.leftArrowSmall,
])
```

## Draw it up!

Now, let's build the course on the field.

-   To the **bottom** of your   
``||loops(noclick):on start||``   
container, add a   
``||agility:start new round||``   
block.

Check the simulator. Now, you'll see a description of your course.
Press **A** to remove the description,
and you will see your course on the field!

Next, we'll make your course longer.

View the hint if you need any help.

```blocks
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
agility.addCourse("short course", [
	assets_agility.upArrowSmall,
	assets_agility.leftArrowSmall,
])
// @highlight
agility.startNewRound()
```

## Add some steps!

Let's make your course longer and more difficult.

-   To add a step to your course,
select the **(+)** symbol next to
the list of steps.
-   Select an arrow for the new step.
-   To delete a step,
select the **(-)** symbol next to
the list of steps.

Add some steps to your agility course,
and then watch it appear in the simulator.

Make your course **about six steps** long.

Next, we'll have the football player run your course!

View the hint if you need any help.

```blocks
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
// @highlight
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

## Run the course!

For now, we'll make the football player run the course
right after building it.

-   To the **bottom** of your   
``||loops(noclick):on start||``   
container, add a   
``||agility:start course run||``   
block.

Check the simulator to watch the football player run your course!

View the hint if you need any help.

```blocks
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
// @highlight
agility.startCourseRun()
```

## Finish @showdialog

Congratulations, you have set the scene for your game!

Next, let's add an agility course!

```template
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
```

```ghost
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
agility.startCourseRun()
```

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```