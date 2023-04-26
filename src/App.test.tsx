import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders main div', () => {
  render(<App />);
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
