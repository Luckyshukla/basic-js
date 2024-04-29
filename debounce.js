// Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently,
// by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance.
/**
 * timer The value used to indicate a running debounce.
 * @param {*} func function that you want to execute after the debounce time
 * @param {*} timeout The amount of time you want the debounce function to wait after the last received action before executing func.
 * @returns {Function} - A debounced version of the input function .
 */
function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
