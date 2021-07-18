<template>
  <div id="myMenu">
    <transition
      ease="out-in"
      @before-enter="beforeEnterPort"
      @enter="enterPort"
      @after-enter="afterEnterPort"
      @before-leave="beforeLeavePort"
      @leave="leaverPort"
      :css="false"
    >
      <div
        v-if="toggleSidebar === true"
        v-bind:class="(toggleSidebar === true ? sidenav : '')"
        :key="sidenavKey"
      >
        <LinksMob :key="appLinkKey" />
      </div>
    </transition>
    <div
      v-if="bkopen === true"
      class="blur bk"
      @click="WaitToDoPort"
      :key="componentKey"
      v-once
    />
  </div>
</template>

<script>
import { TweenMax } from 'gsap/dist/gsap'
import { mapState, mapMutations, mapActions } from 'vuex'
import LinksMob from '~/components/LinksMob.vue'

export default {
  name: 'SideNavPor',
  props: ['SideNavPor'],
  serverCacheKey: props => props.SideNavPor,
  render (h) {
    return h('div', this.SideNavPor)
  },
  data() {
    return {
      componentKey: "sh" + 0,
      sidenav: 'sidenav',
      appLinkKey: "gh" + 0,
      sidenavKey: "mfh" + 0,
      smallTime: 250
    }
  },
  computed: mapState(['toggleSidebar', 'bkopen']),
  components: {
    LinksMob
  },
  methods: {
    ...mapActions({
      toggleTimers: 'toggleTimers'
    }),
    ...mapMutations({
      sidenavChange: 'TOGGLE_SIDEBAR',
      martaChange: 'TOGGLE_MARTA',
      changeTimerF: 'CHANGE_TIMER_F',
      changeBkopen: 'TOGGLE_BKOPEN',
      changeRtm: 'TOGGLE_RTM'
    }),
    flushQueue() {
      return new Promise((resolve) => setTimeout(resolve, 0));
    },
    promiseaPort() {
      return this.changeRtm();
    },
    sidenavChangeaPort() {
      return this.sidenavChange();
    },
    async WaitToDoPort() {
      const promiseaPort = await this.promiseaPort();
      const sidenavChangeaPort = await this.sidenavChangeaPort(promiseaPort);
      return sidenavChangeaPort;
    },
    beforeEnterPort: function(el) {
      TweenMax.set(
        el,
        {
          transformOrigin: '50% 50%'
        }
      )
    },
    enterPort: function(el, done) {
      TweenMax.fromTo(
        el,
        0.005,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          delay: 0.26,
          force3D: true,
          onComplete:done
        }
      );
      done();
    },
    async promiseyPort() {
      await this.flushQueue()
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$nextTick(() => {
            this.changeBkopen()
          }));
        }, 220);
      });
    },
    doeyPort() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.$nextTick(() => this.changeRtm()));
        }, 720);
      });
    },
    async afterEnterPort() {
      const [promiseyPort, doeyPort] = await Promise.all([this.promiseyPort(), this.doeyPort()]);
      promiseyPort && doeyPort;
    },
    beforeLeavePort: function() {
      this.changeBkopen();
    },
    async leaverPort(el, done) {
      await this.flushQueue()
      this.changeTimerF(await setImmediate(async () => {
        await this.leavePort(el, done);
      }, this.smallTime))
    },
    leavePort: function(el, done) {
      TweenMax.to(el, 0.005, {
          autoAlpha: 0,
          delay: 0.3,
          force3D: true,
          onComplete:done
        }).then(() => {this.martaGetBackVisiblePort()});
    },
    promisePort() {
      new Promise(resolve => {
        setTimeout(() => resolve(this.$nextTick(() => this.martaChange())), 220)
      })
    },
    async martaGetBackVisiblePort() {
      this.$nextTick(() => this.toggleTimers());

      let portrait = await this.promisePort();

      portrait;
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
  z-index: 10000;
  height: 100%;
  width: 174.825px;
  background-color: transparent;
  position: fixed;
  max-height: 100%;
  overflow: auto;
  top: 0;
  left: 50vw;
  margin-left: -87.4125px;
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
