# Tree Traversal

This app is made as part of a challenge presented by Microsoft. Made with React, Typescript, Mobx.

## Overview

The app will accept 2 types of inputs, a text input and a file input. The expected input data is an array with a format [id, leftChild, rightChild]

```javascript
interface BinTreeNode {
  id: string;
  left?: BinTreeNode | null;
  right?: BinTreeNode | null;
}
```

When the Fetch button is pressed the array will be parsed into a binary tree data structure that will be shown in the Tree Text, and a respective visual node tree in the Output.

Example:

Input:

```
 [1, [2], [3, null, [5]]]
```

Output:

```
{
  "id": 1,
  "left": {
    "id": 2
  },
  "right": {
    "id": 3,
    "left": null,
    "right": {
      "id": 5
    }
  }
}
```

The Tree Text can be updated, if the JSON structure is broken, it will display an error message until a valid format is provided, and this will update the Output as well.

The output will highlight in green border the smallest tree with all the deepest nodes.

## SOLUTION

The challenge presented 3 problems.
A skeleton app was presented as an option, in order to updated it with the solutions for the problems. This option was taken.
Reasons:

- It presented a good challenge since the app was started with Typescript and Mobx, both technologies that I was not much familiar with, specially Mobx. So learning somehitng new and having the chance to experiment wih it is always good for growing up as developer.
- It always presents a challenge to start working on an app with code from someone else. Learning by checking others code is always a good method.
- Typescript is something I'm very interested in, so I took the chance to learn more about it.

### Problem 1

Parse the array with format [id, leftChild, rightChild] into a binary tree JSON structure.

Code found in src/components/TreeInput.tsx

```javascript
parseArrayToTree(arrayFormat: any[]): BinTreeNode {
    if (arrayFormat.length === 1) return { id: arrayFormat[0] };

    return {
      id: arrayFormat[0],
      left: arrayFormat[1] ? this.parseArrayToTree(arrayFormat[1]) : null,
      right: arrayFormat[2] ? this.parseArrayToTree(arrayFormat[2]) : null,
    };
  }
```

The solution is a recursive function that will create the obj based on the lenght of the array.

As soon as the fetch button is pressed this function will be called, will parse the array and save the result in the app state as a BinTreeNode.

### Problem 2

Divided in 3 parts:

1. Allow user to provide a file with the array input. It was decided to also let the user use a input text in order to provide the array.

2. The JSON data on the Tree Text must be displayed in a "good" format. This was done with JSON.stringsify

```
JSON.stringify(treeNode, null, 2);
```

3. Edit the Tree Text in order to update the Output. As long as the JSON is valid it will update the Output accordinly, but if the format is broken, then an error message will be displayed.

### Problem 3

Find the smallest tree with all the deepest nodes.

In order to solve this a file was added src/utils/binaryTreeUtils.ts, with all the functions needed in order to achieve the solution.

Basically the implemented solution has 3 steps.

1. Find the depth of the tree. (findTreeDepth)
2. Find all the trees that have the deepest nodes. (findDeepNodes)
3. Find the smaller one that contains all deepest nodes. (findRealId)

The only assumption made was that all tree Ids are unique. Because we are using the tree ID to check which tree to paint with border green in the Output.

Again, recursiveness was the key fo this solution. Probably there are better solutions for this problem, but I decided to do this on my own and not look for any clue on the internet.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
