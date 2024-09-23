namespace SpriteKind {
    export const CourseSteps = SpriteKind.create()
    export const P1AlgoSteps = SpriteKind.create()
    export const P2AlgoSteps = SpriteKind.create()
    export const P3AlgoSteps = SpriteKind.create()
    export const P4AlgoSteps = SpriteKind.create()
    export const P1PriorAlgoSteps = SpriteKind.create()
    export const P2PriorAlgoSteps = SpriteKind.create()
    export const P3PriorAlgoSteps = SpriteKind.create()
    export const P4PriorAlgoSteps = SpriteKind.create()
}

info.onCountdownEnd(function () {

})

//% color=#AF7817 icon="\uf2f2"
//% groups=['Players', 'Courses', 'Game', 'Scene', 'Sounds',]
namespace agility {
    enum direction {
        up,
        left,
        right,
    }

    interface Course {
        name: string,
        steps: Direction[],
    }

    interface Direction {
        dir: direction,
        name: string,
        images: Image[],
    }

    interface Point {
        x: number,
        y: number,
    }

    const PLAYER_ALGO_KINDS: number[] = [
        -1,
        SpriteKind.P1AlgoSteps,
        SpriteKind.P2AlgoSteps,
        SpriteKind.P3AlgoSteps,
        SpriteKind.P4AlgoSteps,
    ]
    const PLAYER_PRIOR_ALGO_KINDS: number[] = [
        -1,
        SpriteKind.P1PriorAlgoSteps,
        SpriteKind.P2PriorAlgoSteps,
        SpriteKind.P3PriorAlgoSteps,
        SpriteKind.P4PriorAlgoSteps,
    ]
    const DIRECTIONS: Direction[] = []
    const RESET_SCREEN_KINDS: number[] = [
        SpriteKind.CourseSteps,
        SpriteKind.P1AlgoSteps,
        SpriteKind.P2AlgoSteps,
        SpriteKind.P3AlgoSteps,
        SpriteKind.P4AlgoSteps,
        SpriteKind.P1PriorAlgoSteps,
        SpriteKind.P2PriorAlgoSteps,
        SpriteKind.P3PriorAlgoSteps,
        SpriteKind.P4PriorAlgoSteps,
    ]
    let needsInit: boolean = true
    let courses: Course[] = []
    let courseOrder: number[] = []
    let currCourse: Course = null
    let currRound: number = -1
    let stepImg: Image = assets_agility.step
    let lastStepImg: Image = assets_agility.cone
    let missStepImg: Image = assets_agility.missSmall
    let stepSpriteDelta: number = 20
    let fbPlayer: Sprite = null
    let playerAlgos: Image[][] = []
    const PLAYER_ALGO_STARTS: Point[] = [
        null,
        { x: 4, y: 25, },
        { x: 156, y: 25, },
        { x: 4, y: 95, },
        { x: 156, y: 95, },
    ]
    let fbPlayerSpeed: number = 25
    let fbStepPause: number = 1000
    let startTicks: number = 0
    let stopTicks: number = 0
    let timerLength: number = 30
    let playerLives: number = 3
    let multiplayer: boolean = false
    let asyncRunDoneHandler: () => void = null
    let runningCourse: boolean = false
    let randomCourseCount: number = 0

    //% block="add course with name $name steps $course"
    //% course.shadow="lists_create_with"
    //% course.defl="screen_image_picker"
    //% group="Courses"
    export function addCourse(name: string, course: Image[]): void {
        if (needsInit) {
            init()
        }

        let newCourse: Course = {
            name: name,
            steps: []
        }
        for (let step of course) {
            let d: Direction = getDirectionForImage(step)
            if (d !== null) {
                newCourse.steps.push(d)
            }
        }
        if (newCourse.steps.length > 0) {
            courseOrder.push(courses.length)
            courses.push(newCourse)
        }
    }

    //% block
    //% img.shadow=screen_image_picker
    //% group="Scene"
    export function addImageLeft(img: Image): void {
        if (needsInit) {
            init()
        }
        DIRECTIONS[direction.left].images.push(img)
    }

    //% block
    //% img.shadow=screen_image_picker
    //% group="Scene"
    export function addImageRight(img: Image): void {
        if (needsInit) {
            init()
        }
        DIRECTIONS[direction.right].images.push(img)
    }

    //% block
    //% img.shadow=screen_image_picker
    //% group="Scene"
    export function addImageUp(img: Image): void {
        if (needsInit) {
            init()
        }
        DIRECTIONS[direction.up].images.push(img)
    }

    //% block="add step $img for player $player"
    //% img.shadow=screen_image_picker
    //% player.defl=1
    //% group="Players"
    export function addPlayerStep(player: number, img: Image): void {
        if (player < 1 || player > 4 || img === null || img === undefined) {
            return
        }
        if (!playerHasLives(player)) {
            return
        }
        if (runningCourse) {
            return
        }
        playerAlgos[player].push(img)
        showPlayerAlgo(player)
    }

    //% block="add random course with $steps steps"
    //% group="Courses"
    export function addRandomCourse(steps: number): void {
        if (steps < 1) {
            return
        }
        randomCourseCount++
        let stepImages: Image[] = []
        for (let i: number = 0; i < steps; i++) {
            stepImages.push(DIRECTIONS[randint(0, 2)].images[0])
        }
        addCourse("Random course #" + randomCourseCount, stepImages)
    }

    //% block="check algorithm for player $player"
    //% player.defl=1
    //% group="Players"
    export function checkPlayerAlgo(player: number): boolean {
        if (player < 1 || player > 4) {
            return false
        }
        if (!playerHasLives(player)) {
            return false
        }
        if (runningCourse) {
            return false
        }
        if (!checkPlayerAlgoSteps(player)) {
            let wrongLength: boolean =
                playerAlgos[player].length !=
                currCourse.steps.length
            for (let s of sprites.allOfKind(PLAYER_PRIOR_ALGO_KINDS[player])) {
                if (player < 3) {
                    s.y += s.height + 1
                } else {
                    s.y -= s.height + 1
                }
            }
            let index: number = 0
            for (let s of sprites.allOfKind(PLAYER_ALGO_KINDS[player])) {
                if (player < 3) {
                    s.y += s.height + 1
                } else {
                    s.y -= s.height + 1
                }
                if (wrongLength) {
                    s.setImage(missStepImg)
                } else {
                    let dir: Direction = getDirectionForImage(s.image)
                    if (dir.dir != currCourse.steps[index].dir) {
                        s.setImage(missStepImg)
                    }
                }
                s.setKind(PLAYER_PRIOR_ALGO_KINDS[player])
                index++
            }
            playerAlgos[player] = []
            changePlayerLife(player, -1)
            return false
        } else {
            info.stopCountdown()
            stopTicks = game.runtime()
            return true
        }
    }

    //% block="delete last step for player $player"
    //% player.defl=1
    //% group="Players"
    export function deletePlayerStep(player: number): void {
        if (player < 1 || player > 4) {
            return
        }
        if (!playerHasLives(player)) {
            return
        }
        if (runningCourse) {
            return
        }
        if (playerAlgos[player].length == 0) {
            return
        }
        playerAlgos[player].pop()
        showPlayerAlgo(player)
    }

    //% block="draw current course"
    //% group="Scene"
    export function drawCourse(): void {
        if (needsInit) {
            init()
        }

        let currX: number = 0
        let currY: number = 0

        if (fbPlayer !== null) {
            fbPlayer.setPosition(currX, currY)
        }

        for (let step of currCourse.steps) {
            switch (step.dir) {
                case direction.up:
                    currY -= stepSpriteDelta
                    break

                case direction.left:
                    currX -= stepSpriteDelta
                    break

                case direction.right:
                    currX += stepSpriteDelta
                    break
            }

            let stepSprite: Sprite = sprites.create(stepImg, SpriteKind.CourseSteps)
            stepSprite.setPosition(currX, currY)
            stepSprite.setFlag(SpriteFlag.Ghost, true)
        }
        let endSprite: Sprite = sprites.create(lastStepImg, SpriteKind.CourseSteps)
        endSprite.setPosition(currX, currY)
        endSprite.setFlag(SpriteFlag.Ghost, true)
        endSprite.z = 98

        let left: number = 0
        let top: number = 0
        let right: number = 0
        let bottom: number = 0

        let courseSprites: Sprite[] = sprites.allOfKind(SpriteKind.CourseSteps)
        courseSprites.push(fbPlayer)
        for (let c of courseSprites) {
            if (c.left < left) {
                left = c.left
            }
            if (c.top < top) {
                top = c.top
            }
            if (c.right > right) {
                right = c.right
            }
            if (c.bottom > bottom) {
                bottom = c.bottom
            }
        }

        let width: number = right - left
        let height: number = bottom - top
        let newLeft: number = Math.floor(80 - width / 2)
        let newTop: number = Math.floor(60 - height / 2)
        let deltaX: number = newLeft - left
        let deltaY: number = newTop - top

        for (let c of courseSprites) {
            c.setPosition(c.x + deltaX, c.y + deltaY)
        }
    }

    //% block
    //% group="Courses"
    export function getCourseName(): string {
        if (currRound < 0) {
            return ""
        }
        return courses[currRound].name
    }

    //% block="get current round"
    //% group="Game"
    export function getCurrRound(): number {
        return currRound + 1
    }

    //% block
    //% group="Game"
    export function getScore(): number {
        return Math.max(0,
            timerLength - Math.floor((stopTicks - startTicks) / 1000))
    }

    //% block="number of courses"
    //% group="Courses"
    export function numCourses(): number {
        return courses.length
    }

    //% block
    //% group="Scene"
    export function onCourseRunDone(handler: () => void) {
        asyncRunDoneHandler = handler
    }

    //% block="players have life?"
    //% group="Game"
    export function playersHaveLife(): boolean {
        if (multiplayer) {
            return info.player1.hasLife() ||
                info.player2.hasLife() ||
                info.player3.hasLife() ||
                info.player4.hasLife()
        }
        return info.hasLife()
    }

    //% block
    //% group="Sounds"
    export function playGameStartup(): void {
        music.play(
            music.createSoundEffect(WaveShape.Sine, 2000, 0, 1023, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear),
            music.PlaybackMode.UntilDone
        )
    }

    //% block
    //% group="Sounds"
    export function playIncorrectPath(): void {
        music.play(
            music.createSoundEffect(WaveShape.Noise, 3228, 1534, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear),
            music.PlaybackMode.InBackground
        )
    }

    //% block
    //% on.defl=false
    //% on.shadow=toggleOnOff
    //% group="Courses"
    export function randomizeCourses(on: boolean): void {
        if (on) {
            let count: number = courseOrder.length
            for (let i: number = 0; i < count; i++) {
                let j: number = randint(0, count - 1)
                swapCourses(i, j)
            }
        } else {
            courseOrder = []
            for (let i: number = 0; i < courses.length; i++) {
                courseOrder.push(i)
            }
        }
    }

    //% block
    //% group="Courses"
    //% deprecated=true
    export function runCourse(): void {
        runningCourse = true
        let follow: Sprite = sprites.create(img`.`, SpriteKind.CourseSteps)
        follow.setPosition(fbPlayer.x, fbPlayer.y)
        follow.z = -1
        fbPlayer.follow(follow, fbPlayerSpeed)
        for (let d of currCourse.steps) {
            for (let i of d.images) {
                if (i.width > 10) {
                    follow.setImage(i)
                }
            }
            follow.setPosition(fbPlayer.x, fbPlayer.y)
            switch (d.dir) {
                case direction.up:
                    follow.y -= stepSpriteDelta
                    break

                case direction.left:
                    follow.x -= stepSpriteDelta
                    break

                case direction.right:
                    follow.x += stepSpriteDelta
                    break
            }
            pause(fbStepPause)
        }
        fbPlayer.follow(null)
        runningCourse = false
    }

    //% block="set image for last step to $img"
    //% img.shadow=screen_image_picker
    //% group="Scene"
    export function setLastStepImage(img: Image): void {
        lastStepImg = img
    }

    //% block
    //% on.defl=false
    //% on.shadow=toggleOnOff
    //% group="Game"
    export function setMultiplayer(on: boolean): void {
        multiplayer = on
    }

    //% block="set player starting lives to $lives"
    //% lives.defl=3
    //% group="Game"
    export function setPlayerLives(lives: number): void {
        playerLives = lives
    }

    //% block="set player sprite to $sprite"
    //% group="Scene"
    export function setPlayerSprite(sprite: Sprite): void {
        fbPlayer = sprite
        if (fbPlayer !== null) {
            fbPlayer.z = 99
        }
    }

    //% block="set image for step to $img"
    //% img.shadow=screen_image_picker
    //% group="Scene"
    export function setStepImage(img: Image): void {
        stepImg = img
    }

    //% block="set timer length to $seconds seconds"
    //% seconds.defl=30
    //% group="Game"
    export function setTimerLength(seconds: number): void {
        timerLength = seconds
    }

    //% block
    //% group="Scene"
    export function startCourseRun(): void {
        timer.background(() => {
            runCourse()
            if (asyncRunDoneHandler !== null) {
                asyncRunDoneHandler()
            }
        })
    }

    //% block
    //% group="Game"
    export function startNewRound(): void {
        if (needsInit) {
            init()
        }
        if (currRound + 1 >= courses.length) {
            return
        }
        currRound++
        let currCourseIndex: number = courseOrder[currRound]
        currCourse = courses[currCourseIndex]
        for (let k of RESET_SCREEN_KINDS) {
            sprites.destroyAllSpritesOfKind(k)
        }
        drawCourse()
        for (let id: number = 1; id <= 4; id++) {
            playerAlgos[id] = []
            if (multiplayer) {
                setPlayerLife(id, playerLives)
            }
        }
        if (!multiplayer) {
            info.setLife(playerLives)
        }
        game.splash("Round " + (currRound + 1) + ": " + currCourse.name,
            "Course has " + currCourse.steps.length + " steps.")
        startTicks = game.runtime()
        info.startCountdown(timerLength)
    }

    function init(): void {
        if (!needsInit) {
            return
        }

        DIRECTIONS.push({
            dir: direction.up,
            name: "Up",
            images: [
                assets_agility.upArrowSmall,
                assets_agility.upArrowLarge,
            ],
        })
        DIRECTIONS.push({
            dir: direction.left,
            name: "Left",
            images: [
                assets_agility.leftArrowSmall,
                assets_agility.leftArrowLarge,
            ],
        })
        DIRECTIONS.push({
            dir: direction.right,
            name: "Right",
            images: [
                assets_agility.rightArrowSmall,
                assets_agility.rightArrowLarge,
            ],
        })

        playerAlgos.push(null) // Do not use player ID 0
        for (let id: number = 0; id < 4; id++) {
            playerAlgos.push([])
        }

        needsInit = false
    }

    function changePlayerLife(player: number, delta: number): void {
        switch (player) {
            case 1:
                info.player1.changeLifeBy(delta)
                break

            case 2:
                info.player2.changeLifeBy(delta)
                break

            case 3:
                info.player3.changeLifeBy(delta)
                break

            case 4:
                info.player4.changeLifeBy(delta)
                break
        }
    }

    function checkPlayerAlgoSteps(player: number): boolean {
        if (player < 1 || player > 4) {
            return false
        }
        let algoImages: Image[] = playerAlgos[player]
        if (algoImages.length != currCourse.steps.length) {
            return false
        }
        let algo: Direction[] = []
        for (let i of algoImages) {
            let dir: Direction = getDirectionForImage(i)
            if (dir === null) {
                return false
            }
            algo.push(dir)
        }
        for (let i: number = 0; i < algo.length; i++) {
            if (algo[i].dir != currCourse.steps[i].dir) {
                return false
            }
        }
        return true
    }

    function getDirectionForImage(img: Image): Direction {
        for (let d of DIRECTIONS) {
            for (let i of d.images) {
                if (i.equals(img)) {
                    return d
                }
            }
        }
        return null
    }

    function getPlayerLife(player: number): number {
        switch (player) {
            case 1:
                return info.player1.life()
                break

            case 2:
                return info.player2.life()
                break

            case 3:
                return info.player3.life()
                break

            case 4:
                return info.player4.life()
                break
        }
        return -1
    }

    function playerHasLives(player: number): boolean {
        switch (player) {
            case 1:
                return info.player1.hasLife()
                break

            case 2:
                return info.player2.hasLife()
                break

            case 3:
                return info.player3.hasLife()
                break

            case 4:
                return info.player4.hasLife()
                break
        }
        return false
    }

    function setPlayerLife(player: number, value: number): void {
        switch (player) {
            case 1:
                info.player1.setLife(value)
                break

            case 2:
                info.player2.setLife(value)
                break

            case 3:
                info.player3.setLife(value)
                break

            case 4:
                info.player4.setLife(value)
                break
        }
    }

    function showPlayerAlgo(player: number): void {
        let kind: number = PLAYER_ALGO_KINDS[player]
        sprites.destroyAllSpritesOfKind(kind)

        let algo: Image[] = playerAlgos[player]
        let x: number = PLAYER_ALGO_STARTS[player].x
        if (player == 2 || player == 4) {
            x -= (algo.length - 1) * algo[0].width
        }
        let y: number = PLAYER_ALGO_STARTS[player].y
        for (let i of playerAlgos[player]) {
            let s: Sprite = sprites.create(i, kind)
            s.setPosition(x, y)
            x += i.width
        }
    }

    function swapCourses(id1: number, id2: number): void {
        if (id1 == id2) {
            return
        }
        let t: number = courseOrder[id1]
        courseOrder[id1] = courseOrder[id2]
        courseOrder[id2] = t
    }
}
