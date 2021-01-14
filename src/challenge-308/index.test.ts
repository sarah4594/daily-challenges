import { waveOrder, isWaveSorted } from '.'

describe('waveOrder', () => {
  it('should take a sequence of numbers and put it in wave order', () => {
    // expect(waveOrder([1, 2, 3, 4])).toEqual([4, 2, 3, 1])
    expect(waveOrder([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4])).toEqual([5454, 5, 65, 5, 65, 4, 34, 4, 6, 2, 5, 1])
    expect(waveOrder([3, 2, 5, 1, 6])).toEqual([6, 2, 5, 1, 3])
    expect(waveOrder([1, 2, 3])).toEqual([3, 1, 2])
  })
  })

  describe('isWaveSorted', () => {
    it('should verify waveOrder', () => {
      // expect(waveOrder([1, 2, 3, 4])).toEqual([4, 2, 3, 1])
      expect(isWaveSorted([5, 2, 4, 1, 3])).toBe(true)
      expect(isWaveSorted([5, 2, 4, 3, 1])).toBe(false)
      expect(isWaveSorted([5454, 5, 65, 5, 65, 4, 34, 4, 6, 2, 5, 1])).toBe(true)
      expect(isWaveSorted([6, 2, 5, 1, 3])).toBe(true)
      expect(isWaveSorted([6, 2, 5, 1, 3])).toBe(true)
      expect(isWaveSorted([3, 1, 2])).toBe(true)
    })
    })


    /*
    [6, 5, 3, 2, 1]
    [6, 5, 3] [2, 1]
    [6, 2, 5, 1, 3]
    
    [5454, 65, 65, 34, 6, 5, 5, 5, 4, 4, 2, 1]

    [5454, 65, 65, 34, 6, 5] [5, 5, 4, 4, 2, 1]

    [5454, 5, 65, 5, 65, 4, 34, 4, 6, 2, 5, 1]
    
    */


    /* 
    [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]

    * 1 < 2
    * go through list to find 1st number > 1 and switch
    * switch num2 with num1
    * 
    [2, 1, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]

    * 2 > 1, 1 < 34, 34 > 4, 4 < 5, 5 !> 5
    * go through rest of list and find first number > 5 and switch
    *switch num6 with num12

    [2, 1, 34, 4, 5, 4, 5, 65, 6, 65, 5454, 5]

    * 5 > 4, 4 < 5, 5 !> 65
    * go through list and find number < 5
    * there is none so we have to go back to the previous iteration
    
    [2, 1, 34, 4, 5, 4, 5, 65, 6, 65, 5454, 5]

    * find next number that is > 4
    * switch num7 with num8 because 4 < 65, and 65 > 5

    [2, 1, 34, 4, 5, 4, 65, 5, 6, 65, 5454, 5]

    * 65 > 5, 5 < 6, 6 !> 65
    * go through and and find number < 6
    * switch num10 with num12
    
    [2, 1, 34, 4, 5, 4, 65, 5, 6, 5, 5454, 65]

    * 6 > 5, 5 < 5454, 5454 > 65

    */
