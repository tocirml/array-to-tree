import * as React from 'react';
import { BinTreeNode } from '../models/TreeNode';
import './TreeInput.scss';

export interface TreeInputProps {
  onChange: (newTreeNode: BinTreeNode) => void;
}
interface TreeInputState {
  treeText: string;
}

export class TreeTextArea extends React.Component<
  TreeInputProps,
  TreeInputState
> {
  constructor(props: TreeInputProps) {
    super(props);
    this.state = {
      treeText: '',
    };
  }

  /**
   * Converts array format binary tree notation to BinTreeNode data structure
   * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
   * @returns TreeNode format
   * */
  parseArrayToTree(arrayFormat: any[]): BinTreeNode {
    // recursive solution to convert from array to json tree BinTreeNode
    if (arrayFormat.length === 1) return { id: arrayFormat[0] };

    return {
      id: arrayFormat[0],
      left: arrayFormat[1] ? this.parseArrayToTree(arrayFormat[1]) : null,
      right: arrayFormat[2] ? this.parseArrayToTree(arrayFormat[2]) : null,
    };
  }

  convert = () => {
    let treeArrayFormat: any[] = JSON.parse(this.state.treeText);
    this.props.onChange(this.parseArrayToTree(treeArrayFormat));
  };

  render() {
    return (
      <div>
        <button onClick={this.convert}>Process</button>
        <br />
        <input
          type="text"
          className="array-input"
          onChange={ev => {
            this.setState({
              treeText: ev.target.value,
            });
          }}
        />
      </div>
    );
  }
}
