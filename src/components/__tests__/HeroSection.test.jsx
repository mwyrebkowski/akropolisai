import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  test('renders without crashing', () => {
    render(<HeroSection />);
    const heroSection = screen.getByTestId('hero');
    expect(heroSection).toBeInTheDocument();
  });

  test('displays background image with correct alt text', () => {
    render(<HeroSection />);
    const backgroundImage = screen.getByAltText('Courtyard with robots');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', '/final_hero_being.png');
  });

  test('displays UJ university crest logo', () => {
    render(<HeroSection />);
    const ujLogo = screen.getByAltText('UJ University crest');
    expect(ujLogo).toBeInTheDocument();
    expect(ujLogo).toHaveAttribute('src', '/logo_uj.png');
  });

  test('displays "This is IT" speech bubble logo', () => {
    render(<HeroSection />);
    const speechLogo = screen.getByAltText('This is IT speech bubble');
    expect(speechLogo).toBeInTheDocument();
    expect(speechLogo).toHaveAttribute('src', '/logo_thisisit.png');
  });

  test('displays bottom bar with italic text content', () => {
    render(<HeroSection />);
    const leftText = screen.getByText('Being human in the age of AI');
    const rightText = screen.getByText('Kraków 31.07.2025');
    
    expect(leftText).toBeInTheDocument();
    expect(rightText).toBeInTheDocument();
  });

  test('has correct CSS module classes for styling', () => {
    render(<HeroSection />);
    const heroSection = screen.getByTestId('hero');
    const backgroundImage = screen.getByAltText('Courtyard with robots');
    const ujLogo = screen.getByAltText('UJ University crest');
    const speechLogo = screen.getByAltText('This is IT speech bubble');
    
    // CSS modules generate unique class names, so we check that classes exist
    expect(heroSection.className).toContain('hero');
    expect(backgroundImage.className).toContain('bg');
    expect(ujLogo.className).toContain('crest');
    expect(speechLogo.className).toContain('speech');
  });

  test('bottom bar has correct structure and classes', () => {
    render(<HeroSection />);
    const bottomBar = screen.getByTestId('bottom-bar');
    const leftText = screen.getByText('Being human in the age of AI');
    const rightText = screen.getByText('Kraków 31.07.2025');
    
    expect(bottomBar.className).toContain('bottomBar');
    expect(leftText.className).toContain('left');
    expect(rightText.className).toContain('right');
  });

  test('logos appear in correct DOM order (crest before speech bubble)', () => {
    render(<HeroSection />);
    const ujLogo = screen.getByAltText('UJ University crest');
    const speechLogo = screen.getByAltText('This is IT speech bubble');
    
    // Check DOM order by comparing their positions
    const heroSection = screen.getByTestId('hero');
    const children = Array.from(heroSection.children);
    const ujIndex = children.indexOf(ujLogo);
    const speechIndex = children.indexOf(speechLogo);
    
    expect(ujIndex).toBeLessThan(speechIndex);
  });
}); 