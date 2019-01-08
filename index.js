const { PromiseStatuses, promiseStatus } = require('promise-status-async');

module.exports = {
  async toBePending(promise) {
    const status = await promiseStatus(promise);
    const pass = status === PromiseStatuses.PROMISE_PENDING;
    if (pass) {
      return {
        message: () => 'expected promise not to be pending',
        pass: true,
      };
    }
    return {
      message: () => 'expected promise to be pending',
      pass: false,
    };
  },
};
