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
      // basically whenever the app state tree changes, it will update the textarea
      setText(jsonTree);
    }, [jsonTree]);

    const changeHandler = (event: any) => {
      // whenever the textarea changes, will check if can parse it,
      // if not valid then will add an error to the local state
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
          value={text}
          onChange={changeHandler}
        ></textarea>
        {/* check if we have error for display */}
        {error && <div className="json-error">{error}</div>}
      </div>
    );
  };
