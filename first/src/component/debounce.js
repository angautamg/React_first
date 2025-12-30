const debounce = (func, delay) => {
  let timer;
  return function (...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
export default debounce;
// Example usage:
const handleResize = () => {
  console.log('Window resized');
};
const debouncedResize = debounce(handleResize, 300);
window.addEventListener('resize', debouncedResize);
