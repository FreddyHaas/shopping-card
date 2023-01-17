import { render, screen } from '@testing-library/react';
import App from './App';

test('Adds item', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});