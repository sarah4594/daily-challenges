import { mostSales } from '.'

describe('mostSales', () => {
  it('should take in sales data and returns the products(s) with the highest sales', () => {
    expect(
      mostSales(
        ['Computer', 'Cell Phones', 'Vacuum Cleaner'],
        [3, 24, 8],
        [199, 299, 399],
      ),
    ).toEqual(['Cell Phones'])
    expect(
      mostSales(
        [
          'Cell Phones',
          'Vacuum Cleaner',
          'Computer',
          'Autos',
          'Gold',
          'Fishing Rods',
          'Lego',
          ' Speakers',
        ],
        [0, 12, 24, 17, 19, 23, 120, 8],
        [9, 24, 29, 31, 51, 8, 120, 14],
      ),
    ).toEqual(['Lego'])
    expect(
      mostSales(['Cell Phones', 'Vacuum Cleaner'], [1, 1], [1, 1]),
    ).toEqual(['Cell Phones', 'Vacuum Cleaner'])
    expect(
      mostSales(['Cell Phones', 'Vacuum Cleaner'], [0, 0], [1, 1]),
    ).toEqual([])
  })
})
