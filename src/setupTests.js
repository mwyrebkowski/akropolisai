// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'; 

// Mock react-router-dom hooks for tests
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
  BrowserRouter: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ element }) => element,
}), { virtual: true }); 