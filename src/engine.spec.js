import {add} from "./engine"


describe('Engine', () => {
  it('should start with an empty board', () => {
    const engine = new Engine()

    const actual = engine.board

    expect(actual).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ])
  })
})


// import { Engine } from './engine'

// describe('Engine', () => {
//   it('should start with an empty board', () => {
//     const engine = new Engine()

//     const actual = engine.board

//     expect(actual).toEqual([
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ])
//   })

//   it('should set a value in the board when a player plays', () => {
//     const engine = new Engine()

//     engine.play(1, 2)
//     const actual = engine.board

//     expect(actual).toEqual([
//       [null, null, null],
//       ['O', null, null],
//       [null, null, null]
//     ])
//   })

//   it('should alternate players', () => {
//     const engine = new Engine()

//     engine.play(1, 2)
//     engine.play(1, 1)
//     const actual = engine.board

//     expect(actual).toEqual([
//       [null, null, null],
//       ['O', null, null],
//       ['X', null, null]
//     ])
//   })
// })