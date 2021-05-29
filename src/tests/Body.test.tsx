import React from 'react';
import Body, { BodyRenderer } from '../components/Body';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

const BODY_MESSAGE = 'Process the input text to a BinTreeNode';

describe('rendering', () => {
  it('renders without crashing', () => {
    render(<Body />);
  });

  it('renders correct body message', () => {
    render(<Body />);
    expect(screen.getByTestId('body-message')).toHaveTextContent(BODY_MESSAGE);
  });
});

// describe('functionality', () => {
//     it('calls changeHandler on fetch', () => {
//         const changeHandler = jest.fn();

//     })
// })

describe('snapshots', () => {
  it('Body snapshot', () => {
    const tree = shallow(<Body />);
    expect(tree).toMatchSnapshot();
  });

  it('BodyRenderer snapshot', () => {
    const appState: any = {
      appState: {
        bodyMessage: BODY_MESSAGE,
      },
    };
    const tree = shallow(<BodyRenderer appState={appState} />);
    expect(tree).toMatchSnapshot();
  });
});
