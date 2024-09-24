# Run the course! Part 3

## Show me the steps! @showdialog

Just like some of the activities in your book,
the player's goal is to figure out the **algorithm**
for your agility course.

An **algorithm** is a set of instructions that are
followed **in order**.

Let's have the player build an algorithm!

## Stop that running!

First, let's stop the football player from running the course.
We'll add it later, once the player creates the correct algorithm.

-   **Delete** the   
``||agility(noclick):start course run||``   
block from your   
``||loops(noclick):on start||``   
container.

Check the simulator to make sure the football player
no longer runs your course.

~hint How do I delete a block?

-   Select the block,
then press the **Delete** or **Backspace** key
on your keyboard.
-   Drag the block back to the toolbox.
You'll notice that, as you get closer,
a red trash can appears over the toolbox.

hint~

## Movin' on up!

Let's work on the **up** direction first.

1.  Add an   
``||controller:on up button pressed||``   
container to your workspace.
1.  Inside this new container, add an   
``||agility:add step [] for player (1)||``   
block.
1.  Select the small up arrow image.

Check the simulator and build an algorithm of "up" steps.
You should see your algorithm build in the top-left of the screen.

Next, we'll take care of the other two directions.

View the hint if you need any help.

```blockconfig.local
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

```block
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.upArrowSmall)
})
```

## Left and right!

Now, let's add the other two directions: left and right.
Let's take care of **left** first.

1.  Add an   
``||controller:on left button pressed||``   
container to your workspace.
1.  Inside this new container, add an   
``||agility:add step [] for player (1)||``   
block.
1.  Select the small left arrow image.

Now, right!

1.  Add another   
``||controller:on left button pressed||``   
container to your workspace.
1.  Change the button to   
``||controller(noclick):right||``.
1.  Inside this new container, add an   
``||agility:add step [] for player (1)||``   
block.
1.  Select the small right arrow image.

Check the simulator and build an algorithm with all three directions.
You should see your algorithm build in the top-left of the screen.

Next, we'll let the player delete steps from their algorithm.

View the hint if you need any help.

```blockconfig.local
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

```block
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.leftArrowSmall)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.addPlayerStep(1, assets_agility.rightArrowSmall)
})
```

## Only three! @showdialog

Did you notice that there are only three directions for
the agility courses?

The agility courses **do not** use **down** for a direction!

This makes our algorithms simpler. Using **down** in our algorithms
would make them much more difficult.

## Oops!

The player might want to change their algorithm if they make a mistake.

If the player presses **B**, let's remove the last step in their algorithm.

1.  Add an   
``||controller:on B button pressed||``   
container to your workspace.
1.  Inside this new container, add an   
``||agility:delete last step for player (1)||``   
block.

Check the simulator and build an algorithm.
Then, press **B** and notice that the last step in your algorithm disappears.
Use this to make changes to your algorithm.

View the hint if you need any help.

```blockconfig.local
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

```block
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    agility.deletePlayerStep(1)
})
```

## Finish @showdialog

Congratulations! Your player can now build an algorithm and edit it!

Next, let's check the player's algorithm!

```template
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

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```