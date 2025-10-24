import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('renders the home page hero content', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Zebra Label Generator/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /open canvas/i })).toBeInTheDocument();
  });
});
