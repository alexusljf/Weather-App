import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // For simulating user events
const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

import checkWeather from '../src/openWeather/openWeather';

describe('checkWeather function', () => {
  it('displays an error message for 404 response', async () => {
    // Mock the fetch function to simulate a 404 response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 404,
        json: () => Promise.resolve({}),
      })
    );

    // Mock the DOM elements
    const errorDivMock = document.createElement('div');
    const weatherSectionDivMock = document.createElement('div');
    const headerCountryDivMock = document.createElement('div');

    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
      switch (selector) {
        case '.errorDay':
          return errorDivMock;
        case '.weatherSectionDay':
          return weatherSectionDivMock;
        case '.headerCountryDay':
          return headerCountryDivMock;
        default:
          return null;
      }
    });

    // Call the checkWeather function
    await checkWeather('NonexistentCity', false);

    // Assertions based on the expected behavior
    expect(errorDivMock.style.display).toBe('block');
    expect(weatherSectionDivMock.style.display).toBe('none');
    expect(headerCountryDivMock.style.display).toBe('none');
  });
  
it('displays weather information for valid response', async () => {
    // Mock the fetch function to simulate a successful response
    global.fetch = jest.fn(() =>
        Promise.resolve({
            status: 200,
            json: () =>
                Promise.resolve({
                    // Mock the response data here
                    temperature: 25,
                    description: 'Sunny',
                    humidity: 60,
                }),
        })
    );

    // Mock the DOM elements
    const errorDivMock = document.createElement('div');
    const weatherSectionDivMock = document.createElement('div');
    const headerCountryDivMock = document.createElement('div');

    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
        switch (selector) {
            case '.errorDay':
                return errorDivMock;
            case '.weatherSectionDay':
                return weatherSectionDivMock;
            case '.headerCountryDay':
                return headerCountryDivMock;
            default:
                return null;
        }
    });

    // Call the checkWeather function
    await checkWeather('CityName', false);

    // Assertions based on the expected behavior
    expect(errorDivMock.style.display).toBe('none');
    expect(weatherSectionDivMock.style.display).toBe('block');
    expect(headerCountryDivMock.style.display).toBe('block');
    expect(weatherSectionDivMock.textContent).toContain('Temperature: 25');
    expect(weatherSectionDivMock.textContent).toContain('Description: Sunny');
    expect(weatherSectionDivMock.textContent).toContain('Humidity: 60');
});
});
