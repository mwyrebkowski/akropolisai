import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GuestsSection from '../GuestsSection';

describe('GuestsSection', () => {
  test('renders section with heading', () => {
    render(<GuestsSection />);
    const heading = screen.getByRole('heading', { name: /Keynote Speakers/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders four speaker cards', () => {
    render(<GuestsSection />);
    const cards = screen.getAllByTestId('guest-card');
    expect(cards.length).toBe(4);
  });
}); 