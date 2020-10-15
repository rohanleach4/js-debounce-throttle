/**
 * Look up Underscores _.debounce and _.throttle
 *
 * The event handler can only be debounced/throttled once. The returned function must be provided to any event listeners
 *
 * Here are code examples
 *
 */
 
 /* Debounce */
 /* JS */
 
function debounce(func, duration) {
  let timeout
  return function (...args) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}

const button2 = document.getElementById('buttony')

button2.addEventListener(
  'click',
  debounce(function () {
    clickHandle()
  }, 500)
);

/* throttle */
/* JS */

function clickHandle() {
  console.log("Test");
} 

function throttle(func, duration) {
  let shouldWait = false
  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args)
      shouldWait = true
      setTimeout(function () {
        shouldWait = false
      }, duration)
    }
  }
}

const button = document.getElementById('buttonx')

button.addEventListener(
  'click',
  throttle(function () {
    clickHandle()
  }, 500)
)
