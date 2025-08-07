/**
 * Shared test data and generators for Playwright tests.
 * This file contains functions to generate random user data 
 * for testing purposes.
 */

export const generateRandomUser = () => {
  const random = Math.floor(Math.random() * 1000000);
  return {
    name: `testuser${random}`,
    email: `testuser${random}@example.com`,
    password: '123456',
  };
};
