import * as React from 'react';
import { BinTreeNode } from '../models/TreeNode';
import './TreeTextArea.scss';

export interface TreeTextAreaProps {
  onChange: (newTreeNode: BinTreeNode) => void;
  treeNode: BinTreeNode;
}

export const TreeTextArea: React.FunctionComponent<TreeTextAreaProps> =
  props => {
    const jsonTree = JSON.stringify(props.treeNode, null, 2);
    const [text, setText] = React.useState<string>(jsonTree);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
      setText(jsonTree);
    }, [jsonTree]);

    const changeHandler = (event: any) => {
      const { value } = event.target;
      setText(value);
      try {
        let validJson = JSON.parse(value);
        setError(null);
        props.onChange(validJson);
      } catch {
        setError('Invalid JSON format');
      }
    };

    return (
      <div className="tree-text-area">
        <label htmlFor="tree-text">Tree Text:</label>
        <br />
        <textarea
          name="tree-text"
          cols={100}
          rows={20}
          value={text}
          onChange={changeHandler}
        ></textarea>
        {error && <div className="json-error">{error}</div>}
      </div>
    );
  };
