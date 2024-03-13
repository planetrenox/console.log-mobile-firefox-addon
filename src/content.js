// Overriding console.log as an example
const originalConsoleLog = console.log;
console.log = (...args) => {
  originalConsoleLog(...args);
  // Here you could send messages to your background script if needed
};
