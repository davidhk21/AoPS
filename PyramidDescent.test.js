const pyramidDescent = require('./PyramidDescent.js');

describe('Pyramid Descent Puzzle', () => {
  test('should work with sample pyramid given', () => {
    const pyramid = [[1], [2, 3], [4, 1, 1]];
    expect(pyramidDescent(2, pyramid)).toBe('LR');
  })

  test('should work with larger pyramid', () => {
    const pyramid = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];
    expect(pyramidDescent(720, pyramid)).toBe('LRLL');
  })

  test('should return empty string when no path matches target', () => {
    const pyramid = [[10], [2, 1], [3, 4, 5]];
    expect(pyramidDescent(64, pyramid)).toBe('');
  })
})