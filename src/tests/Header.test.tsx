import React from 'react';
import Header, { HeaderRenderer } from '../components/Header';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const TITLE = 'Tree Traversal';

describe('rendering', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders correct title', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toHaveTextContent(TITLE);
  });
});

describe('snapshots', () => {
  it('Header snapshot', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
  it('HeaderRenderer snapshot', () => {
    const appState: any = {
      appState: {
        title: TITLE,
      },
    };
    const tree = shallow(<HeaderRenderer appState={appState} />);
    expect(tree).toMatchSnapshot();
  });
});
