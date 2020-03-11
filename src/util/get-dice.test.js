import { getDice } from "./get-dice"

describe('roll the dice', () => {
  it('should return the rolled dice', () => {
    const result = getDice()
    const allNumbers = result
      .filter(n => typeof n === 'number').length === result.length
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toEqual(3)
    expect(allNumbers).toBe(true)
  })
})