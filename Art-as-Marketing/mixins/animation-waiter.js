export default {
  methods: {
    promiseRequestIdleCallback() {
      new Promise((resolve) => requestIdleCallback(resolve))
    },
    promiseRequestAnimationFrame() {
      new Promise((resolve) => requestAnimationFrame(resolve))
    },
    promiseSetTimeout(ms) {
      new Promise((resolve) => setTimeout(resolve, ms))
    },
    async *promiseGenerator() {
      var val = yield await this.promiseRequestIdleCallback();
      while(val = yield val);
    },
    async fetchWaitIdle() {
      let res2 = await this.promiseList.next();
      let res3 = await this.promiseList.next(this.promiseRequestIdleCallback(res2));
      let res4 = await this.promiseList.next(this.promiseRequestAnimationFrame(res3));
      let res5 = await this.promiseList.next(this.promiseSetTimeout(0), res4);
      return res5;
    }
  }
}
