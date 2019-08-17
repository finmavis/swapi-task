import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation((...args) => {
    // eslint-disable-next-line
    console.warn('window.fetch is not mocked for this call', ...args);
    return Promise.reject(new Error('This must be mocked!'));
  });
});

afterEach(() => {
  window.fetch.mockRestore();
});

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   clear: jest.fn(),
// };
// global.localStorage = localStorageMock;
