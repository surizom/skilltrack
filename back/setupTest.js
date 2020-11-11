jest.setTimeout(10000); // Allow async function to take more than 5seconds (ie 10)

global.console = {
  log: jest.fn(), // Disable logging when in Jest test
  info: console.info,
  error: console.error,
  warn: console.warn,
};
