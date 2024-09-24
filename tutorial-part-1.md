# Run the course! Part 1

## Set the scene @showdialog

In this tutorial, we will create the scenery for our game.

## Add a field!

First, let's add a field as our background.

1.  Add a   
``||scene:set background image to []||``   
block to your   
``||loops(noclick):on start||``   
container.
1.  Select a background for your scene.
We have provided an image for you.
You also can draw your own!

View the hint if you need any help.

```blocks
scene.setBackgroundImage(assets_agility.field)
```

## Put me in, Coach!

Now, let's add a sprite for the football player.

1.  Add a   
``||variables(sprites):set fbPlayerSprite to||``
``||sprites:sprite [] of kind Player||``   
block to your   
``||loops(noclick):on start||``   
container.
1.  Select an image for your football player.
We have provided a few for you.
Feel free to draw your own!

Check the simulator to see your football player on the field!

View the hint if you need any help.

```blockconfig.local
let fbPlayerSprite = sprites.create(img`.`, SpriteKind.Player)
```

```blocks
scene.setBackgroundImage(assets_agility.field)
// @highlight
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
```

## Finishing touches!

We need to do a couple of other things to finish setting the scene.

1.  From the   
``||agility:Agility||``   
drawer, add a   
``||agility:set player sprite to||``
``||variables(agility):fbPlayerSprite||``   
block to your   
``||loops(noclick):on start||``   
container.
1.  From the   
``||info:Info||``
drawer, add a   
``||info:set score to (0)||``   
block.

View the hint if you need any help.

```blockconfig.local
agility.setPlayerSprite(fbPlayerSprite)
```

```blocks
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
// @highlight
agility.setPlayerSprite(fbPlayerSprite)
// @highlight
info.setScore(0)
```

## Finish @showdialog

Congratulations, you have set the scene for your game!

Next, let's add an agility course!

```ghost
scene.setBackgroundImage(assets_agility.field)
let fbPlayerSprite = sprites.create(assets_agility.footballer0, SpriteKind.Player)
agility.setPlayerSprite(fbPlayerSprite)
info.setScore(0)
```

```package
assets_agility=github:brown-toy-box/assets_agility
agility=github:brown-toy-box/agility
```