// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
import Vue from 'vue';

const eventBus = {};

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
}

Vue.use(eventBus);
