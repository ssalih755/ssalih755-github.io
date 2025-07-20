import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Sarrah Salih heading', () => {
  render(<App />);
  const heading = screen.getByText(/sarrah salih/i);
  expect(heading).toBeInTheDocument();
});

test('renders Skills section heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /skills/i });
  expect(heading).toBeInTheDocument();
});


test('renders Projects section heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /projects/i });
  expect(heading).toBeInTheDocument();
});


