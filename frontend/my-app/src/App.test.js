import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => { // Add async here
  render(<App />);
  
  // Use findByText which waits for the text to appear asynchronously
  const linkElement = await screen.findByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});

