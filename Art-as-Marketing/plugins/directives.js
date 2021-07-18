// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
import Vue from 'vue'
import Hammer from 'hammerjs'

Vue.directive("pan", {
	bind: function(el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.get("pan").set({ direction: Hammer.DIRECTION_HORIZONTAL });
			mc.on("pan", binding.value);
		}
	}
});

Vue.directive("tap", {
	bind: function(el, binding) {
		if (typeof binding.value === "function") {
			const mc = new Hammer(el);
			mc.on("tap", binding.value);
		}
	}
});
