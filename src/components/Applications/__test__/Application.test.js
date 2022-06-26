import { fireEvent, render, screen } from '@testing-library/react';
import Applications from '../Applications';

describe("Application button tests", () => {
  it('should render a clickable button', async () => {
    render(<Applications />);
    const buttonComponent = await screen.findByTestId('loadMoreButton')
    expect(buttonComponent).toBeInTheDocument()
  });

  it('should return data from API call when page loads', async () => {
    render(<Applications />);
    const applicationElement = await screen.findByTestId('application0')
    expect(applicationElement).toBeInTheDocument()
  });

  it('should return data from API call when button is clicked', async () => {
    render(<Applications />);

    const button = await screen.findByTestId('loadMoreButton')
    fireEvent.click(button)

    const applicationElement = await screen.findByTestId('application5')
    expect(applicationElement).toBeInTheDocument()
  });
})
