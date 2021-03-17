# Programming Puzzle for AoPS

This repo is for a programming puzzle given by AoPS (Art of Problem Solving).

The solver can be found in the PyramidDescent.js file.

## Set Up
1. Fork the repository
2. Install the dependencies (just jest in this project)
```
npm install
```

## Testing
Run the following command in the command line at the AoPS directory level to run the tests for the solver using Jest.
```
npm test
```

The test file can be found in PyramidDescent.test.js

## Given Information
- Every input pyramid has atleast a first row.
- Every row has one more number than the row above.
- Each row is aligned such that the center of the row aligns with the midline of the pyramid.
- The pyramid consists of only positive integers.
- Each step in the path must go down one row, and go either one step to the left or to the right.

## Assumptions
- The pyramid input is given as an array of arrays of integers
- If no path is found, return an empty path (string)

## Approach
Seeing that I'm given a pyramid and needed to traverse different paths to match the target, I immediately viewed the problem as a backtracking problem using a decision tree.

I initialized a result variable set to an empty string so that if there was no path that matched the target, an empty string would be returned.

I then initalized an inner recursive function with four parameters to help handle the recursion and invoked it with the top number, an empty string to represent the path, 0 to represent the level of the pyramid, and 0 to represent the index of the level.

In the inner recursion function, I first set up a base case, checking if I was on the bottom level of the pyramid. If I was, then I'd also check if the current product matches the target, if so, I reassign the result to be the string path that has been built up throughout the recursion.

If not at the bottom level, I increment the level, and initialize a new product and string path for both left and right traversal and continue the recursion with the new arguments only if the result has not already been found.

After the recursion has been completed, the result variable is returned with the correct path.