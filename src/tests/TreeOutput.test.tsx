import React from 'react';
import { TreeOutput } from '../components/TreeOutput';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

const renderTreeOutput = (args?: any) => {
  const defaultProps = {
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<TreeOutput {...props} />);
};

describe('rendering', () => {
  it('renders without crashing', () => {
    renderTreeOutput();
  });
});

describe('snapshots', () => {
  it('TreeOutput snapshot', () => {
    const treeNode: any = {};
    const smallestTreeId: string = 'root';
    const tree = shallow(
      <TreeOutput treeNode={treeNode} smallestTreeId={smallestTreeId} />
    );
    expect(tree).toMatchSnapshot();
  });
});
