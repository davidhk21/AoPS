// Input:
  // Target number
  // Array of arrays (Pyramid)
// Output: String
// Constraints:
  // at least one row in pyramid?
// Edge Cases:
  // No path => empty string?

// Time: O(2^N)
// Space: O(H) where H is height of pyramid
const pyramidDescent = (target, pyramid) => {
  let result = '';

  const descendPyramid = (product, steps, level, block) => {
    if (level === pyramid.length - 1) {
      if (product === target) result = steps;
      return;
    }

    level++;
    let leftProduct = product * pyramid[level][block];
    let rightProduct = product * pyramid[level][block + 1];
    let leftSteps = steps + 'L';
    let rightSteps = steps + 'R';

    if (!result) descendPyramid(leftProduct, leftSteps, level, block);
    if (!result) descendPyramid(rightProduct, rightSteps, level, block + 1);
  }

  descendPyramid(pyramid[0][0], '', 0, 0);
  return result;
}

module.exports = pyramidDescent;