import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';

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
    const leftText = screen.getByText('Being Human in the Age of AI');
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
    const leftText = screen.getByText('Being Human in the Age of AI');
    const rightText = screen.getByText('Kraków 31.07.2025');
    
    expect(bottomBar.className).toContain('bottomBar');
    expect(leftText.className).toContain('left');
    expect(rightText.className).toContain('right');
  });

  test('logos appear in correct DOM order (crest before speech bubble)', () => {
    render(<HeroSection />);
    const ujLogo = screen.getByAltText('UJ University crest');
    const speechLogo = screen.getByAltText('This is IT speech bubble');

    // compareDocumentPosition returns a bitmask. DOCUMENT_POSITION_FOLLOWING (4) indicates that
    // ujLogo comes before speechLogo in the DOM tree.
    const isUjBeforeSpeech = ujLogo.compareDocumentPosition(speechLogo) & Node.DOCUMENT_POSITION_FOLLOWING;
    expect(isUjBeforeSpeech).toBeTruthy();
  });

  test('crest and speech logos have correct links', () => {
    render(<HeroSection />);
    const crestLink = screen.getByAltText('UJ University crest').closest('a');
    const speechLink = screen.getByAltText('This is IT speech bubble').closest('a');
    expect(crestLink).toHaveAttribute('href', 'https://www.uj.edu.pl/');
    expect(speechLink).toHaveAttribute('href', 'https://www.youtube.com/@MK_ThisIsIT');
  });
});

describe('AboutSection', () => {
  test('renders interview image (wywiad.png) in the right section', () => {
    render(<AboutSection />);
    const interviewImg = screen.getByAltText('Wywiad Macieja Kaweckiego z Wojciechem Zarembą');
    expect(interviewImg).toBeInTheDocument();
    expect(interviewImg).toHaveAttribute('src', '/wywiad.png');
  });

  test('interview image appears after the call-to-action button (bottom of section)', () => {
    render(<AboutSection />);
    const button = screen.getByRole('button', { name: /Formularz zgłoszeniowy/i });
    const interviewImg = screen.getByAltText('Wywiad Macieja Kaweckiego z Wojciechem Zarembą');

    const aboutSection = button.closest('section');
    const children = Array.from(aboutSection.children);
    const buttonIndex = children.indexOf(button.parentElement); // button is inside left div
    const imgWrapper = interviewImg.closest('a');
    const imgParentIndex = children.indexOf(imgWrapper.parentElement);

    expect(imgParentIndex).toBeGreaterThan(buttonIndex);
  });
}); 