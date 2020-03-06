import { getDice } from "./get-dice"

describe('roll dice', () => {
  it('should return the rolled dice', () => {
    const result = getDice()
    const areAllNumbers = result
      .filter(n => typeof n === 'number').length === result.length
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toEqual(3)
    expect(areAllNumbers).toBe(true)
  })
})