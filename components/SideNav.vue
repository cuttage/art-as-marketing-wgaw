<template>
  <div id="myMenu">
    <transition
      ease="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leaver"
      :css="false"
    >
      <div
        v-if="toggleSidebar === true"
        v-bind:class="(toggleSidebar === true ? sidenav : '')"
        :key="sidenavKey"
      >
        <Links :key="appLinkKey" />
      </div>
    </transition>
    <div
      v-if="bkopen === true"
      class="blur bk"
      @click="WaitToDo"
      :key="componentKey"
      v-once
    />
  </div>
</template>

<script>
import { TweenMax, Back } from 'gsap/dist/gsap'
import { mapState, mapMutations, mapActions } from 'vuex'
import Links from '~/components/Links.vue'

export default {
  name: 'SideNav',
  props: ['SideNav'],
  serverCacheKey: props => props.SideNav,
  render (h) {
    return h('div', this.SideNav)
  },
  data() {
    return {
      componentKey: "s" + 0,
      sidenav: 'sidenav',
      appLinkKey: "g" + 0,
      sidenavKey: "mf" + 0,
      smallTime: 250,
      smallerTime: 220
    }
  },
  computed: mapState(['toggleSidebar', 'bkopen']),
  components: {
    Links
  },
  methods: {
    ...mapActions({
      toggleTimers: 'toggleTimers'
    }),
    ...mapMutations({
      sidenavChange: 'TOGGLE_SIDEBAR',
      martaChange: 'TOGGLE_MARTA',
      changeTimerE: 'CHANGE_TIMER_E',
      changeBkopen: 'TOGGLE_BKOPEN',
      changeRtm: 'TOGGLE_RTM'
    }),
    flushQueue() {
      return new Promise((resolve) => setTimeout(resolve, 0));
    },
    promisea() {
      return this.changeRtm();
    },
    sidenavChangea() {
      return this.sidenavChange();
    },
    async WaitToDo() {
      const promisea = await this.promisea();
      const sidenavChangea = await this.sidenavChangea(promisea);
      return sidenavChangea;
    },
    beforeEnter: function(el) {
      TweenMax.set(
        el,
        {
          transformOrigin: '0% 100%'
        }
      )
    },
    enter: function(el, done) {
      TweenMax.fromTo(
        el,
        0.27,
        {
          xPercent: -100
        },
        {
          xPercent: 0,
          ease: Back.easeOut.config(1.3),
          delay: 0.3,
          force3D: true,
          onComplete:done
        }
      );
      done();
    },
    async promisey() {
      await this.flushQueue()
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$nextTick(() => this.changeBkopen()));
        }, 220);
      });
    },
    doey() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$nextTick(() => this.changeRtm()));
        }, 720);
      });
    },
    async afterEnter() {
      const [promisey, doey] = await Promise.all([this.promisey(), this.doey()]);
      promisey && doey;
    },
    beforeLeave: function() {
      this.changeBkopen();
    },
    async leaver(el, done) {
      await this.flushQueue()
      this.changeTimerE(await setImmediate(async () => {
        await this.leave(el, done);
      }, this.smallTime))
    },
    leave: function(el, done) {
      TweenMax.to(el, 0.25, {
        xPercent: -100,
        autoAlpha:0,
        delay: 0.3,
        force3D: true,
        onComplete:done
      }).then(() => {this.martaGetBackVisible()});
    },
    promise() {
      new Promise(resolve => {
        setTimeout(() => resolve(this.$nextTick(() => this.martaChange())), 220)
      })
    },
    async martaGetBackVisible() {
      this.$nextTick(() => this.toggleTimers());

      let result = await this.promise();

      result;
    }
  },
  beforeDestroy() {
    this.$nextTick(() => this.toggleTimers());
  }
}
</script>

<style lang="scss" scoped>
// Copyright (c) 2021 Marta Fattori
// This code is licensed under MIT license (see LICENSE-MIT for details)
/* Hide scrollbar for Chrome, Safari and Opera */
.sidenav::-webkit-scrollbar {
  display: none;
}

.sidenav {
  will-change: transform;
  height: 100%;
  width: 274px;
  background-color: transparent;
  z-index: 10000;
  position: fixed;
  max-height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  box-sizing: border-box;
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  overflow: -moz-scrollbars-none; /* Hide scrollbar older versions of Firefox? */
}

.bk {
  backface-visibility: hidden;
}

.blur {
  width: 100%;
  height: 100%;
  background-color: rgba(110, 110, 110, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
