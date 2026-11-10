// Shared by the API and Vite so the document response and API responses use
// the same policy. CommonJS keeps this module compatible with the Jest setup.
const cspDirectives = {
  defaultSrc: ["'self'"],
  baseUri: ["'self'"],
  connectSrc: ["'self'", 'http://localhost:4000', 'ws://localhost:5175'],
  fontSrc: ["'self'", 'data:'],
  formAction: ["'self'"],
  frameAncestors: ["'none'"],
  imgSrc: ["'self'", 'data:', 'https:'],
  objectSrc: ["'none'"],
  scriptSrc: ["'self'"],
  styleSrc: ["'self'"],
  upgradeInsecureRequests: null,
};

module.exports = { cspDirectives };
