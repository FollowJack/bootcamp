# [FollowJack Game of Life](https://followjack.io/game_of_life)

FollowJack Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970 created in BDD.

## Preview

[![Game of Life Preview](https://github.com/FollowJack/bootcamp/tree/master/game_of_life/docs/game_of_life.png)](http://followjack.io/game_of_life)

**[View Live Preview](http://followjack.io/game_of_life)**


### Rules

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:   

1. Any live cell with fewer than two live neighbors dies, as if by under population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

## Usage

### Basic Usage

### Install

 `npm install --save followjacks-game-of-life`
 
### Usage

```
import GameOfLife from 'followjacks-game-of-life'   

let gameOfLife = new GameOfLife(200, 100)   

this.gameOfLife.swtichToNextGeneration()   
```

### Test

For running mocha.js and nyc coverage tests run:   

 `npm test`

For debuging test run:

 `npm run testDebug`

### Inject into your application

See ui_manager.js as an example for ui integration.


## About

Game of Life was created by and is maintained by **[FollowJack](http://followjack.io/)**.

* http://followjack.io
* https://twitter.com/followjackdev
* https://github.com/followjack
