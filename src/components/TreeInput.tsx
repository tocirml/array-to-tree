import * as React from 'react';
import { BinTreeNode } from '../models/TreeNode';
import './TreeInput.scss';

export interface TreeInputProps {
  onChange: (newTreeNode: BinTreeNode) => void;
}
interface TreeInputState {
  treeText: string | ArrayBuffer | null;
}

export class TreeInput extends React.Component<TreeInputProps, TreeInputState> {
  // I decide to keep this as class component
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
  parseArrayToTree = (arrayFormat: any[]): BinTreeNode => {
    // recursive solution to convert from array to json tree BinTreeNode
    if (arrayFormat.length === 1) return { id: arrayFormat[0] };

    return {
      id: arrayFormat[0],
      left: arrayFormat[1] ? this.parseArrayToTree(arrayFormat[1]) : null,
      right: arrayFormat[2] ? this.parseArrayToTree(arrayFormat[2]) : null,
    };
  };

  convert = () => {
    // this will run when Fetch is pressed, we check if is string parsed to array
    // to be handled by the array to binary tree, and update app state
    let treeArrayFormat: any[];
    if (typeof this.state.treeText === 'string') {
      treeArrayFormat = JSON.parse(this.state.treeText);
      this.props.onChange(this.parseArrayToTree(treeArrayFormat));
    }
  };

  handleFileChange = (e: any) => {
    // added a try catch to prevent app from crashing
    // Im not validating only for specific type of files, but thats a good improvement for future
    try {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = e => {
        this.setState({
          treeText: e.target!.result,
        });
      };
    } catch {}
  };

  render() {
    return (
      <div className="tree-source">
        <label htmlFor="array-input">Tree source</label>
        <br />
        <input
          type="text"
          name="array-input"
          className="array-input"
          value={String(this.state.treeText)}
          onChange={ev => {
            this.setState({
              treeText: ev.target.value,
            });
          }}
        />
        {/* <div className="or">OR</div> */}
        <br />
        <input type="file" onChange={this.handleFileChange} />
        <br />
        <button onClick={this.convert} className="fetch-button">
          Fetch
        </button>
      </div>
    );
  }
}
