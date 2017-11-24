/**
 * Any shims required for running tests.
 */

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
