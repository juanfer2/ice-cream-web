export const confingMount = () =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })

export const showWarning = () =>
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    if (
      !args[0].includes(
        'Warning: An update to %s inside a test was not wrapped in act',
      ) ||
      !args[0].includes(
        'Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderers output format',
      )
    ) {
      console.log(...args)
    }
  })
