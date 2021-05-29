import * as React from 'react';
import { BinTreeNode } from '../models/TreeNode';

import './TreeOutput.scss';

export interface TreeOutputProps {
  treeNode: BinTreeNode | null | undefined;
  smallestTreeId: string | number;
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = props => {
  if (!props.treeNode || !props.treeNode.id) {
    return <div className="treeNode"></div>;
  }
  return (
    <div
      className={`treeNode ${
        // we check what Id matches to paint its border green, problem 3
        props.smallestTreeId === props.treeNode.id && 'smallest-subtree'
      }`}
    >
      <div className="nodeId">{props.treeNode.id}</div>
      {props.treeNode.left || props.treeNode.right ? (
        <div className="nodeChildren">
          <TreeOutput
            treeNode={props.treeNode.left}
            smallestTreeId={props.smallestTreeId}
          />
          <TreeOutput
            treeNode={props.treeNode.right}
            smallestTreeId={props.smallestTreeId}
          />
        </div>
      ) : null}
    </div>
  );
};
