import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

// Mock the openWeather module
jest.mock('../src/openWeather/openWeather', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App component', () => {
  it('renders App component correctly', () => {
    render(<App />);
    
    expect(screen.getByText(/should i run/i)).toBeInTheDocument();
    expect(screen.getByText(/city name/i)).toBeInTheDocument();
  });

  it('handles search correctly', () => {
    // Mock the checkWeather function
    const mockCheckWeather = jest.fn();
    jest.mock('../src/openWeather/openWeather', () => ({
      __esModule: true,
      default: mockCheckWeather,
    }));

    render(<App />);

    // Type into the search bar
    userEvent.type(screen.getByPlaceholderText(/enter your city here/i), 'Singapore');

    // Click the search button
    userEvent.click(screen.getByText(/search/i));

    // Assertions based on the expected behavior
    expect(mockCheckWeather).toHaveBeenCalledWith('Singapore', false);
  });
});
