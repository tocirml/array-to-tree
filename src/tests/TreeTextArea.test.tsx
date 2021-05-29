import React from 'react';
import { TreeTextArea } from '../components/TreeTextArea';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

const renderTreeTextArea = (args?: any) => {
  const defaultProps = {
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<TreeTextArea {...props} />);
};

describe('rendering', () => {
  it('renders without crashing', () => {
    renderTreeTextArea();
  });
});

describe('snapshots', () => {
  it('TreeTextArea snapshot', () => {
    const treeNode: any = {
      id: 'root',
      left: null,
      right: null,
    };
    const onChange = jest.fn();
    const tree = shallow(
      <TreeTextArea onChange={onChange} treeNode={treeNode} />
    );
    expect(tree).toMatchSnapshot();
  });
});
