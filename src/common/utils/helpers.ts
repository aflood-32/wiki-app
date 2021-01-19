export const debounce = (fn: Function, delay: number): Function => {
  let timeoutID: NodeJS.Timeout | null = null;
  // eslint-disable-next-line func-names
  return function () {
    // @ts-ignore
    clearTimeout(timeoutID);
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    // @ts-ignore
    const that = this;
    console.log(args, that);
    timeoutID = setTimeout(() => {
      fn.apply(that, args);
      console.log('delay');
    }, delay);
  };
};
