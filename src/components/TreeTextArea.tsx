import * as React from 'react';
import { BinTreeNode } from '../models/TreeNode';
import './TreeTextArea.scss';

export interface TreeTextAreaProps {
  onChange: (newTreeNode: BinTreeNode) => void;
  treeNode: BinTreeNode;
}

export const TreeTextArea: React.FunctionComponent<TreeTextAreaProps> =
  props => {
    return (
      <div className="tree-text-area">
        <label htmlFor="tree-text">Tree Text:</label>
        <br />
        <textarea
          name="tree-text"
          cols={100}
          rows={20}
          value={JSON.stringify(props.treeNode)}
        ></textarea>
      </div>
    );
  };
