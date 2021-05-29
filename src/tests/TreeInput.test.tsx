import React from 'react';
import { TreeInput } from '../components/TreeInput';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

const renderTreeInput = (args?: any) => {
  const defaultProps = {
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<TreeInput {...props} />);
};

describe('rendering', () => {
  it('renders without crashing', () => {
    renderTreeInput();
  });
});

describe('snapshots', () => {
  it('TreeInput snapshot', () => {
    const onChange = jest.fn();
    const tree = shallow(<TreeInput onChange={onChange} />);
    expect(tree).toMatchSnapshot();
  });
});
