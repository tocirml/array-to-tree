// added left and right as optional, to match the desired data structure
export class BinTreeNode {
  id: string;
  left?: BinTreeNode | null;
  right?: BinTreeNode | null;
  constructor(
    id: string,
    left?: BinTreeNode | null,
    right?: BinTreeNode | null
  ) {
    this.id = id;
    this.left = left;
    this.right = right;
  }
}
