import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScaleBar from '../__components/bar.component'; 

describe('ScaleBar component', () => {
  it('renders with default selection', () => {
    const { getByText } = render(<ScaleBar />);
    expect(getByText('Low')).toBeInTheDocument();
  });

  it('changes selection on click and displays level text', () => {
    const { getByText, getByTestId } = render(<ScaleBar />);
    const barThree = getByTestId('bar-3');

    fireEvent.click(barThree);
    expect(getByText('Good')).toBeInTheDocument();
  });
});
