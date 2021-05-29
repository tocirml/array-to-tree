import { BinTreeNode } from '../models/TreeNode';

// find the depth of the tree, for the other algorithms
const findTreeDepth = (tree: BinTreeNode | null | undefined): number => {
  if (!tree) return 0;
  if (!tree.left && !tree.right) return 1;
  return 1 + Math.max(findTreeDepth(tree.left), findTreeDepth(tree.right));
};

let nodeIds: any[] = [];

const findDeepNodes = (
  tree: BinTreeNode | null | undefined,
  currentDepth: number,
  treeDepth: number
) => {
  if (tree && !tree!.left && !tree!.right && currentDepth === treeDepth) {
    nodeIds.push(tree!.id);
    return true;
  }
  let left =
    tree!.left && findDeepNodes(tree!.left, currentDepth + 1, treeDepth);
  let right =
    tree!.right && findDeepNodes(tree!.right, currentDepth + 1, treeDepth);

  if (left || right) {
    nodeIds.push(tree!.id);
    return true;
  }
  return false;
};

const findRealId = (tree: BinTreeNode | null | undefined): any => {
  if (!tree) return false;
  let isOnLeft = tree!.left && nodeIds.includes(tree!.left!.id),
    isOnRight = tree!.right && nodeIds.includes(tree!.right!.id);
  if ((isOnLeft && isOnRight) || (!tree!.left && !tree!.right)) return tree.id;
  if (isOnLeft) {
    return findRealId(tree!.left);
  } else {
    return findRealId(tree!.right);
  }
};

export const findSmallestTreeId = (tree: BinTreeNode) => {
  nodeIds = [];
  const treeDepth = findTreeDepth(tree);
  findDeepNodes(tree, 1, treeDepth);
  return findRealId(tree);
};
